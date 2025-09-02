import { createSlice } from "@reduxjs/toolkit";
import {getAllCategories,getCategoryById,createCategory,updateCategory,deleteCategory,getProductsOfCategoryById} from "../Actions/CategoriesActions";
import { UpdateCategory } from "@/Interfaces/CategoryInterface";
import { UpdateProduct } from "@/Interfaces/ProductInterface";

const initialState = {
  AllCategories: {categories:[] as UpdateCategory[]},
  category: {} as {category:UpdateCategory} | null,
  products: {} as {products:UpdateProduct[],pages:number},
  loading: false,
  error: null as string | null,
};

const CategorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    resetStatus: (state) => {
    state.loading = false
    state.error = null
  },
  clearCategory: (state) => {
    state.category = null
  }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.AllCategories = action.payload;
        state.loading = false;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getCategoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.category = action.payload;
        state.loading = false;
      })
      .addCase(getCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getProductsOfCategoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsOfCategoryById.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getProductsOfCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.category = action.payload;
        state.loading = false;
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.category = action.payload;
        state.loading = false;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default CategorySlice.reducer;
export const {resetStatus,clearCategory} = CategorySlice.actions