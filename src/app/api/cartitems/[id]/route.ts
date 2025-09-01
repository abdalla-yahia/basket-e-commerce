import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import { TokenInterFace } from "@/Interfaces/UserInterface";
import { prisma } from "@/libs/Prisma/Prisma_Client";

/**
 * @access Loged Users
 * @method GET
 * @param id
 * @path '~/api/cartItems/[id]'
 * @returns  Get CartItem By Id
 */

export async function GET(request: NextRequest,{ params }: { params: Promise<{ id: string }> }): Promise<NextResponse> {
  try {
    //Get Id
    const { id } = await params;
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
    //Check If CartItem Is Exiestes
    const IsExistes = await prisma.cartItem.findUnique({ where: { id: id } });
    if (!IsExistes) {
      return NextResponse.json({ message: "CartItem Not Found" }, { status: 404 });
    }
    //Get CartItem
    const cartItem = await prisma.cartItem.findUnique({ where: { id: id } });
    return NextResponse.json(
      { message: "Get CartItem Successfully", cartItem },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Get CartItem", error },
      { status: 500 }
    );
  }
}

/**
 * @access Loged Users
 * @method POST
 * @param id
 * @path '~/api/cartItems/[id]'
 * @returns  Get CartItem By Id
 */

export async function POST(request: NextRequest,{ params }: { params: Promise<{ id: string }> }): Promise<NextResponse> {
  try {
    //Get Id
    const { id } = await params;
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
    //Check If CartItem Is Exiestes
    const IsExistes = await prisma.cartItem.findUnique({ where: { id: id } });
    if (!IsExistes) {
      return NextResponse.json({ message: "CartItem Not Found" }, { status: 404 });
    }
    //Update CartItem
    const cartItem = await prisma.cartItem.update({
      where: { id: id },
      data: data,
    });
    return NextResponse.json(
      { message: "CartItem Updated Successfully", cartItem },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Update CartItem", error },
      { status: 500 }
    );
  }
}

/**
 * @access Loged Users
 * @method DELETE
 * @param id
 * @path '~/api/cartItems/[id]'
 * @returns  null
 */

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    //Get Id
    const { id } = await params;
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
    //Check If CartItem Is Exiestes
    const IsExistes = await prisma.cartItem.findUnique({ where: { id: id } });
    if (!IsExistes) {
      return NextResponse.json({ message: "CartItem Not Found" }, { status: 404 });
    }
    //Delete CartItem
    await prisma.cartItem.delete({ where: { id: id } });
    return NextResponse.json(
      { message: "CartItem Updated Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Delete CartItem", error },
      { status: 500 }
    );
  }
}
