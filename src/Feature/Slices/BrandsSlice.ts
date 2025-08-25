import { createSlice } from '@reduxjs/toolkit';
import {getAllBrand,getBrandById,updateBrand,deleteBrand} from '../Actions/BrandsActions';

const initialState = {
    AllBrands :[],
    brand:{},
    loading:false,
    error:null as string | null
}

const BrandSlice = createSlice({
    name:'brands',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllBrand.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(getAllBrand.fulfilled ,(state,action)=>{
            state.AllBrands = action.payload?.data ?? []
            state.loading = false
        })
        .addCase(getAllBrand.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(getBrandById.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(getBrandById.fulfilled ,(state,action)=>{
            state.brand = action.payload
            state.loading = false
        })
        .addCase(getBrandById.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(updateBrand.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(updateBrand.fulfilled ,(state,action)=>{
            state.brand = action.payload
            state.loading = false
        })
        .addCase(updateBrand.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(deleteBrand.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(deleteBrand.fulfilled ,(state)=>{
            state.loading = false
        })
        .addCase(deleteBrand.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
    }
})

export default BrandSlice.reducer