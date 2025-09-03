import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import { TokenInterFace } from "@/Interfaces/UserInterface";
import { prisma } from "@/libs/Prisma/Prisma_Client";

/**
 * @access Loged Users
 * @method GET
 * @param id
 * @path '~/api/orders/[id]'
 * @returns  Get Order By Id
 */

export async function GET(request: NextRequest,{ params }: { params: Promise<{ userId: string}> }): Promise<NextResponse> {
  try {
    //Get UserId
    const { userId } = await params;
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
    //Check If Order Is Exiestes
    const IsExistes = await prisma.orders.findMany({ where: { userId: userId } });
    if (!IsExistes) {
      return NextResponse.json({ message: "Order Not Found" }, { status: 404 });
    }
    //Get Order
    const order = await prisma.orders.findMany({ where: { userId: userId } });
    return NextResponse.json(
      { message: "Get Order Successfully", order },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Get Order", error },
      { status: 500 }
    );
  }
}


