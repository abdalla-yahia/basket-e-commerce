import { NextRequest, NextResponse } from "next/server";
import {Count_Of_Products} from '@/Utils/Constants'
import { prisma } from "@/libs/Prisma/Prisma_Client";

export async function GET(request:NextRequest,{params}:{params:Promise<{id:string}>}):Promise<NextResponse>{
    try {
        const {id} = await params;
        const searchText = request.nextUrl.searchParams.get('search') || ''
        const pageNumber = request.nextUrl.searchParams.get('pageNumber') || '1'

        //Get Products Of Category
        let products;
        
        const AllProducts = await prisma.category.findUnique({
            where:{id},select:{products:true}
        })
        if(searchText){
            products = await prisma.category.findUnique(
                {where:{id:id},
                select:{
                    products:{
                        take:Count_Of_Products,
                        skip:Count_Of_Products * (parseInt(pageNumber) - 1),
                        orderBy:{
                            title:'asc'
                        }
                    }
                }
            })
            products = products?.products?.filter(e=>e.title.includes(searchText) )
            
        }else{
            products = await prisma.category.findUnique(
                {where:{id:id},
                select:{
                    products:{
                        take:Count_Of_Products,
                        skip:Count_Of_Products * (parseInt(pageNumber) - 1),
                        orderBy:{
                            title:'asc'
                        }
                    }
                }
            })
        }
        const pages = (AllProducts?.products?.length as number / Count_Of_Products)
        return NextResponse.json({message:"Get Products Of Category Successfully",products,pages,status:200},{status:200})
    } catch (error) {
        return NextResponse.json({message:'Faild To Get Products On Category',error},{status:500})
    }
}