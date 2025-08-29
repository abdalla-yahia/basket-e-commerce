export interface CreateOrder{
    title?:string
    products:string[]
}
export interface UpdateOrder{
    id:string
    title?:string
    products?:string[]
}