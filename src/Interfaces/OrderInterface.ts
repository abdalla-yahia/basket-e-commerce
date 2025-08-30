import { OrderStatus } from "@prisma/client"

export interface CreateOrder{
    title?:string
    products:string[]
}
export interface UpdateOrder{
    id:string
    userId?:string
    user?:{
        id:string
        name:string
    }
    status?:OrderStatus
    cart?:{
        id:string
    }
    products?:{
        id:string
        slug:string
        title:string
        image:string
    }[]
}