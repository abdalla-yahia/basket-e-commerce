export interface CreateBrand {
    title:string
    description?:string
    image?:string
    products?:string[]
}
export interface UpdateBrand {
    id:string
    title?:string
    description?:string
    image?:string
    products?:string[]
}