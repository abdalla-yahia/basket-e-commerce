import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import { TokenInterFace } from "@/Interfaces/UserInterface";
import { prisma } from "@/libs/Prisma/Prisma_Client";

/**
 * @access Only Admin
 * @method GET
 * @param NoParam
 * @path '~/api/orders'
 * @returns All Orders
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
    //Check If User Role Is Admin
    if (Decode?.role !== "ADMIN") {
      return NextResponse.json(
        { message: "These permissions are restricted to admins only" },
        { status: 403 }
      );
    }
    //Get All Orders
    const orders = await prisma.orders.findMany({
      select: {
        id: true,
        user: true,
        status: true,
      },
    });
    return NextResponse.json(
      { message: "Get All Orders Successfully", orders },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Get All Orders", error },
      { status: 500 }
    );
  }
}

/**
 * @access Loged Users
 * @method POST
 * @param NoParam
 * @path '~/api/orders'
 * @returns Order
 */

export async function POST(request: NextRequest) {
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

    //Check If User Have Cart
    const cart = await prisma.cart.findUnique({
      where: { userId: Decode?.id },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!cart || cart?.items?.length === 0) {
      return NextResponse.json({ message: "Cart Is Empty" }, { status: 404 });
    }

    //Create Order
    const order = await prisma.orders.create({
      data: {
        userId: Decode?.id,
        status: "PENDING",
      },
    });

    // 3. Create order items
    const orderItemsData = cart?.items?.map((item) => ({
      orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
      price: item.product.price,
    }));
    //Create Order Item
    await prisma.orderItem.createMany({
      data: orderItemsData,
    });
    //Clear Cart
    await prisma.cart.deleteMany({ where: { id: cart?.id } });

    return NextResponse.json(
      { message: "Order Created Successfully", order },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Create A New Order", error },
      { status: 500 }
    );
  }
}
