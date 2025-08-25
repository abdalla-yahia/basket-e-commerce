import { createSlice } from '@reduxjs/toolkit';
import {getAllUser} from '../Actions/UsersActions';

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
    }
})

export default UserSlice.reducer