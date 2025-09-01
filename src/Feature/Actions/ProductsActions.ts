import { DeleteHook, GetHook, PostHook } from "@/Base/Hooks";
import { CreateProduct, UpdateProduct } from "@/Interfaces/ProductInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//Get All products
export const getAllProduct = createAsyncThunk('products/getAll',async()=>{
    try {
        const res = GetHook('/api/products')
        return res;
    } catch (error) {
        toast.error(`Error To Get All Products`)
        return error
    }
})

// Get Product By Id
export const getProductBySlug = createAsyncThunk('products/getbyid',async(slug:string)=>{
    try {
        const data =await GetHook(`/api/products/${slug}`)
        return data;
    } catch (error) {
        toast.error(`Faild To Get Product`)
        return error
    }
})

//Create Product
export const createProduct = createAsyncThunk('products/create',async(ProductData:CreateProduct, { rejectWithValue })=>{
    try {
        const data = await PostHook(`/api/products`, ProductData)
        if(data){
            toast.success(`Create Product ${data?.product?.title} Successfully`)
        }
        return data;
        } catch (error) {
      const message = "Create a new product failed";
      toast.error(message);
      return rejectWithValue(message);
    }
})

//Update Product 
export const updateProduct = createAsyncThunk('products/update',async(ProductData:UpdateProduct)=>{
    try {
        const data = await PostHook(`/api/products/${ProductData?.slug}`,ProductData)
        if(data){
            toast.success(data?.message)
        }
        return data;
    } catch (error) {
        toast.error(`Faild To Update Product`)
        return error
    }
})

//Delete Product
export const deleteProduct = createAsyncThunk('products/delete',async(slug:string)=>{
    try {
        const data = await DeleteHook(`/api/products/${slug}`)
        if(data){
             toast.success(data?.message)
        }
        return data;
    } catch (error) {
        console.log(error)
        toast.error(`Faild To Delete Product `)
        return error
    }
})

