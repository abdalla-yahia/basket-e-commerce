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
    slug?:string 
    id?:string
    title?:string
    description?:string
    price?:number
    quantity?:number
    oldPrice?:number
    image?:string
    gallery?:string[]
    categoryId?:string
    brandId?:string
    category?:{
        id:string,
        title:string
        image:string
    }
    brand?:{
        id:string,
        title:string
        image:string
    }

}
