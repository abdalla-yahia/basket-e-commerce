import { UpdateProduct } from "./ProductInterface"
import { UpdateUser } from "./UserInterface"

export interface UpdateWishList {
    userId?:string
    user?:UpdateUser
    products?:UpdateProduct[]
}