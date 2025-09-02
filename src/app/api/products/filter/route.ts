import { prisma } from "@/libs/Prisma/Prisma_Client";
import { NextRequest, NextResponse } from "next/server";
import {Count_Of_Products} from '@/Utils/Constants';

export async function GET(request: NextRequest) {
  try {
  const AllProducts = await prisma.product.findMany()
  const { searchParams } = request?.nextUrl;
  const pageNumber = searchParams.get('pageNumber') || '1'
  const categories = searchParams.get("categories")?.split(",") || [];
  const brands = searchParams.get("brands")?.split(",") || [];
  const minPrice = Number(searchParams.get("minPrice")) || 0;
  const maxPrice = Number(searchParams.get("maxPrice")) || 999999;

  const products = await prisma.product.findMany({
    where: {
      categoryId: categories.length ? { in: categories } : undefined,
      brandId: brands.length ? { in: brands } : undefined,
      price: { gte: minPrice, lte: maxPrice },
    },
    take:Count_Of_Products,
    skip:Count_Of_Products * (parseInt(pageNumber) - 1)
  });
  
  const pages = AllProducts?.length / Count_Of_Products;

    return NextResponse.json({message:'Get Products By Filter Successfully',products,pages},{status:200});
    
  } catch (error) {
    return NextResponse.json({message:'Faild To Get Products By Filter',error},{status:500})
  }

}
