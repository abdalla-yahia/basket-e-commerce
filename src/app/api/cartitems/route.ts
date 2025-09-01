import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import { TokenInterFace } from "@/Interfaces/UserInterface";
import { prisma } from "@/libs/Prisma/Prisma_Client";

/**
 * @access Only Admin
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
    //Create CartItem
    const cartItem = await prisma.cartItem.create({
      data: data,
    });
    return NextResponse.json(
      { message: "CartItem Created Successfully", cartItem },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Create A New CartItem", error },
      { status: 500 }
    );
  }
}
