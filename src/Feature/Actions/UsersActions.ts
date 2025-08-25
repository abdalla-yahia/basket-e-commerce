import { DeleteHook, GetHook, PostHook } from "@/Base/Hooks";
import { UpdateUser } from "@/Interfaces/UserInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//Get All Users
export const getAllUser = createAsyncThunk('users/getAll',async()=>{
    try {
        const res = GetHook('api/users')
        return res;
    } catch (error) {
        toast.error(`Error ${error}`)
    }
})

// Get User By Id
export const getUserById = createAsyncThunk('users/getbyid',async(id:string)=>{
    try {
        const {data} =await GetHook(`/api/users/${id}`)
        return data;
    } catch (error) {
        toast.error(`Faild To Get User,${error}`)
    }
})

//Update User 
export const updateUser = createAsyncThunk('users/update',async(userData:UpdateUser)=>{
    try {
        const {data} = await PostHook(`/api/users/${userData?.id}`,{
            data:userData
        })
        return data;
    } catch (error) {
        toast.error(`Faild To Update User ${error}`)
    }
})

//Delete User
export const deleteUser = createAsyncThunk('users/delete',async(id:string)=>{
    try {
        const {data} = await DeleteHook(`/api/users/${id}`)
        return data;
    } catch (error) {
        toast.error(`Faild To Delete User ${error}`)
    }
})

