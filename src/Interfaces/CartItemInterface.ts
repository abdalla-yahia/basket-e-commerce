import { UpdateProduct } from "./ProductInterface"

// export interface CreateCartItem {
//     title:string
//     products?:string[]
//     orderId?:string
// }
export interface UpdateCartItem {
    productId:string
    product:UpdateProduct
    quantity:number
}