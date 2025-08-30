import { DeleteHook, GetHook, PostHook } from "@/Base/Hooks";
import { CreateAddresse, UpdateAddresse } from "@/Interfaces/AddresseInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//Get All Addresses
export const getAllAddresses = createAsyncThunk('Addresses/getAll',async()=>{
    try {
        const res = GetHook('/api/users/addresses')
        return res;
    } catch (error) {
        toast.error(`Error To Get All Addresses`)
        return error
    }
})

// Get Addresse By Id
export const getAddresseById = createAsyncThunk('Addresses/getbyid',async(id:string)=>{
    try {
        const data =await GetHook(`/api/users/addresses/${id}`)
        return data;
    } catch (error) {
        return error
    }
})

//Create Addresse
export const createAddresse = createAsyncThunk('Addresses/create',async(AddresseData:CreateAddresse)=>{
    try {
        const data = await PostHook(`/api/users/addresses`, AddresseData)
        if(data){
            toast.success(`Create Addresse ${data?.Addresse?.name} Account Successfully`)
        }
        return data;
    } catch (error) {
        toast.error(`Create Anew Addresse Faild `)
        return error
    }
})

//Update Addresse 
export const updateAddresse = createAsyncThunk('Addresses/update',async(AddresseData:UpdateAddresse)=>{
    try {
        const data = await PostHook(`/api/users/addresses/${AddresseData?.id}`,AddresseData)
        if(data){
            toast.success(data?.message)
        }
        return data;
    } catch (error) {
        console.log(error)
        toast.error(`Faild To Update Addresse`)
        return error
    }
})

//Delete Addresse
export const deleteAddresse = createAsyncThunk('Addresses/delete',async(id:string)=>{
    try {
        const data = await DeleteHook(`/api/users/addresses/${id}`)
        if(data){
            toast.success(data?.message)
        }
        return data;
    } catch (error) {
        toast.error(`Faild To Delete Addresse`)
        return error
    }
})


