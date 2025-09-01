import { createSlice } from "@reduxjs/toolkit";
import {createCartItem} from "../Actions/CartItemsActions";
import { UpdateCartItem } from "@/Interfaces/CartItemInterface";

const initialState = {
  AllCartItems: {cartItems:[] as UpdateCartItem[]},
  cartItem: {} as {cartItem:UpdateCartItem},
  loading: false,
  error: null as string | null,
};

const CartItemSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
  },
});

export default CartItemSlice.reducer;
