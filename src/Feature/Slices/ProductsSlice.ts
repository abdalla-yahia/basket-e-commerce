import { createSlice } from "@reduxjs/toolkit";
import {getAllProduct,getProductBySlug,createProduct,updateProduct,deleteProduct} from "../Actions/ProductsActions";
import { UpdateProduct } from "@/Interfaces/ProductInterface";

const initialState = {
  AllProducts: {} as {products : UpdateProduct[],pages:number},
  product: {} as {product:UpdateProduct ,status:number},
  loading: false,
  error: null as string | null,
  pageNumber:1,
  searchText:'',
  categories:[] as string[],
  brands:[] as string[],
  price:{} as {min:string,max:string}
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPageNumberRedux:(state,action)=>{
      state.pageNumber = action.payload
    },
    setSearchTextRedux:(state,action)=>{
      state.searchText = action.payload
    },
    setCategoriesRedux:(state,action)=>{
      state.categories = action.payload
    },
    setBrandsRedux:(state,action)=>{
      state.brands = action.payload
    },
    setPriceRedux:(state,action)=>{
      state.price = action.payload
    },
  },
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
export const {setSearchTextRedux,setPageNumberRedux,setCategoriesRedux,setBrandsRedux,setPriceRedux} = ProductSlice.actions