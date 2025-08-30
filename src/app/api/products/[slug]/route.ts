import  Jwt  from "jsonwebtoken";

/**
 * @access Every One
 * @method GET
 * @param slug 
 * @path '~/api/products/[slug]'
 * @returns  One Product
 */

import { prisma } from "@/libs/Prisma/Prisma_Client";
import { UpdataProductValidation } from "@/Validation/ProductValidation";
import { NextRequest, NextResponse } from "next/server";
import { TokenInterFace } from "@/Interfaces/UserInterface";

export async function GET(_:unknown,{params}:{params:Promise<{slug:string}>}):Promise<NextResponse>{
    try {
        const {slug} = await params;
        // Check If Product Is Existes
        const IsExistes = await prisma.product.findUnique({where:{slug}})
        if(!IsExistes){
            return NextResponse.json({message:'Product Not Found'},{status:404})
        }
        // Get Product
        const product = await prisma.product.findUnique({where:{slug}})
        return NextResponse.json({message:'Get Product Successfully',product},{status:200})
    } catch (error) {
        return NextResponse.json({message:'Faild To Get Product',error},{status:500})
    }
}


/**
 * @access Only Admins
 * @method POST
 * @param slug 
 * @path '~/api/products/[slug]'
 * @returns  Updated Product
 */

export async function POST(request:NextRequest,{params}:{params:Promise<{slug:string}>}):Promise<NextResponse>{
    try {
        //Get Data From Body
        const data = await request.json()
        // Get Slug
        const {slug} = await params;
        //Check If User Is Admin
        const cookie = request.cookies.get('authToken')
        if(!cookie){
            return NextResponse.json({message:'You Are Not Login'},{status:401})
        }
        const token = cookie?.value;
        const Decode = Jwt.verify(token,process.env.JWT_SECRET_KEY as string) as TokenInterFace
        if(!Decode){
            return NextResponse.json({message:'You Are Not Login'},{status:401})
        }
        //Check If User Role Is Admin
        if(Decode?.role !== 'ADMIN'){
            return NextResponse.json({message:'These permissions are restricted to admins only'},{status:403})
        }
        //Check If Is Product Existes
        const IsExistes = await prisma.product.findUnique({where:{slug}})
        if(!IsExistes){
            return NextResponse.json({message:'Product Not Found'},{status:404})
        }
        //Check Validation Of Data
        const Validation = UpdataProductValidation.safeParse(data)
        if(!Validation.success){
            return NextResponse.json({message:'Data Not Valide'},{status:400})
        }
        //Update Product
        const product = await prisma.product.update({
            where:{slug},
            data:Validation?.data
        })
        return NextResponse.json({message:'Product Updated Successfully',product},{status:201})
    } catch (error) {
        return NextResponse.json({message:'Faild To Update Product',error},{status:500})
    }
}


/**
 * @access Only Admins
 * @method DELETE
 * @param slug 
 * @path '~/api/products/[slug]'
 * @returns  null
 */

export async function DELETE(request:NextRequest,{params}:{params:Promise<{slug:string}>}):Promise<NextResponse>{
    try {
        // Get Slug
        const {slug} = await params;
        //Check If User Is Logein
        const cookie = request.cookies.get('authToken')
        if(!cookie){
            return NextResponse.json({message:'You Are Not Login'},{status:401})
        }
        const token = cookie?.value ;
        const Decode = Jwt.verify(token, process.env.JWT_SECRET_KEY as string) as unknown as TokenInterFace
        if(!Decode){
            return NextResponse.json({message:'You Are Not Login'},{status:401})
        }
        //Check If User Role Is Admin
        if(Decode?.role !== 'ADMIN'){
            return NextResponse.json({message:'These permissions are restricted to admins only'},{status:403})
        }
        //Check If Is Product Existes
        const IsExistes = await prisma.product.findUnique({where:{slug}})
        if(!IsExistes){
            return NextResponse.json({message:'Product Not Found'},{status:404})
        }
        //Delete Product
        await prisma.product.delete({where:{slug}})
        return NextResponse.json({message:'Product Deleted Successfully'},{status:200})
    } catch (error) {
        return NextResponse.json({message:'Faild To Delete Product',error},{status:500})
    }
}