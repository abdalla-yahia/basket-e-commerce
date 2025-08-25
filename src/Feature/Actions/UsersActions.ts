import { GetHook } from "@/Base/Hooks";
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