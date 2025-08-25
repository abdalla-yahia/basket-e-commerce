import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import Jwt from 'jsonwebtoken';
import { prisma } from "@/libs/Prisma/Prisma_Client";

export async function POST(request:NextRequest){
    try {
        //Get Code From Body
        const {code} = await request.json()
        //Get User From Cookie
        const cookie = request.cookies.get('userEmail')
        const userEmail = cookie?.value;
        if(!userEmail){
            return NextResponse.json({message:'Not Found Email'},{status:404})
        }
        const DecodEmail = Jwt.verify(userEmail,process.env.JWT_SECRET_KEY as string) as string
        if(!DecodEmail){
        return NextResponse.json({message:'Not Found Email'},{status:404})
    }
    //Get User With Email
    const User = await prisma.user.findUnique({where:{email:DecodEmail}})
    if(!User){
        return NextResponse.json({message:'User Not Found With This Email'},{status:404})
    }
    //Decode Code
    const VerifyCode = bcrypt.compare(code,User?.passwordresetCode as string)
    if(!VerifyCode){
        return NextResponse.json({message:'Code Not Valide'},{status:403})
    }
    //Check If Code expire
    if((User?.passwordExpire as Date) < new Date(Date.now())){
        return NextResponse.json({message:'Soeey This Code Is Expire, Take Anew One'},{status:400})
    }
    return NextResponse.json({message:'Valide Code, Update your Password now '},{status:200})
    } catch (error) {
        return NextResponse.json({message:'Code Verify Faild',error},{status:500})
    }
}