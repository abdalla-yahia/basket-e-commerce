import {z} from 'zod';

//Create A new Brand
export const CreateBrandValidation = z.object({
    title:z.string().min(3,'Name Must Greater Than 3 leeters'),
    image:z.string().optional()
})

//Update A new Brand
export const UpdateBrandValidation = z.object({
    title:z.string().min(3,'Name Must Greater Than 3 leeters').optional(),
    image:z.string().optional()
})