import { DeleteHook, GetHook, PostHook } from "@/Base/Hooks";
import { UpdateProduct } from "@/Interfaces/ProductInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//Get All products
export const getAllProduct = createAsyncThunk('products/getAll',async()=>{
    try {
        const res = GetHook('api/products')
        return res;
    } catch (error) {
        toast.error(`Error ${error}`)
    }
})

// Get Product By Id
export const getProductById = createAsyncThunk('products/getbyid',async(id:string)=>{
    try {
        const {data} =await GetHook(`/api/products/${id}`)
        return data;
    } catch (error) {
        toast.error(`Faild To Get Product,${error}`)
    }
})

//Update Product 
export const updateProduct = createAsyncThunk('products/update',async(ProductData:UpdateProduct)=>{
    try {
        const {data} = await PostHook(`/api/products/${ProductData?.id}`,{
            data:ProductData
        })
        return data;
    } catch (error) {
        toast.error(`Faild To Update Product ${error}`)
    }
})

//Delete Product
export const deleteProduct = createAsyncThunk('products/delete',async(id:string)=>{
    try {
        const {data} = await DeleteHook(`/api/products/${id}`)
        return data;
    } catch (error) {
        toast.error(`Faild To Delete Product ${error}`)
    }
})

