import { TokenInterFace } from "@/Interfaces/UserInterface";
import { prisma } from "@/libs/Prisma/Prisma_Client";
import { UpdateCategoryValidation } from "@/Validation/CategoryValidation";
import { NextRequest, NextResponse } from "next/server";
import Jwt from 'jsonwebtoken';

/**
 * @access All Users
 * @method GET
 * @param id 
 * @path '~/api/categories/[id]'
 * @returns  Get All Categories
 */


export async function GET({params}:{params:Promise<{id:string}>}):Promise<NextResponse>{
    try {
        //Get Id From Params
        const {id} = await params;
        //Check If Category Existes
        const IsExistes = await prisma.category.findUnique({where:{id}})
        if(!IsExistes){
            return NextResponse.json({message:'Category Not Found'},{status:404})
        }
        const category = await prisma.category.findUnique({where:{id}})
        return NextResponse.json({message:'Get Category Successfully',category},{status:200})
    } catch (error) {
        return NextResponse.json({message:'Faild To Get Category',error},{status:500})
    }
}


/**
 * @access Only Admins
 * @method POST
 * @param id 
 * @path '~/api/categories/[id]'
 * @returns  Get Updated Category
 */

export async function POST(request:NextRequest,{params}:{params:Promise<{id:string}>}):Promise<NextResponse>{
    try {
        //Get Data From Body
        const data = await request.json()
        // Get Id of Category From Params
        const {id} = await params;
        //Check If User Is Admin
        const cookie = request.cookies.get('authToken')
        if(!cookie){
            return NextResponse.json({message:'You Are Not Login'},{status:401})
        }
        const token = cookie?.value;
        const Decode = Jwt.verify(token,process.env._JWT_SECRET_KEY as string) as TokenInterFace
        if(!Decode){
            return NextResponse.json({message:'You Are Not Login'},{status:401})
        }
        //Check If User Role Is Admin
        if(Decode?.role !== 'ADMIN'){
            return NextResponse.json({message:'These permissions are restricted to admins only'},{status:403})
        }
        //Check If Is Category Existes
        const IsExistes = await prisma.category.findUnique({where:{id}})
        if(!IsExistes){
            return NextResponse.json({message:'Category Not Found'},{status:404})
        }
        //Check Validation Of Data
        const Validation = UpdateCategoryValidation.safeParse(data)
        if(!Validation.success){
            return NextResponse.json({message:'Data Not Valide'},{status:400})
        }
        //Update Category
        const category = await prisma.category.update({
            where:{id},
            data:Validation?.data
        })
        return NextResponse.json({message:'Category Updated Successfully',category},{status:201})
    } catch (error) {
        return NextResponse.json({message:'Faild To Update Category',error},{status:500})
    }
}


/**
 * @access Only Admins
 * @method DELETE
 * @param id 
 * @path '~/api/categories/[id]'
 * @returns  null
 */

export async function DELETE(request:NextRequest,{params}:{params:Promise<{id:string}>}):Promise<NextResponse>{
try {
        // Get Id of Category From Params
        const {id} = await params;
        //Check If User Is Admin
        const cookie = request.cookies.get('authToken')
        if(!cookie){
            return NextResponse.json({message:'You Are Not Login'},{status:401})
        }
        const token = cookie?.value;
        const Decode = Jwt.verify(token,process.env._JWT_SECRET_KEY as string) as TokenInterFace
        if(!Decode){
            return NextResponse.json({message:'You Are Not Login'},{status:401})
        }
        //Check If User Role Is Admin
        if(Decode?.role !== 'ADMIN'){
            return NextResponse.json({message:'These permissions are restricted to admins only'},{status:403})
        }
        //Check If Is Category Existes
        const IsExistes = await prisma.category.findUnique({where:{id}})
        if(!IsExistes){
            return NextResponse.json({message:'Category Not Found'},{status:404})
        }
        
        //Delete Category
        await prisma.category.delete({ where:{id}})
        return NextResponse.json({message:'Category Deleted Successfully'},{status:200})
} catch (error) {
 return NextResponse.json({message:'Faild To Delete Category',error},{status:500})

}
}