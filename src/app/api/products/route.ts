import Jwt from 'jsonwebtoken';
import slugify from 'slugify';
import { prisma } from "@/libs/Prisma/Prisma_Client";
import { NextRequest, NextResponse } from "next/server";
import { TokenInterFace } from '@/Interfaces/UserInterface';
import { CreateProductValidation } from '@/Validation/ProductValidation';

/**
 * @access Every One
 * @method GET
 * @param NoParam 
 * @path '~/api/products'
 * @returns All Products
 */

export async function GET(){
    try {
        //Get All Products
        const products = await prisma.product.findMany({
            select:{
                id:true,
                slug:true,
                title:true,
                description:true,
                image:true,
                gallery:true,
                price:true,
                oldPrice:true,
                quantity:true,
                rivew:true,
                offer:true,
                brandId:true,
                categoryId:true,
                cartId:true,
                 category:{
                    select:{
                        id:true,
                        title:true,
                        image:true
                    },
                },
                brand:{
                    select:{
                        id:true,
                        title:true,
                        image:true
                    }
                } 
            }
        })
        return NextResponse.json({message:'Get All Products Successfully',products},{status:200})
    } catch (error) {
        return NextResponse.json({message:'Faild To Get All Products',error},{status:500})
    }
}

/**
 * @access Admin Only
 * @method Post
 * @param NoParam 
 * @path '~/api/products'
 * @returns New Product
 */


export async function POST(requset:NextRequest){
    try {
        const data = await requset.json()
        //Get Admin From Cookie
        const cookie = requset.cookies.get('authToken')
        if(!cookie){
            return NextResponse.json({message:'You Are Not Login'},{status:401})
        }
        const token = cookie?.value;
        const Decode = Jwt.verify(token,process.env.JWT_SECRET_KEY as string) as TokenInterFace
        if(!Decode){
        return NextResponse.json({message:'You Are Not Login'},{status:402})
        }
        if(Decode?.role !== 'ADMIN'){
         return NextResponse.json({message:'These permissions are restricted to admins only'},{status:403})
        }
        //Check Validation Of Data 
        const Validation = CreateProductValidation.safeParse(data)
        if(!Validation?.success){
            return NextResponse.json({message:'Data Not Valide',error:Validation.error.issues?.map(e=>e.message).join(', ')})
        }
        //Create Slug 
        const baseSlug = slugify(Validation.data.title, { locale: 'ar', replacement: '-' });
        //Check Existeng 
        const existingProducts = await prisma.product.findMany({
        where: { slug: { startsWith: baseSlug } },
        select: { slug: true }
        });

        // Create Unique Slug
        let slug = baseSlug;
        if (existingProducts.length > 0) {
        slug = `${baseSlug}-${existingProducts.length + 1}`;
        }
        //Create Product
        const product = await prisma.product.create({
            data:{
                slug,
                ...Validation?.data
            }
        })
        return NextResponse.json({message:'Create Product Successfully',product},{status:201})
    } catch (error) {
        return NextResponse.json({message:'Faild To Create Product',error},{status:500})
    }
}