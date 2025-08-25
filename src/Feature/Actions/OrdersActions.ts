import { DeleteHook, GetHook, PostHook } from "@/Base/Hooks";
import { UpdateOrder } from "@/Interfaces/OrderInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//Get All orders
export const getAllOrder = createAsyncThunk('orders/getAll',async()=>{
    try {
        const res = GetHook('api/orders')
        return res;
    } catch (error) {
        toast.error(`Error ${error}`)
    }
})

// Get Order By Id
export const getOrderById = createAsyncThunk('orders/getbyid',async(id:string)=>{
    try {
        const {data} =await GetHook(`/api/orders/${id}`)
        return data;
    } catch (error) {
        toast.error(`Faild To Get Order,${error}`)
    }
})

//Update Order 
export const updateOrder = createAsyncThunk('orders/update',async(OrderData:UpdateOrder)=>{
    try {
        const {data} = await PostHook(`/api/orders/${OrderData?.id}`,{
            data:OrderData
        })
        return data;
    } catch (error) {
        toast.error(`Faild To Update Order ${error}`)
    }
})

//Delete Order
export const deleteOrder = createAsyncThunk('orders/delete',async(id:string)=>{
    try {
        const {data} = await DeleteHook(`/api/orders/${id}`)
        return data;
    } catch (error) {
        toast.error(`Faild To Delete Order ${error}`)
    }
})

