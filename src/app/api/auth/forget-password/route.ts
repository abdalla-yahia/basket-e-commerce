import { prisma } from '@/libs/Prisma/Prisma_Client';
import SendEmail from '@/Utils/SendMailer';
import { CreateUserValidation } from '@/Validation/UserValidation';
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { serialize } from "cookie";

export async function POST(request:NextRequest){
    try {
        const {email} = await request.json()
        //Check Validation Of Email 
        const PickEmail = CreateUserValidation.pick({email:true})
        const Validation = PickEmail.safeParse({email:email})
        if(!Validation?.success){
            return NextResponse.json({message:'Email Not Vaild'},{status:400})
        }
        //Check If Email Existes
        const IsExestes = await prisma.user.findUnique({where:{email:email}})
        if(!IsExestes){
            return NextResponse.json({message:'Email Not Found'},{status:404})
        }
        //Generate Arandom Code To Virefy Password
        const GenerateCode = Math.floor(100000 + Math.random() * 900000).toString();
        //Hashed Code
        const salt =await bcrypt.genSalt(10)
        const hashCode = bcrypt.hashSync(GenerateCode,salt)
        //Body Of Email Was Sent To user
         const MessageBody = async (
            name: string,
            gender: string ,
            generateCode: string,
            siteTitle?: string
        ) => {
            return `<h1 style="color:blue">Hello ${
            gender === "MALE" ? "Mr : " : "Mrs : "
            } <span style="color:red">${name}</span>,</h1></br>
                <h2>We have sent you this email based on your request to reset your password.</h2></br>
                <h3>This is your verification code: <h2 style="color:blue">${generateCode}</h2></h3></br>
                <h3>This code is valid for <h1 style="font-weight:bolder">10 minutes</h1> only.</h3></br>
                <h3>The validity period starts from the time this email was sent to you.</h3></br>
                <h3>Please do not share this email with anyone else.</h3></br>
                <p>Best regards,</p></br>
                <p style="color:blue">${siteTitle}</p></br>

            `;
            };
        await SendEmail({
            from:process.env.EMAIL_FROM as string,
            to:email,
            subject:'Reset Password Code',
            html: await MessageBody(IsExestes?.name,IsExestes?.gender || "MALE" as string,GenerateCode,process.env.SITE_TITLE as string)
        })
        //Set Email On Header
        const SecretKey = process.env.JWT_SECRET_KEY as string
        const token = jwt.sign(email,SecretKey,{expiresIn:60 * 60 * 24 * 30})
        const cookieOptions = {
                        maxAge:  30 * 24 * 60 * 60,
                        httpOnly: false,
                        secure:process.env.NODE_ENV === 'production' && true,
                        path:'/',
                    }
        const cookie = serialize('userEmail',token,cookieOptions)
        //Update Password Reset Code With Hashed Code
        await prisma.user.update({
            where:{email:email}
                ,
            data:{
                passwordresetCode: hashCode,
                passwordExpire: new Date(Date.now() + 10 * 60 * 1000),
                passwordVirify: true,
            }
        }
        )
        return NextResponse.json({message:'Send Code To Email Successfully'},{
            headers:{
                'Set-Cookie':cookie
            },
            status:200
        })
    } catch (error) {
        return NextResponse.json({message:'Faild To Update Password',error},{status:500})
    }
}