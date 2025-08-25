import { NextRequest, NextResponse } from "next/server";
import Jwt from 'jsonwebtoken';
import { TokenInterFace } from "@/Interfaces/UserInterface";
import { prisma } from "@/libs/Prisma/Prisma_Client";
import { CreateCartValidation } from "@/Validation/CartValidation";

/**
 * @access Only Admin
 * @method GET
 * @param NoParam 
 * @path '~/api/Carts'
 * @returns All Carts
 */

export async function GET(request:NextRequest){
    try {
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
        //Check If User Role Is Admin
        if(Decode?.role !== 'ADMIN'){
            return NextResponse.json({message:'These permissions are restricted to admins only'},{status:403})
        }
        //Get All Carts
        const carts = await prisma.cart.findMany()
        return NextResponse.json({message:'Get All Carts Successfully',carts},{status:200})
    } catch (error) {
        return NextResponse.json({message:'Faild To Get All Carts',error},{status:500})
    }
}

/**
 * @access Loged Users
 * @method POST
 * @param NoParam 
 * @path '~/api/Carts'
 * @returns Cart
 */

export async function POST(request:NextRequest){
    try {
        const {data} = await request.json()
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
        // Check Vailidation Of Cart
        const Validation = CreateCartValidation.safeParse(data)
        if(!Validation){
            return NextResponse.json({message:'Data Not Valid'},{status:400})
        }
        //Create Cart
        const cart= await prisma.cart.create({
            data:data
        })
        return NextResponse.json({message:'Cart Created Successfully',cart},{status:201})
    } catch (error) {
        return NextResponse.json({message:'Faild To Create A New Cart',error},{status:500})
    }
}