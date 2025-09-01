import { NextResponse } from "next/server";
import { prisma } from "@/libs/Prisma/Prisma_Client";

export async function POST(req: Request) {
  try {
    const { userId, productId } = await req.json();

    const wishlist = await prisma.wishlist.update({
      where: { userId },
      data: {
        products: {
          disconnect: { id: productId },
        },
      },
      include: { products: true },
    });

    return NextResponse.json(wishlist, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to remove product" }, { status: 500 });
  }
}
