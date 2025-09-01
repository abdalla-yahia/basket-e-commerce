import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import { TokenInterFace } from "@/Interfaces/UserInterface";
import { prisma } from "@/libs/Prisma/Prisma_Client";

/**
 * @access Only Logged Users
 * @method GET
 * @param NoParam
 * @path '~/api/Carts'
 * @returns All Carts
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

    //Get All Carts
    const carts = await prisma.cart.findUnique({
      where:{userId:Decode?.id},
      include:{
        items:{
          include:{
            product:true
          }
        }
      }
    });
    return NextResponse.json(
      { message: "Get All Carts Successfully", carts },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Get All Carts", error },
      { status: 500 }
    );
  }
}

/**
 * @access Loged Users
 * @method POST
 * @param NoParam
 * @path '~/api/Carts'
 * @returns Cart
 */

export async function POST(request: NextRequest) {
  try {
    const { data } = await request.json();
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

    //Check If User Have Cart Before
    const Cart = await prisma.cart.findUnique({
      where:{userId:Decode?.id},
      include:{
        items:true
      }
    })
    if(!Cart){
      //Create Cart
        await prisma.cart.create({data:data});
      
    }else{
      const product = Cart?.items?.find(item=>item?.id === data?.productId)
      if(product){
        await prisma.cartItem.update({
          where: {
            cartId_productId: {
              cartId: Cart.id,
              productId: data?.productId as string
            }
          },
          data: {
            quantity: product?.quantity + data?.product?.quantity
          }
        })
      }else {
         await prisma.cartItem.create({
        data:data?.productId
      });
      }
    }
    return NextResponse.json(
      { message: "Cart Created Successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Create A New Cart", error },
      { status: 500 }
    );
  }
}
