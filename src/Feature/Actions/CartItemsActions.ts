import { DeleteHook, GetHook, PostHook } from "@/Base/Hooks";
import { CreateCartItem, UpdateCartItem } from "@/Interfaces/CartItemInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//Get All cartItems
export const getAllCartItem = createAsyncThunk('cartItems/getAll',async()=>{
    try {
        const res = GetHook('/api/cartItems')
        return res;
    } catch (error) {
        toast.error(`Error To Get All CartItems`)
        return error
    }
})

// Get CartItem By Id
export const getCartItemById = createAsyncThunk('cartItems/getbyid',async(id:string)=>{
    try {
        const data =await GetHook(`/api/cartitems/${id}`)
        return data;
    } catch (error) {
        toast.error(`Faild To Get CartItem`)
        return error
    }
})
//Create CartItem
export const createCartItem = createAsyncThunk('cartItems/create',async(cartItemData:CreateCartItem)=>{
    try {
        const data = await PostHook(`/api/cartItems`, cartItemData)
        if(data){
            toast.success(data?.message)
        }
        return data;
    } catch (error) {
        toast.error(`Create Anew cartItem Faild `)
        return error
    }
})
//Update CartItem 
export const updateCartItem = createAsyncThunk('cartItems/update',async(CartItemData:UpdateCartItem)=>{
    try {
        const data = await PostHook(`/api/cartitems/${CartItemData?.id}`,CartItemData)
        if(data){
            toast.success(data?.message)
        }
        return data;
    } catch (error) {
        toast.error(`Faild To Update CartItem`)
        return error
    }
})

//Delete CartItem
export const deleteCartItem = createAsyncThunk('cartItems/delete',async(id:string)=>{
    try {
        const data = await DeleteHook(`/api/cartitems/${id}`)
        if(data){
            toast.success(data?.message)
        }
        return data;
    } catch (error) {
        toast.error(`Faild To Delete CartItem`)
        return error
    }
})

