import {z} from 'zod';

//Create A New Product Validation
export const CreateProductValidation = z.object({
  title:z.string().min(3,'Product Name Must Greate Than 3 leeters'),
  description:z.string().optional(),
  price:z.number().min(1),
  quantity:z.number().min(1),
  oldPrice:z.number().min(1).optional(),
  image:z.string().optional(),
  categoryId:z.string(),
  brandId:z.string(),
  gallery: z.array(z.string()).optional()
})

//Updata A New Product Validation
export const UpdataProductValidation = z.object({
  slug:z.string(),
  title:z.string().optional(),
  description:z.string().optional(),
  price:z.number().optional(),
  quantity:z.number().optional(),
  oldPrice:z.number().optional(),
  image:z.string().optional(),
  categoryId:z.string().optional(),
  brandId:z.string().optional(),
})