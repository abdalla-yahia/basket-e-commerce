import { createSlice } from '@reduxjs/toolkit';
import {getAllCategory,getCategoryById,updateCategory,deleteCategory} from '../Actions/CategoriesActions';

const initialState = {
    AllCategories :[],
    category:{},
    loading:false,
    error:null as string | null
}

const CategorySlice = createSlice({
    name:'categories',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllCategory.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(getAllCategory.fulfilled ,(state,action)=>{
            state.AllCategories = action.payload?.data ?? []
            state.loading = false
        })
        .addCase(getAllCategory.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(getCategoryById.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(getCategoryById.fulfilled ,(state,action)=>{
            state.category = action.payload
            state.loading = false
        })
        .addCase(getCategoryById.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(updateCategory.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(updateCategory.fulfilled ,(state,action)=>{
            state.category = action.payload
            state.loading = false
        })
        .addCase(updateCategory.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(deleteCategory.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(deleteCategory.fulfilled ,(state)=>{
            state.loading = false
        })
        .addCase(deleteCategory.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
    }
})

export default CategorySlice.reducer