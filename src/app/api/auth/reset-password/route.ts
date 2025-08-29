import { prisma } from '@/libs/Prisma/Prisma_Client';
import { CreateUserValidation } from '@/Validation/UserValidation';
import { NextRequest, NextResponse } from "next/server";
import Jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(request:NextRequest){
    try {
        //Get New Password From Body
        const {password} = await request.json()
        //Get Email Of User From Cookie
        const cookie =  request.cookies.get('userEmail')
        if(!cookie){
            return NextResponse.json({message:'User Not Found'},{status:404})
        }
        const email = cookie?.value;
        const Email = Jwt.verify(email,process.env.JWT_SECRET_KEY as string) as {email:string}
        //Check if Email Existes
        const IsExistes = await prisma.user.findUnique({where:{email:Email?.email}})
        if(!IsExistes){
            return NextResponse.json({message:'User Not Found'},{status:404})
        }
        // Check Valid Password
        const PickPassword = CreateUserValidation.pick({password:true})
        const Validation = PickPassword.safeParse({password})
        if(!Validation?.success){
            return NextResponse.json({message:'Password Not Valide'},{status:400})
        }
        //Update User Password
        const user = await prisma.user.update({
            where:{email:Email?.email},
            data:{
                password:Validation?.data?.password,
                passwordresetCode:null,
            }
        })
            
        //Delete Email Of User From Header
        const UserEmail = (await cookies()).delete('userEmail')
        return NextResponse.json({message:'Password Updated Successfully',user,status:201},{status:201})
           
    } catch (error) {
        return NextResponse.json({message:'Faild to Reset Password',error},{status:500})
    }
}