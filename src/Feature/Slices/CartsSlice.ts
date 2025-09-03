import { createSlice } from "@reduxjs/toolkit";
import { getAllCart } from "../Actions/CartsActions";
import { CreateCart, UpdateCart } from "@/Interfaces/CartInterface";

const initialState = {
  AllCarts: {} as { carts: UpdateCart },
  cart: {} as { cart: CreateCart },
  loading: false,
  error: null as string | null,
  totalPrice: 0,
  productsCount: 0,
};

const CartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCart.fulfilled, (state, action) => {
        state.AllCarts = action.payload;
        state.loading = false;
        const items = state?.AllCarts?.carts?.items ?? [];
        if (items?.length) {
          state.totalPrice =
            items?.reduce((acc, rec) => {
              return acc + (rec?.product?.price || 0) * (rec?.quantity || 1);
            }, 0) + 2.46;
          state.productsCount = items?.length;
        }
      })
      .addCase(getAllCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default CartSlice.reducer;
