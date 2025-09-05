import { TokenInterFace } from "@/Interfaces/UserInterface";
import { prisma } from "@/libs/Prisma/Prisma_Client";
import { UpdateCategoryValidation } from "@/Validation/CategoryValidation";
import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import { Count_Of_Products } from "@/Utils/Constants";

/**
 * @access All Users
 * @method GET
 * @param id
 * @path '~/api/categories/[id]'
 * @returns  Get Products On Category
 */

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    const { id } = await params;
     const { searchParams } = request.nextUrl;
  const pageNumber = searchParams.get("pageNumber") || "1";
  const SearchText = searchParams.get("search") || "";
  const brands = searchParams.get("brands")?.split(",").filter((b) => b.trim() !== "") || [];
  const minPrice = Number(searchParams.get("minPrice")) || 0;
  const maxPrice = Number(searchParams.get("maxPrice")) || 99999;

    //Get All Products Of Category
    const AllProducts = await prisma.category.findUnique({
      where: { id },
      select: {
        products: {
           where: {
        title:SearchText ? {
          contains: SearchText,
          mode: "insensitive",
        } : undefined,
        brandId: brands?.length ? { in: brands } : undefined,
        price: { gte: minPrice, lte: maxPrice },
      },
        },
      },
    });
    // Get Products By Filter And Page Number
    const products = await prisma.category.findUnique({
      where: { id: id },
      select: {
        products: {
        where: {
            title:SearchText ? {
              contains: SearchText,
              mode: "insensitive",
            } : undefined,
            brandId: brands?.length ? { in: brands } : undefined,
            price: { gte: minPrice, lte: maxPrice },
          },
          ...(SearchText?{}:{
            take: Count_Of_Products,
            skip: Count_Of_Products * (parseInt(pageNumber) - 1),
          }),
          orderBy: {
            title: "asc",
          },
        },
      },
    });
    //Get Category
    const category = await prisma.category.findUnique({ where: { id: id } });
    //Get Count Of Pages
    const pages = Math.ceil(
      (AllProducts?.products?.length as number) / Count_Of_Products
    );
    return NextResponse.json(
      {
        message: "Get Products Of Category Successfully",
        category,
        products: products?.products,
        pages,
        status: 200,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Get Products On Category", error },
      { status: 500 }
    );
  }
}

/**
 * @access Only Admins
 * @method POST
 * @param id
 * @path '~/api/categories/[id]'
 * @returns  Get Updated Category
 */

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    //Get Data From Body
    const data = await request.json();
    // Get Id of Category From Params
    const { id } = await params;
    //Check If User Is Admin
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
    //Check If Is Category Existes
    const IsExistes = await prisma.category.findUnique({ where: { id } });
    if (!IsExistes) {
      return NextResponse.json(
        { message: "Category Not Found" },
        { status: 404 }
      );
    }
    //Check Validation Of Data
    const Validation = UpdateCategoryValidation.safeParse(data);
    if (!Validation.success) {
      return NextResponse.json({ message: "Data Not Valide" }, { status: 400 });
    }
    //Update Category
    const category = await prisma.category.update({
      where: { id },
      data: Validation?.data,
    });
    return NextResponse.json(
      { message: "Category Updated Successfully", category },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Update Category", error },
      { status: 500 }
    );
  }
}

/**
 * @access Only Admins
 * @method DELETE
 * @param id
 * @path '~/api/categories/[id]'
 * @returns  null
 */

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    // Get Id of Category From Params
    const { id } = await params;
    //Check If User Is Admin
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
    //Check If Is Category Existes
    const IsExistes = await prisma.category.findUnique({ where: { id } });
    if (!IsExistes) {
      return NextResponse.json(
        { message: "Category Not Found" },
        { status: 404 }
      );
    }

    //Delete Category
    await prisma.category.delete({ where: { id } });
    return NextResponse.json(
      { message: "Category Deleted Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Delete Category", error },
      { status: 500 }
    );
  }
}
