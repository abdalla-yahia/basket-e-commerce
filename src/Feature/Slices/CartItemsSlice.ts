import { createSlice } from "@reduxjs/toolkit";
import {getAllCartItem,getCartItemById,createCartItem,updateCartItem,deleteCartItem,} from "../Actions/CartItemsActions";
import { CreateCartItem, UpdateCartItem } from "@/Interfaces/CartItemInterface";

const initialState = {
  AllCartItems: {cartItems:[] as UpdateCartItem[]},
  cartItem: {} as {cartItem:CreateCartItem},
  loading: false,
  error: null as string | null,
};

const CartItemSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCartItem.fulfilled, (state, action) => {
        state.AllCartItems = action.payload;
        state.loading = false;
      })
      .addCase(getAllCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getCartItemById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCartItemById.fulfilled, (state, action) => {
        state.cartItem = action.payload;
        state.loading = false;
      })
      .addCase(getCartItemById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCartItem.fulfilled, (state, action) => {
        state.cartItem = action.payload;
        state.loading = false;
      })
      .addCase(createCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.cartItem = action.payload;
        state.loading = false;
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCartItem.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default CartItemSlice.reducer;
