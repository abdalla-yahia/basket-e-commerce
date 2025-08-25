import { prisma } from "@/libs/Prisma/Prisma_Client";
import { SetCookies } from "@/Utils/GenerateToken";
import { CreateUserValidation } from "@/Validation/UserValidation";
import { NextRequest, NextResponse } from "next/server";


/**
 * @access All Users
 * @method POST
 * @path '~/api/auth/login'
 * @params email & password
 */


export async function POST(request:NextRequest){
    try {
        const data =await request.json()
        //Check Validation Of Data
        const PickData = CreateUserValidation.pick({
            email:true,
            password:true
        })
        const Validation = PickData.safeParse({
            email:data?.email,
            password:data.password
        })
        if(!Validation?.success){
            return NextResponse.json({message:'Data Not Valid'},{status:400})
        }
        //Check if Email Existes On dataUser
        const IsExistes = await prisma.user.findUnique({where:{email:Validation?.data?.email}})
        if(!IsExistes){
            return NextResponse.json({message:'User Not Found'},{status:404})
        }
        // Set Token On Header
        const token = SetCookies({
            id:IsExistes?.id,
            name:IsExistes?.name,
            role:IsExistes.role
        })
        return NextResponse.json({message:'User Login Successfully'},{
            headers:{
                'Set-Cookie':token
            },
            status:200
        })
    } catch (error) {
        return NextResponse.json({message:'User Login Faild',error},{status:500})
    }
}


