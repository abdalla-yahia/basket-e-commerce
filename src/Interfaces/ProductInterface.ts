export interface CreateProduct {
    title:string
    slug?:string 
    description?:string
    price:number
    quantity:number 
    oldPrice?:number
    image?:string,
    categoryId:string
    brandId:string
    gallery?:string[]
}
export interface UpdateProduct {
    id:string
    title:string
    slug:string 
    description?:string
    price:number
    quantity:number
    oldPrice?:number
    image?:string
}
