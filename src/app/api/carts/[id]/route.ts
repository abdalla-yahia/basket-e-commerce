import { NextRequest, NextResponse } from "next/server";
import Jwt from 'jsonwebtoken';
import { TokenInterFace } from "@/Interfaces/UserInterface";
import { prisma } from "@/libs/Prisma/Prisma_Client";

/**
 * @access Loged Users
 * @method GET
 * @param id 
 * @path '~/api/Carts/[id]'
 * @returns  Get Cart By Id
 */


export async function GET(request:NextRequest,{params}:{params:Promise<{id:string}>}):Promise<NextResponse>{
    try {
        //Get Id
        const {id} = await params;
        //Check If User Is Logein
        const cookie = request.cookies.get('authToken')
        if(!cookie){
            return NextResponse.json({message:'You Are Not Login'},{status:401})
        }
        const token = cookie?.value;
        const Decode = Jwt.verify(token,process.env._JWT_SECRET_KEY as string) as TokenInterFace
        if(!Decode){
            return NextResponse.json({message:'You Are Not Login'},{status:401})
        }
        //Check If Cart Is Exiestes
        const IsExistes = await prisma.cart.findUnique({where:{id:id}})
        if(!IsExistes){
            return NextResponse.json({message:'Cart Not Found'},{status:404})
        }
        //Get Cart
        const cart = await prisma.cart.findUnique({where:{id:id}})
        return NextResponse.json({message:'Get Cart Successfully',cart},{status:200})
    } catch (error) {
        return NextResponse.json({message:'Faild To Get Cart',error},{status:500})
    }
}

/**
 * @access Loged Users
 * @method POST
 * @param id 
 * @path '~/api/Carts/[id]'
 * @returns  Get Cart By Id
 */

export async function POST(request:NextRequest,{params}:{params:Promise<{id:string}>}):Promise<NextResponse>{
    try {
        //Get Id
        const {id} = await params;
        //Get Data From Request
        const data = await request.json()
        //Check If User Is Logein
        const cookie = request.cookies.get('authToken')
        if(!cookie){
            return NextResponse.json({message:'You Are Not Login'},{status:401})
        }
        const token = cookie?.value;
        const Decode = Jwt.verify(token,process.env._JWT_SECRET_KEY as string) as TokenInterFace
        if(!Decode){
            return NextResponse.json({message:'You Are Not Login'},{status:401})
        }
        //Check If Cart Is Exiestes
        const IsExistes = await prisma.cart.findUnique({where:{id:id}})
        if(!IsExistes){
            return NextResponse.json({message:'Cart Not Found'},{status:404})
        }
        //Update Cart
        const cart = await prisma.cart.update({
            where:{id:id},
            data:data
        })
        return NextResponse.json({message:'Cart Updated Successfully',cart},{status:201})
    } catch (error) {
        return NextResponse.json({message:'Faild To Update Cart',error},{status:500})
    }
}


/**
 * @access Loged Users
 * @method DELETE
 * @param id 
 * @path '~/api/Carts/[id]'
 * @returns  null
 */

export async function DELETE(request:NextRequest,{params}:{params:Promise<{id:string}>}){
    try {
        //Get Id
        const {id} = await params;
        //Check If User Is Logein
        const cookie = request.cookies.get('authToken')
        if(!cookie){
            return NextResponse.json({message:'You Are Not Login'},{status:401})
        }
        const token = cookie?.value;
        const Decode = Jwt.verify(token,process.env._JWT_SECRET_KEY as string) as TokenInterFace
        if(!Decode){
            return NextResponse.json({message:'You Are Not Login'},{status:401})
        }
        //Check If Cart Is Exiestes
        const IsExistes = await prisma.cart.findUnique({where:{id:id}})
        if(!IsExistes){
            return NextResponse.json({message:'Cart Not Found'},{status:404})
        }
        //Delete Cart
         await prisma.cart.delete({where:{id:id} })
        return NextResponse.json({message:'Cart Updated Successfully'},{status:200})
    } catch (error) {
        return NextResponse.json({message:'Faild To Delete Cart',error},{status:500})
    }
}