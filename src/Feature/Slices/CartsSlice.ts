import { createSlice } from '@reduxjs/toolkit';
import {getAllCart,getCartById,updateCart,deleteCart} from '../Actions/CartsActions';

const initialState = {
    AllCarts :[],
    cart:{},
    loading:false,
    error:null as string | null
}

const CartSlice = createSlice({
    name:'carts',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllCart.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(getAllCart.fulfilled ,(state,action)=>{
            state.AllCarts = action.payload?.data ?? []
            state.loading = false
        })
        .addCase(getAllCart.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(getCartById.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(getCartById.fulfilled ,(state,action)=>{
            state.cart = action.payload
            state.loading = false
        })
        .addCase(getCartById.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(updateCart.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(updateCart.fulfilled ,(state,action)=>{
            state.cart = action.payload
            state.loading = false
        })
        .addCase(updateCart.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(deleteCart.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(deleteCart.fulfilled ,(state)=>{
            state.loading = false
        })
        .addCase(deleteCart.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
    }
})

export default CartSlice.reducer