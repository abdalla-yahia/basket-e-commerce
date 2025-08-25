import { DeleteHook, GetHook, PostHook } from "@/Base/Hooks";
import { UpdateBrand } from "@/Interfaces/BrandInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//Get All brands
export const getAllBrand = createAsyncThunk('brands/getAll',async()=>{
    try {
        const res = GetHook('api/brands')
        return res;
    } catch (error) {
        toast.error(`Error ${error}`)
    }
})

// Get Brand By Id
export const getBrandById = createAsyncThunk('brands/getbyid',async(id:string)=>{
    try {
        const {data} =await GetHook(`/api/brands/${id}`)
        return data;
    } catch (error) {
        toast.error(`Faild To Get Brand,${error}`)
    }
})

//Update Brand 
export const updateBrand = createAsyncThunk('brands/update',async(BrandData:UpdateBrand)=>{
    try {
        const {data} = await PostHook(`/api/brands/${BrandData?.id}`,{
            data:BrandData
        })
        return data;
    } catch (error) {
        toast.error(`Faild To Update Brand ${error}`)
    }
})

//Delete Brand
export const deleteBrand = createAsyncThunk('brands/delete',async(id:string)=>{
    try {
        const {data} = await DeleteHook(`/api/brands/${id}`)
        return data;
    } catch (error) {
        toast.error(`Faild To Delete Brand ${error}`)
    }
})

