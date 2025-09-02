import { createSlice } from "@reduxjs/toolkit";
import {getAllProduct,getProductBySlug,createProduct,updateProduct,deleteProduct,getProductsByPageNumber,getProductsBySearchText} from "../Actions/ProductsActions";
import { UpdateProduct } from "@/Interfaces/ProductInterface";

const initialState = {
  AllProducts: {products :[] as UpdateProduct[]},
  ProductsByPageNumber:{} as {products : UpdateProduct[],pages:number},
  ProductsBySearchText:{} as {products : UpdateProduct[],pages:number},
  product: {} as {product:UpdateProduct ,status:number},
  loading: false,
  error: null as string | null,
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.AllProducts = action.payload;
        state.loading = false;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getProductsByPageNumber.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsByPageNumber.fulfilled, (state, action) => {
        state.ProductsByPageNumber = action.payload;
        state.loading = false;
      })
      .addCase(getProductsByPageNumber.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getProductsBySearchText.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsBySearchText.fulfilled, (state, action) => {
        state.ProductsBySearchText = action.payload;
        state.loading = false;
      })
      .addCase(getProductsBySearchText.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getProductBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductBySlug.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(getProductBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default ProductSlice.reducer;
