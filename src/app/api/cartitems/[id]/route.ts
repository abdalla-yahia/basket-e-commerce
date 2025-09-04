import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import { TokenInterFace } from "@/Interfaces/UserInterface";
import { prisma } from "@/libs/Prisma/Prisma_Client";



/**
 * @access Loged Users
 * @method DELETE
 * @param NoParam
 * @path '~/api/CartItems'
 * @returns CartItem
 */

export async function DELETE(request: NextRequest,{params}:{params:Promise<{id:string}>}):Promise<NextResponse> {
  try {
    const {id} = await params;
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

    //Check If Existes In Cart
    const IsExiste = await prisma.cartItem.findUnique({
      where:{
        id: id
      }
    })
    if(!IsExiste){
      return NextResponse.json({message:'Item Not Found In Cart'},{status:404})
    }
    await prisma.cartItem.delete({
      where:{id: id}
    })

    return NextResponse.json(
      { message: "Product Deleted From Cart Successfully",status:200 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Update CartItem", error },
      { status: 500 }
    );
  }
}