import { createSlice } from '@reduxjs/toolkit';
import {getAllOrder,getOrderById,updateOrder,deleteOrder} from '../Actions/OrdersActions';

const initialState = {
    AllOrders :[],
    order:{},
    loading:false,
    error:null as string | null
}

const OrderSlice = createSlice({
    name:'orders',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllOrder.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(getAllOrder.fulfilled ,(state,action)=>{
            state.AllOrders = action.payload?.data ?? []
            state.loading = false
        })
        .addCase(getAllOrder.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(getOrderById.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(getOrderById.fulfilled ,(state,action)=>{
            state.order = action.payload
            state.loading = false
        })
        .addCase(getOrderById.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(updateOrder.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(updateOrder.fulfilled ,(state,action)=>{
            state.order = action.payload
            state.loading = false
        })
        .addCase(updateOrder.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(deleteOrder.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(deleteOrder.fulfilled ,(state)=>{
            state.loading = false
        })
        .addCase(deleteOrder.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
    }
})

export default OrderSlice.reducer