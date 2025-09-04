import { OrderStatus } from "@prisma/client"
import { UpdateAddresse } from "./AddresseInterface"
import { UpdateProduct } from "./ProductInterface"

export interface CreateUser {
    name:string   
    password:string 
    email:string    
    address?:string  
    gender?:'MALE'|'FEMALE'
}
export interface UpdateUser {
    id:string
    name?:string   
    password?:string 
    email?:string
    phone?:string,    
    address?:string
    image?:string
    role?:string
    gender?:string,
    review?:string
    wishlist?:{
        products:UpdateProduct[]
    }
    orders?:{
            id:string
            status:OrderStatus
            createdAt?:string
            items?:{
                id:string
                product:{
                    id:string
                    slug?:string
                    title?:string
                    image?:string
                    price?:number
                }
                quantity:number
                price:number
            }[]
            product?:{
                id:string
                slug?:string
                title?:string
                image?:string
                price?:number
            }[]
            }[]
    addresses?:UpdateAddresse[],
    createdAt?:string
    
}

export interface TokenInterFace {
    id:string
    name:string
    role:string
    image?:string
}

export interface UserLogineInterface {
    email:string,
    password:string
}

export interface ForgetPassword {
    email:string
}
export interface VerifyCode {
    code:string
}
export interface ResetPassword {
    password:string
}