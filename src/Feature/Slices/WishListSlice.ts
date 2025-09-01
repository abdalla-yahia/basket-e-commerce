import { createSlice } from "@reduxjs/toolkit"
import { getWishlist,createWishList,updateWishList } from "../Actions/WishListActions"


const initialState = {
    products:[],
    loading:false,
    error:null as null|string

}

const WishListSlice = createSlice({
    name:'WishList',
    initialState,
    reducers:{},
    extraReducers:(builder)=>
        builder
    .addCase(getWishlist.pending,state=>{
        state.loading = true
        state.error = null
    })
    .addCase(getWishlist.fulfilled,(state,action)=>{
        state.products = action.payload
        state.loading = false
    })
    .addCase(getWishlist.rejected,(state,action)=>{
        state.loading = false
        state.error = action.payload as string
    })
    .addCase(createWishList.pending,state=>{
        state.loading = true
        state.error = null
    })
    .addCase(createWishList.fulfilled,(state,action)=>{
        state.products = action.payload
        state.loading = false
    })
    .addCase(createWishList.rejected,(state,action)=>{
        state.loading = false
        state.error = action.payload as string
    })
    .addCase(updateWishList.pending,state=>{
        state.loading = true
        state.error = null
    })
    .addCase(updateWishList.fulfilled,(state,action)=>{
        state.products = action.payload
        state.loading = false
    })
    .addCase(updateWishList.rejected,(state,action)=>{
        state.loading = false
        state.error = action.payload as string
    })
})


export default WishListSlice.reducer