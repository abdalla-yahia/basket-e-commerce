import { createSlice } from '@reduxjs/toolkit';
import {getAllUser,getUserById,updateUser,deleteUser} from '../Actions/UsersActions';

const initialState = {
    AllUsers :[],
    user:{},
    loading:false,
    error:null as string | null
}

const UserSlice = createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllUser.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(getAllUser.fulfilled ,(state,action)=>{
            state.AllUsers = action.payload?.data ?? []
            state.loading = false
        })
        .addCase(getAllUser.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(getUserById.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(getUserById.fulfilled ,(state,action)=>{
            state.user = action.payload
            state.loading = false
        })
        .addCase(getUserById.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(updateUser.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(updateUser.fulfilled ,(state,action)=>{
            state.user = action.payload
            state.loading = false
        })
        .addCase(updateUser.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(deleteUser.pending,state=>{
            state.loading = true
            state.error = null
        })
        .addCase(deleteUser.fulfilled ,(state)=>{
            state.loading = false
        })
        .addCase(deleteUser.rejected ,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
    }
})

export default UserSlice.reducer