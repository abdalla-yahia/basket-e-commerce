

/**
 * @access Loged User
 * @method POST
 * @path '~/api/auth/logout'
 * @params No params
 */

import { NextRequest, NextResponse } from "next/server";

export function POST(request:NextRequest){
    try {
        //Check If User Loged In
        const cookie =  request.cookies.get('authToken')
        if(!cookie){
            return NextResponse.json({message:'User Not Login'},{status:401})
        }
        // Delete Token From Header
        request.cookies.delete('authToken')
        return NextResponse.json({message:'User Logout Successfully'},{
            headers:{
                'Set-Cookie':'authToken='
            },
            status:200
        })
    } catch (error) {
        return NextResponse.json({message:'Faild To Logout',error},{status:500})
    }
}