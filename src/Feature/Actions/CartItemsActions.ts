import { DeleteHook, PostHook } from "@/Base/Hooks";
import { UpdateCartItem } from "@/Interfaces/CartItemInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Create Anew CartItem And Cart If User Dont Have Cart
export const createCartItem = createAsyncThunk(
  "cartItems/create",
  async (CartItemData: UpdateCartItem) => {
    try {
      const data = await PostHook(`/api/cartitems`, CartItemData);
      if (data) {
        toast.success(data?.message);
      }
      return data;
    } catch (error) {
      toast.error(`Faild To Create CartItem`);
      return error;
    }
  }
);

//Update Products In cart Items
export const updateCartItem = createAsyncThunk(
  "cartItems/update",
  async (ProductCartItemData: UpdateCartItem) => {
    try {
      const data = await PostHook(`/api/cartitems`, ProductCartItemData);
      if (data) {
        toast.success(data?.message);
      }
      return data;
    } catch (error) {
      toast.error(`Faild To Update CartItem`);
      return error;
    }
  }
);

//Delete Item From Cart Of Logged user
export const deleteItemFromCart = createAsyncThunk('carts/deleteItemFromCart',async(id:string)=>{
    try {
        const res = await DeleteHook(`/api/cartitems/${id}`)
        return res;
    } catch (error) {
        toast.error(`Fiald To Delete Item From Cart`)
        return error
    }
})