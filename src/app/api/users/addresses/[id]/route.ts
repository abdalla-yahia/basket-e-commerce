import { prisma } from "@/libs/Prisma/Prisma_Client";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { TokenInterFace } from "@/Interfaces/UserInterface";

/**
 * @access Same Address Or Admin
 * @method GET
 * @param id 
 * @path '~/api/Addresss/addresses/[id]'
 * @returns Address
 */
export async function GET(request:NextRequest,{params}:{params:Promise<{id:string}>}):Promise<NextResponse>{
    try {
        const {id} = await params;
        //Get Token From Header
        const cookie = request.cookies.get('authToken')
        if(!cookie){
            return NextResponse.json({message:"You Dont Allow To GEt This Address"},{status:401})
        }
        const token = cookie?.value
        const AddressFromToken = jwt.verify(token,process.env.JWT_SECRET_KEY as string) as TokenInterFace
        //Check If Address Existes On DB
        const IsExestes = await prisma.address.findUnique({
            where:{id:id},
           
        })
        if(!IsExestes){
            return NextResponse.json({message:'Address Not Found'},{status:404})
        }
        //Check If Same Address Or Admin Are Get This Address
        if(AddressFromToken.id !== id && AddressFromToken?.role !== 'ADMIN'){
            return NextResponse.json({message:'You Are Not Have Authorization To GEt Address'},{status:403})
        }
        const address = await prisma.address.findUnique(
            {where:{id:id},
             select:{
                id:true,
                title:true,
                phone:true,
                city:true,
                details:true,
                user:true
            }
        }
        )
        return NextResponse.json({message:'Get Address Successfully',address},{status:200})
    } catch (error) {
        return NextResponse.json({message:'Faild To Fetch A Address',error},{status:400})
    }
}

/**
 * @access Same Address Or Admin
 * @method POST
 * @param id 
 * @path '~/api/users/addresss/[id]'
 * @returns Address
 */

export async function POST(request:NextRequest,{params}:{params:Promise<{id:string}>}):Promise<NextResponse> {
    try {
        const {id} = await params
        const data =await request.json()
        //Check If Address Existes
        const IsExistes = await prisma.address.findUnique({where:{id:id}})
        if(!IsExistes){
            return NextResponse.json({message:'Address Not Found'},{status:404})
        }
        const address = await prisma.address.update({
            where:{id:id},
            data:data
        })
        return NextResponse.json({message:'Update Address Successfully',address,status:201},{
            status:201
        })
    } catch (error) {
        return NextResponse.json({message:'Faild To Update Address',error},{status:500})
    }
}

/**
 * @access Same Address Or Admin
 * @method DELETE
 * @param id 
 * @path '~/api/user/addresss/[id]'
 * @returns Address
 */

export async function DELETE(request:NextRequest,{params}:{params:Promise<{id:string}>}):Promise<NextResponse>{
    try {
        const {id}= await params;
        const cookie = request.cookies.get('authToken')
        if(!cookie){
            return NextResponse.json({message:"You Are Not Allow To Get This Address"},{status:401})
        }
        const token = cookie?.value 
        const AddressFromToken = jwt.verify(token,process.env.JWT_SECRET_KEY as string) as TokenInterFace
        //Check If Address Is Exestes
        const IsExestes = await prisma.address.findUnique({where:{id:id}})
        if(!IsExestes){
            return NextResponse.json({message:'Address Not Found'},{status:404})
        }
        //Check If This Address Are Same Address Or Admin
        if(AddressFromToken?.id !== id && AddressFromToken?.role !== 'ADMIN'){
            return NextResponse.json({message:'You Are Not Allowed To Delete Address'},{status:403})
        }
         await prisma.address.delete({where:{id:id}})
        return NextResponse.json({message:'Address Deleted Successfully'},{status:200})
    } catch (error) {
        return NextResponse.json({message:'Faild To Delete This Address',error},{status:500})
    }
}