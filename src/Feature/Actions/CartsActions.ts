import { GetHook } from "@/Base/Hooks";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";

//Get Cart Of Logged user
export const getAllCart = createAsyncThunk('carts/getCart',async()=>{
    try {
        const res = await GetHook('/api/carts')
        return res;
    } catch (error) {
        // toast.error(`Error To Get All Carts`)
        return error
    }
})
