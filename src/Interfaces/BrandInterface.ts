import { UpdateProduct } from "./ProductInterface"

export interface CreateBrand {
    title:string
    description?:string
    image?:string
   products?:UpdateProduct[]
}
export interface UpdateBrand {
    id:string
    title?:string
    description?:string
    image?:string
   products?:UpdateProduct[]
}