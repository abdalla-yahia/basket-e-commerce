import { OrderStatus } from "@prisma/client"
import { UpdateAddresse } from "./AddresseInterface"

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
    gender?:string
    orders?:{
            id:string
            status:OrderStatus
            products?:{
                id:string
                slug?:string
                title?:string
                image?:string
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