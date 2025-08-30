import {z} from 'zod';

//Create Order Validation
export const CreateOrderValidation = z.object({
    userId:z.string()
})
