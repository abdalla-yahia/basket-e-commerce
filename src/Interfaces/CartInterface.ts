import { UpdateProduct } from "./ProductInterface"

export interface CreateCart {
    title:string
    products?:UpdateProduct[]
    userId?:string
}
export interface UpdateCart {
    title?:string
    userId?:string
    items:{
        product:UpdateProduct
        quantity:number
    }[]
}