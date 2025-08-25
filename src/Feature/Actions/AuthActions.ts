import { PostHook } from "@/Base/Hooks";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Logein User
export const loginUser = createAsyncThunk('users/login',async(loginData)=>{
    try {
        const {data} = await PostHook(`/api/auth/login`,{data:loginData})
        return data;
    } catch (error) {
        toast.error(`Faild To Login ${error}`)
    }
})

// Logout User
export const logoutUser = createAsyncThunk('users/logout',async()=>{
    try {
        const {data}= await PostHook('/api/auth/logout')
            return data
    } catch (error) {
        toast.error(`Faild To Logout ${error}`)
    }
})