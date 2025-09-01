import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import { TokenInterFace } from "@/Interfaces/UserInterface";
import { prisma } from "@/libs/Prisma/Prisma_Client";

export async function GET(request: NextRequest,{params}:{params:Promise<{id:string}>}):Promise<NextResponse> {
  try {
    const {id} = await params
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
    const wishlist = await prisma.wishlist.findUnique({
      where: { userId: id },
      include: { products: true },
    });

    return NextResponse.json({message:"Get All Products Wishlist Successfully",wishlist}, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch wishlist" }, { status: 500 });
  }
}

