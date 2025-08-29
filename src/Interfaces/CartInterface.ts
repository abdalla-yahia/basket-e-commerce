export interface CreateCart {
    title:string
    products?:string[]
    orderId?:string
}
export interface UpdateCart {
    id:string
    title?:string
    products?:string[]
    orderId?:string
}