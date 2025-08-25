import {z} from 'zod';

//Create Category Validation
export const CreateCategoryValidation = z.object({
    title:z.string().min(3,'Category Name Must Greate Than 3 letters').max(200),
    image:z.string().optional(),
    description:z.string().optional(),
})

//Update Category Validation
export const UpdateCategoryValidation = z.object({
    id:z.string(),
    title:z.string().min(3,'Category Name Must Greate Than 3 letters').max(200).optional(),
    image:z.string().optional(),
    description:z.string().optional(),
})