export interface CreateCartItem {
    title:string
    products?:string[]
    orderId?:string
}
export interface UpdateCartItem {
    id:string
    title?:string
    products?:string[]
    orderId?:string
}