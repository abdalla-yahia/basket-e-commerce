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
    const searchText = request.nextUrl.searchParams?.get('search') || '';
    const pageNumber = request.nextUrl.searchParams.get('pageNumber') || '1'

    try {
        const AllProducts = await prisma.product.findMany()
        let products;
        if(searchText) {
             products = await prisma.product.findMany({
                where:{
                    title:{
                        startsWith:searchText,
                        mode:'insensitive'
                    }
                },
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
                },
                orderBy:{
                    title:'asc'
                },
                skip:Count_Of_Products * (parseInt(pageNumber) - 1),
                take:Count_Of_Products,
            })
        }else {
             products = await prisma.product.findMany({
                orderBy:{
                    title:'asc'
                },
                skip:Count_Of_Products * (parseInt(pageNumber) - 1),
                take:Count_Of_Products,
             })
        }      
        const pages = Math.ceil(AllProducts?.length / Count_Of_Products)
        return NextResponse.json({message:'Get All Products Successfully',products,pages},{status:200})
    } catch (error) {
        return NextResponse.json({message:'Faild To Get All Products',error},{status:500})
    }
}

