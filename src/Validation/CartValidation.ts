import {z} from 'zod';

//Create Anew Cart
export const CreateCartValidation = z.object({
    title:z.string().min(3).max(200),
    orderId:z.string()
})

//Update Anew Cart
export const UpdateCartValidation = z.object({
    title:z.string().min(3).max(200).optional(),
    orderId:z.string().optional()
})