import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/Prisma/Prisma_Client";
import { TokenInterFace } from "@/Interfaces/UserInterface";
import Jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    // Check If User Is Login
    const cookie = request.cookies.get("authToken");
    if (!cookie) {
      return NextResponse.json(
        { message: "You Are Not Login" },
        { status: 401 }
      );
    }

    const token = cookie.value;
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

    // Parse body
    const body = await request.json();
    const { productId } = body;

    // Update wishlist
    const wishlist = await prisma.wishlist.update({
      where: { userId: Decode.id },  
      data: {
        products: {
          disconnect: [{ id: productId }], 
        },
      },
      include: { products: true },
    });

    return NextResponse.json(
      { message: "Remove Product From Wish List Successfully", wishlist },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to remove product" },
      { status: 500 }
    );
  }
}
