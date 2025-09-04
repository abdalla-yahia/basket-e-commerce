import Jwt from "jsonwebtoken";
import slugify from "slugify";
import { prisma } from "@/libs/Prisma/Prisma_Client";
import { NextRequest, NextResponse } from "next/server";
import { TokenInterFace } from "@/Interfaces/UserInterface";
import { CreateProductValidation } from "@/Validation/ProductValidation";
import { Count_Of_Products } from "@/Utils/Constants";

/**
 * @access Every One
 * @method GET
 * @param NoParam
 * @path '~/api/products'
 * @returns All Products
 */

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const pageNumber = searchParams.get("pageNumber") || "1";
  const SearchText = searchParams.get("search") || "";
  const categories = searchParams.get("categories")?.split(",") || [];
  const brands = searchParams.get("brands")?.split(",") || [];
  const minPrice = Number(searchParams.get("minPrice")) || 0;
  const maxPrice = Number(searchParams.get("maxPrice")) || 99999;
  try {
    //Get All Products On Site
    const FullyProducts = await prisma.product.findMany({});
    //To Get Total Pages
    const AllProducts = await prisma.product.findMany({
      where: {
        title: {
          startsWith: SearchText,
        },
        categoryId: categories?.length ? { in: categories } : undefined,
        brandId: brands?.length ? { in: brands } : undefined,
        price: { gte: minPrice, lte: maxPrice },
      },
    });
    //Get All Products By Search And Filter
    const products = await prisma.product.findMany({
      where: {
        title:SearchText ? {
          contains: SearchText,
          mode: "insensitive",
        } : undefined,
        categoryId: categories?.length ? { in: categories } : undefined,
        brandId: brands?.length ? { in: brands } : undefined,
        price: { gte: minPrice, lte: maxPrice },
      },
      include: {
        category: {
          select: {
            id: true,
            title: true,
            image: true,
          },
        },
        brand: {
          select: {
            id: true,
            title: true,
            image: true,
          },
        },
      },
      take: Count_Of_Products,
      skip: Count_Of_Products * (parseInt(pageNumber) - 1),
      orderBy: {
        title: "asc",
      },
    });

    const pages = Math.ceil(AllProducts?.length / Count_Of_Products);
    return NextResponse.json(
      {
        message: "Get All Products Successfully",
        products,
        FullyProducts,
        pages,
        status: 200,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Get All Products", error },
      { status: 500 }
    );
  }
}

/**
 * @access Admin Only
 * @method Post
 * @param NoParam
 * @path '~/api/products'
 * @returns New Product
 */

export async function POST(requset: NextRequest) {
  try {
    const data = await requset.json();
    //Get Admin From Cookie
    const cookie = requset.cookies.get("authToken");
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
        { status: 402 }
      );
    }
    if (Decode?.role !== "ADMIN") {
      return NextResponse.json(
        { message: "These permissions are restricted to admins only" },
        { status: 403 }
      );
    }
    //Check Validation Of Data
    const Validation = CreateProductValidation.safeParse(data);
    if (!Validation?.success) {
      return NextResponse.json({
        message: "Data Not Valide",
        error: Validation.error.issues?.map((e) => e.message).join(", "),
      });
    }
    //Create Slug
    const baseSlug = slugify(Validation.data.title, {
      locale: "ar",
      replacement: "-",
    });
    //Check Existeng
    const existingProducts = await prisma.product.findMany({
      where: { slug: { startsWith: baseSlug } },
      select: { slug: true },
    });

    // Create Unique Slug
    let slug = baseSlug;
    if (existingProducts.length > 0) {
      slug = `${baseSlug}-${existingProducts.length + 1}`;
    }
    //Create Product
    const product = await prisma.product.create({
      data: {
        slug,
        ...Validation?.data,
      },
    });
    return NextResponse.json(
      { message: "Create Product Successfully", product, status: 201 },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Faild To Create Product", error },
      { status: 500 }
    );
  }
}
