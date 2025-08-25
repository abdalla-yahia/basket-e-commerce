import { NextRequest, NextResponse } from "next/server";
import Jwt from 'jsonwebtoken';
import { TokenInterFace } from "@/Interfaces/UserInterface";
import { prisma } from "@/libs/Prisma/Prisma_Client";
import { CreateOrderValidation } from "@/Validation/OrderValidation";

/**
 * @access Only Admin
 * @method GET
 * @param NoParam 
 * @path '~/api/orders'
 * @returns All Orders
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
        //Get All Orders
        const orders = await prisma.orders.findMany()
        return NextResponse.json({message:'Get All Orders Successfully',orders},{status:200})
    } catch (error) {
        return NextResponse.json({message:'Faild To Get All Orders',error},{status:500})
    }
}

/**
 * @access Loged Users
 * @method POST
 * @param NoParam 
 * @path '~/api/orders'
 * @returns Order
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
        // Check Vailidation Of Order
        const Validation = CreateOrderValidation.safeParse(data)
        if(!Validation){
            return NextResponse.json({message:'Data Not Valid'},{status:400})
        }
        //Create Order
        const order= await prisma.orders.create({
            data:data
        })
        return NextResponse.json({message:'Order Created Successfully',order},{status:201})
    } catch (error) {
        return NextResponse.json({message:'Faild To Create A New Order',error},{status:500})
    }
}