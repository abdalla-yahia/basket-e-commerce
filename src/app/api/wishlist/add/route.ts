import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/Prisma/Prisma_Client";
import { TokenInterFace } from "@/Interfaces/UserInterface";
import Jwt from "jsonwebtoken";

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
    const wishlist = await prisma.wishlist.findFirst({
      where: { userId: Decode?.id },
      include: { products: true },
    });

    

    return NextResponse.json({message:"Get All Products Wishlist Successfully",wishlist}, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch wishlist" }, { status: 500 });
  }
}


export async function POST(req: Request) {
  try {
    const { userId, productId } = await req.json();
    //Check if Existe Wish List
    let wishlist = await prisma.wishlist.findUnique({
      where: { userId },
      include: { products: true },
    });

    if (!wishlist) {
      wishlist = await prisma.wishlist.create({
        data: {
          userId,
          products: { connect: { id: productId } },
        },
        include: { products: true },
      });
    } else {
      // If Product Not Existes Add It
      const exists = wishlist.products.some((p) => p.id === productId);
      if (!exists) {
        wishlist = await prisma.wishlist.update({
          where: { userId },
          data: { products: { connect: { id: productId } } },
          include: { products: true },
        });
      }
    }

    return NextResponse.json({message:"Add Product To WishList Successfully",wishlist}, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to add product to wishlist" }, { status: 500 });
  }
}
