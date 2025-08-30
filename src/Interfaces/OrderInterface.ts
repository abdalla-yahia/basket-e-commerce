import { OrderStatus } from "@prisma/client"

export interface CreateOrder{
    title?:string
    products:string[]
}
export interface UpdateOrder{
    id:string
    userId:string
    user?:string
    status?:OrderStatus
    cart?:string
    products?:string[]
}