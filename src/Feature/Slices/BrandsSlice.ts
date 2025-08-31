import { createSlice } from "@reduxjs/toolkit";
import {getAllBrands,getBrandById,createBrand,updateBrand,deleteBrand,} from "../Actions/BrandsActions";
import { CreateBrand, UpdateBrand } from "@/Interfaces/BrandInterface";

const initialState = {
  AllBrands: { brands: [] as UpdateBrand[] }, 
  brand: {} as {brand:CreateBrand} | null,  
  loading: false,
  error: null as string | null,
};

const BrandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    resetState:(state)=>{
      state.brand = {} as {brand:CreateBrand}
    },
    clearBrand:(state)=>{
      state.brand = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllBrands.fulfilled, (state, action) => {
        state.AllBrands = action.payload;
        state.loading = false;
      })
      .addCase(getAllBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getBrandById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBrandById.fulfilled, (state, action) => {
        state.brand = action.payload;
        state.loading = false;
      })
      .addCase(getBrandById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.brand = action.payload;
        state.loading = false;
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBrand.fulfilled, (state, action) => {
        state.brand = action.payload;
        state.loading = false;
      })
      .addCase(updateBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBrand.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default BrandSlice.reducer;
export const {resetState,clearBrand} = BrandSlice.actions