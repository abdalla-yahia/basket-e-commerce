import { createSlice } from '@reduxjs/toolkit';
import {getAllProduct,getProductById,updateProduct,deleteProduct} from '../Actions/ProductsActions';

const initialState = {
    AllProducts :[],
    product:{},
    loading:false,
    error:null as string | null
}

const ProductSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProduct.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(getAllProduct.fulfilled ,(state,action)=>{
            state.AllProducts = action.payload?.data ?? []
            state.loading = false
        })
        .addCase(getAllProduct.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(getProductById.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(getProductById.fulfilled ,(state,action)=>{
            state.product = action.payload
            state.loading = false
        })
        .addCase(getProductById.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(updateProduct.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(updateProduct.fulfilled ,(state,action)=>{
            state.product = action.payload
            state.loading = false
        })
        .addCase(updateProduct.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(deleteProduct.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(deleteProduct.fulfilled ,(state)=>{
            state.loading = false
        })
        .addCase(deleteProduct.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
    }
})

export default ProductSlice.reducer