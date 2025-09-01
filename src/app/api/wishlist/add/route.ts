import { NextResponse } from "next/server";
import { prisma } from "@/libs/Prisma/Prisma_Client";

export async function POST(req: Request) {
  try {
    const { userId, productId } = await req.json();

    // تأكد إن الـ wishlist موجودة للمستخدم
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
      // لو المنتج مش موجود ضيفه
      const exists = wishlist.products.some((p) => p.id === productId);
      if (!exists) {
        wishlist = await prisma.wishlist.update({
          where: { userId },
          data: { products: { connect: { id: productId } } },
          include: { products: true },
        });
      }
    }

    return NextResponse.json(wishlist, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to add product to wishlist" }, { status: 500 });
  }
}
