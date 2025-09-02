import { prisma } from "@/libs/Prisma/Prisma_Client";
import { NextRequest, NextResponse } from "next/server";
import {Count_Of_Products} from '@/Utils/Constants';

/**
 * @access Every One
 * @method GET
 * @param NoParam 
 * @path '~/api/products'
 * @returns All Products
 */

export async function GET(request:NextRequest){
    const pageNumber = request.nextUrl.searchParams?.get('pageNumber') || '1';
    try {
        const Allproducts = await prisma.product.findMany()
        //Get All Products
        const products = await prisma.product.findMany({
            skip:Count_Of_Products * (parseInt(pageNumber) - 1),
            take:Count_Of_Products,
            include:{
                category:{
                    select:{
                        id:true,
                        title:true,
                        image:true
                    },
                },
                brand:{
                    select:{
                        id:true,
                        title:true,
                        image:true
                    }
                }         
            }
        })
        const pages = Math.ceil(Allproducts?.length / Count_Of_Products)
        console.log("PageNumber On Server",pageNumber)
        return NextResponse.json({message:'Get All Products Successfully',products,pages},{status:200})
    } catch (error) {
        return NextResponse.json({message:'Faild To Get All Products',error},{status:500})
    }
}

