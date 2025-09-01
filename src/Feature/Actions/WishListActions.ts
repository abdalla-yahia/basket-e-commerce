import { GetHook, PostHook } from "@/Base/Hooks";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootState, useAppSelector } from '@/libs/store';

//Get All Products In Widhlist
export const getWishlist = createAsyncThunk('WishList/get',async ()=>{
    const {LogedUser} = useAppSelector((state:RootState)=>state.auth)
    try {
        const data = await GetHook(`/api/wishlist/${LogedUser?.user?.id}`)
        return data;
    } catch (error) {
        toast.error('Faild to get products in wishlist')
        return error
    }
})


//Add To Wish list
export const createWishList = createAsyncThunk('WishList/create',async(ProductData:{userId:string,productId:string})=>{
    try {
        const data = await PostHook('/api/wishlist/add',ProductData)
        toast.success('Add Product To Wish List Successfully')
        return data
    } catch (error) {
        toast.error('Faild to Create products in wishlist')
        return error
    }
})

//Remove From Wish list
export const updateWishList = createAsyncThunk('WishList/update',async(ProductData)=>{
    try {
        const data = await PostHook('/api/wishlist/remove',ProductData)
        toast.success('Remove Product From Wish List Successfully')
        return data
    } catch (error) {
        toast.error('Faild to Create products in wishlist')
        return error
    }
})

