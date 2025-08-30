import { DeleteHook, GetHook, PostHook } from "@/Base/Hooks";
import { CreateCart, UpdateCart } from "@/Interfaces/CartInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//Get All carts
export const getAllCart = createAsyncThunk('carts/getAll',async()=>{
    try {
        const res = GetHook('/api/carts')
        return res;
    } catch (error) {
        toast.error(`Error To Get All Carts`)
        return error
    }
})

// Get Cart By Id
export const getCartById = createAsyncThunk('carts/getbyid',async(id:string)=>{
    try {
        const data =await GetHook(`/api/carts/${id}`)
        return data;
    } catch (error) {
        toast.error(`Faild To Get Cart`)
        return error
    }
})
//Create Cart
export const createCart = createAsyncThunk('carts/create',async(cartData:CreateCart)=>{
    try {
        const data = await PostHook(`/api/carts`, cartData)
        if(data){
            toast.success(data?.message)
        }
        return data;
    } catch (error) {
        toast.error(`Create Anew cart Faild `)
        return error
    }
})
//Update Cart 
export const updateCart = createAsyncThunk('carts/update',async(CartData:UpdateCart)=>{
    try {
        const data = await PostHook(`/api/carts/${CartData?.id}`,CartData)
        if(data){
            toast.success(data?.message)
        }
        return data;
    } catch (error) {
        toast.error(`Faild To Update Cart`)
        return error
    }
})

//Delete Cart
export const deleteCart = createAsyncThunk('carts/delete',async(id:string)=>{
    try {
        const data = await DeleteHook(`/api/carts/${id}`)
        if(data){
            toast.success(data?.message)
        }
        return data;
    } catch (error) {
        toast.error(`Faild To Delete Cart`)
        return error
    }
})

