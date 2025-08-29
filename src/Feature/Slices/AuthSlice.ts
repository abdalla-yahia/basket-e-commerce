import { createSlice } from '@reduxjs/toolkit';
import {loginUser,logoutUser,loggedUser,forgetPassword,verifyCode,resetPassword} from '../Actions/AuthActions';
import { TokenInterFace } from '@/Interfaces/UserInterface';

const initialState = {
    LogedUser:{} as {user:TokenInterFace|null,status:number} ,
    forget_Password:{} as {message:string,status:number},
    Verify_code:{} as {message:string,status:number},
    Reset_Password:{} as {message:string,status:number},
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
            state.LogedUser = action.payload
            state.loading = false
        })
        .addCase(loginUser.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(loggedUser.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(loggedUser.fulfilled ,(state,action)=>{
            state.LogedUser = action.payload
            state.loading = false
        })
        .addCase(loggedUser.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(logoutUser.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(logoutUser.fulfilled ,(state)=>{
            state.loading = false
            state.LogedUser = {user:null,status:201}
        })
        .addCase(logoutUser.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(forgetPassword.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(forgetPassword.fulfilled ,(state,action)=>{
            state.loading = false
            state.forget_Password = action.payload
        })
        .addCase(forgetPassword.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(verifyCode.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(verifyCode.fulfilled ,(state,action)=>{
            state.loading = false
            state.Verify_code = action.payload
        })
        .addCase(verifyCode.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(resetPassword.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(resetPassword.fulfilled ,(state,action)=>{
            state.loading = false
            state.Reset_Password = action.payload
        })
        .addCase(resetPassword.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
  
    }
})

export default AuthSlice.reducer