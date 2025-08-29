import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import Jwt from 'jsonwebtoken';
import { prisma } from "@/libs/Prisma/Prisma_Client";
import { TokenInterFace } from "@/Interfaces/UserInterface";

export async function POST(request:NextRequest){
    try {
        //Get Code From Body
        const {code} = await request.json()
        //Get User From Cookie
        const cookie = request.cookies.get('userEmail')
        const email = cookie?.value as string;
        if(!email){
            return NextResponse.json({message:'Not Found Email'},{status:404})
        }
        const DecodEmail = Jwt.verify(email,process.env.JWT_SECRET_KEY as string) as {email:string}
        const emailDecoded = DecodEmail?.email
        if(!emailDecoded){
        return NextResponse.json({message:'Not Found Email'},{status:404})
        }
        //Get User With Email
        const User = await prisma.user.findUnique({where:{email:emailDecoded}})
        if(!User){
            return NextResponse.json({message:'User Not Found With This Email'},{status:404})
        }
        //Decode Code
        const VerifyCode =await bcrypt.compare(code,User?.passwordresetCode as string)
        if(!VerifyCode){
            return NextResponse.json({message:'Code Not Valide'},{status:403})
        }
        //Check If Code expire
        if((User?.passwordExpire as Date) < new Date(Date.now())){
            return NextResponse.json({message:'Sorry This Code Is Expire, Take Anew One'},{status:400})
        }
        return NextResponse.json({message:'Valide Code, Update your Password now ',status:200},{status:200})
        } catch (error) {
            return NextResponse.json({message:'Code Verify Faild',error},{status:500})
        }
}