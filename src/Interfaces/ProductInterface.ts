export interface CreateProduct {
    title:string
    slug:string 
    description?:string
    price:number
    quantity:number
    oldPrice?:number
    image?:string
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
