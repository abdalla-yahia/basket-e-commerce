import { createSlice } from '@reduxjs/toolkit';
import {loginUser,logoutUser} from '../Actions/AuthActions';

const initialState = {
    LogedUser:{},
    loading:false,
    error:null as string | null
}

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(loginUser.fulfilled ,(state,action)=>{
            state.LogedUser = action.payload?.data ?? []
            state.loading = false
        })
        .addCase(loginUser.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(logoutUser.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(logoutUser.fulfilled ,(state)=>{
            state.loading = false
        })
        .addCase(logoutUser.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
  
    }
})

export default AuthSlice.reducer