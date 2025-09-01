import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import { TokenInterFace } from "@/Interfaces/UserInterface";
import { prisma } from "@/libs/Prisma/Prisma_Client";

/**
 * @access Only Logged users
 * @method GET
 * @param NoParam
 * @path '~/api/CartItems'
 * @returns All CartItems
 */

export async function GET(request: NextRequest) {
  try {
    //Check If User Is Logein
    const cookie = request.cookies.get("authToken");
    if (!cookie) {
      return NextResponse.json(
        { message: "You Are Not Login" },
        { status: 401 }
      );
    }
    const token = cookie?.value;
    const Decode = Jwt.verify(
      token,
      process.env.JWT_SECRET_KEY as string
    ) as TokenInterFace;
    if (!Decode) {
      return NextResponse.json(
        { message: "You Are Not Login" },
        { status: 401 }
      );
    }
    //Get All CartItems
    const cartItems = await prisma.cartItem.findMany();
    return NextResponse.json(
      { message: "Get All CartItems Successfully", cartItems },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Get All CartItems", error },
      { status: 500 }
    );
  }
}

/**
 * @access Loged Users
 * @method POST
 * @param NoParam
 * @path '~/api/CartItems'
 * @returns CartItem
 */

export async function POST(request: NextRequest) {
  try {
    //Get Data From Request
    const data = await request.json();
    //Check If User Is Logein
    const cookie = request.cookies.get("authToken");
    if (!cookie) {
      return NextResponse.json(
        { message: "You Are Not Login" },
        { status: 401 }
      );
    }
    const token = cookie?.value;
    const Decode = Jwt.verify(
      token,
      process.env.JWT_SECRET_KEY as string
    ) as TokenInterFace;
    if (!Decode) {
      return NextResponse.json(
        { message: "You Are Not Login" },
        { status: 401 }
      );
    }
    //Check If User Have A Cart
    let Cart = await prisma.cart.findUnique({ where: { userId: Decode?.id } });
    
        if (!Cart) {
          Cart =  await prisma.cart.create({
              data:{
                userId:Decode?.id,
                title:`${Decode?.name}-Cart`
              }
            })
        }
    
    //Check If Product Existes In CartItem Or Not
        let CartItem = await prisma.cartItem.findUnique({
      where: {
        cartId_productId: {
          cartId: Cart.id,
          productId: data.productId,
        },
      },
    });

    if (!CartItem) {
      CartItem = await prisma.cartItem.create({
        data: {
          productId: data.productId as string,
          cartId: Cart.id as string,
          quantity: data.quantity || 1,
        },
      });
    } else {
      CartItem = await prisma.cartItem.update({
        where: {
          cartId_productId: {
            cartId: Cart.id,
            productId: data.productId,
          },
        },
        data: {
          quantity: data.quantity as number,
        },
      });
    }

  

    return NextResponse.json(
      { message: "Product Add To Cart Item Successfully" ,CartItem},
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Update CartItem", error },
      { status: 500 }
    );
  }
}
