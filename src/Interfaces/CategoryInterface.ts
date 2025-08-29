export interface CreateCategory {
    title:string
    description?:string
    image?:string
    products?:string[]
}
export interface UpdateCategory {
    id:string
    title?:string
    description?:string
    image?:string
    products?:string[]
}