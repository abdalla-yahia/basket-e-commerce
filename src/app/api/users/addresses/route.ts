import { prisma } from "@/libs/Prisma/Prisma_Client"
import { NextRequest, NextResponse } from "next/server"

/**
 * @access (Only User)
 * @method GET
 * @param NoParam 
 * @path '~/api/users/addressess'
 * @returns All Users
 */
export async function GET(){
try {

    //Get Users
    const addresses = await prisma.address.findMany({
    })
    return NextResponse.json({message:'Get All Address Successfully',addresses},{status:200})
} catch (error) {
    return NextResponse.json({message:'Faild To Fetch All Addresses',error},{status:500})
}
}


/**
 * @access Every One
 * @method Post
 * @param NoParam 
 * @path '~/api/users/addresses'
 * @returns New Address
 */

export async function POST(request:NextRequest){
    try {
        const data = await request?.json()

        const address = await prisma.address.create({
            data:data
        })
        return NextResponse.json({
            message:'Create Anew Address Successfully',        
            address
        },
        {   
            status:201,
        }
    )
    } catch (error) {
        return NextResponse.json({message:'Faild To Create A New Address!!',error})
    }
}