import { DeleteHook, GetHook, PostHook } from "@/Base/Hooks";
import { UpdateCategory } from "@/Interfaces/CategoryInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//Get All categories
export const getAllCategory = createAsyncThunk('categories/getAll',async()=>{
    try {
        const res = GetHook('api/categories')
        return res;
    } catch (error) {
        toast.error(`Error ${error}`)
    }
})

// Get Category By Id
export const getCategoryById = createAsyncThunk('categories/getbyid',async(id:string)=>{
    try {
        const {data} =await GetHook(`/api/categories/${id}`)
        return data;
    } catch (error) {
        toast.error(`Faild To Get Category,${error}`)
    }
})

//Update Category 
export const updateCategory = createAsyncThunk('categories/update',async(CategoryData:UpdateCategory)=>{
    try {
        const {data} = await PostHook(`/api/categories/${CategoryData?.id}`,{
            data:CategoryData
        })
        return data;
    } catch (error) {
        toast.error(`Faild To Update Category ${error}`)
    }
})

//Delete Category
export const deleteCategory = createAsyncThunk('categories/delete',async(id:string)=>{
    try {
        const {data} = await DeleteHook(`/api/categories/${id}`)
        return data;
    } catch (error) {
        toast.error(`Faild To Delete Category ${error}`)
    }
})

