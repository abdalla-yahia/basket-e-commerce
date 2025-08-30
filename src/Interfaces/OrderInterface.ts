export interface CreateOrder{
    title?:string
    products:string[]
}
export interface UpdateOrder{
    id:string
    userId:string
    user?:string,
    cart?:string
    products?:string[]
}