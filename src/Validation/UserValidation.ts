import { z} from 'zod';

//Schema Validation Of Create User
export const CreateUserValidation = z.object({
    name:z.string().min(2,'Username Must Greater Than 3 Letters'),
    password:z.string().min(8,'Password Must Greate Than 8 letters').max(50),
    email:z.string(),
    address:z.string().optional(),
    phone:z.string().optional(),
    gender:z.enum(["MALE","FEMALE"]).optional()
})

//Schema Validation Of Create User
export const UpdateUserValidation = z.object({
    id:z.string(),
    name:z.string().min(2,'Username Must Greater Than 2 Letters').optional(),
    email:z.string().optional(),
    address:z.string().optional(),
    phone:z.string().optional(),
    gender:z.enum(["MALE","FEMALE"]).optional(),
    image:z.string().optional()
})