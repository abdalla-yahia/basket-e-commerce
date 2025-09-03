import { PostHook } from "@/Base/Hooks";
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
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
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
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      toast.error(`Faild To Update CartItem`);
      return error;
    }
  }
);
