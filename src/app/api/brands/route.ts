import { prisma } from "@/libs/Prisma/Prisma_Client";
import { NextRequest, NextResponse } from "next/server";
import Jwt from 'jsonwebtoken';
import { TokenInterFace } from "@/Interfaces/UserInterface";
import { CreateBrandValidation } from "@/Validation/BrandValidation";

/**
 * @access All Users
 * @method GET
 * @param id 
 * @path '~/api/brands'
 * @returns  Get All Brands
 */

export async function GET(){
    try {
        const brands = await prisma.brand.findMany({
            select:{
                id:true,
                image:true,
                description:true,
                title:true
            }
        })
        return NextResponse.json({message:'Get All Brands Successfully',brands},{status:200})
    } catch (error) {
        return NextResponse.json({message:'Faild To Get All Brands',error},{status:500})
    }
}

/**
 * @access Only Admins
 * @method POST
 * @param id 
 * @path '~/api/brands'
 * @returns  Create Anew Brand
 */

export async function POST(request:NextRequest){
    try {
        const data = await request.json()
            //Get Admin From Cookie
            const cookie = request.cookies.get('authToken')
            if(!cookie){
                return NextResponse.json({message:'You Are Not Login'},{status:401})
            }
            const token = cookie?.value;
            const Decode = Jwt.verify(token,process.env.JWT_SECRET_KEY as string) as TokenInterFace
            if(!Decode){
            return NextResponse.json({message:'You Are Not Login'},{status:402})
            }
            if(Decode?.role !== 'ADMIN'){
                return NextResponse.json({message:'These permissions are restricted to admins only'},{status:403})
            }
            //Check Validation Of Data 
            const Validation = CreateBrandValidation?.safeParse(data)
            if(!Validation?.success){
                return NextResponse.json({message:'Data Not Valide',error:Validation.error.issues?.map(e=>e.message).join(', ')})
            }
            //Create Anew Brand
            const brand = await prisma.brand.create({
                data:Validation?.data
            })
            return NextResponse.json({message:'Brand Created Successfully',brand},{status:201})
    } catch (error) {
        return NextResponse.json({message:'Faild To Create New Brand',error},{status:500})
    }
}