import {z} from 'zod';

//Create A New Product Validation
export const CreateProductValidation = z.object({
  title:z.string().min(3,'Product Name Must Greate Than 3 leeters'),
  description:z.string().optional().nullable(),
  price:z.number().min(1),
  quantity:z.number().min(1),
  oldPrice:z.number().min(1).optional(),
  image:z.string().optional().nullable(),
  categoryId:z.string(),
  brandId:z.string(),
})

//Updata A New Product Validation
export const UpdataProductValidation = z.object({
  slug:z.string(),
  title:z.string().min(3,'Product Name Must Greate Than 3 leeters').optional(),
  description:z.string().optional().nullable(),
  price:z.number().min(1).optional(),
  quantity:z.number().min(1).optional(),
  oldPrice:z.number().min(1).optional(),
  image:z.string().optional().nullable(),
  categoryId:z.string().optional(),
  brandId:z.string().optional(),
})