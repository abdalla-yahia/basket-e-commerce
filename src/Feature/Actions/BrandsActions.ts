import { DeleteHook, GetHook, PostHook } from "@/Base/Hooks";
import { CreateBrand, UpdateBrand } from "@/Interfaces/BrandInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//Get All brands
export const getAllBrands = createAsyncThunk("brands/getAll", async () => {
  try {
    const res = await GetHook("/api/brands");
    return res;
  } catch (error) {
    toast.error(`Error ${error}`);
    return error;
  }
});

// Get Brand By Id
export const getBrandById = createAsyncThunk(
  "brands/getbyid",
  async (id: string) => {
    try {
      const data = await GetHook(`/api/brands/${id}`);
      return data;
    } catch (error) {
      toast.error(`Faild To Get Brand,${error}`);
      return error;
    }
  }
);

//Create Brand
export const createBrand = createAsyncThunk(
  "brands/create",
  async (brandData: CreateBrand) => {
    try {
      const data = await PostHook(`/api/brands`, brandData);
      if (data) {
        toast.success(data?.message);
      }
      return data;
    } catch (error) {
      toast.error(`Create Anew brand Faild , ${error}`);
      return error;
    }
  }
);

//Update Brand
export const updateBrand = createAsyncThunk(
  "brands/update",
  async (BrandData: UpdateBrand) => {
    try {
      const data = await PostHook(`/api/brands/${BrandData?.id}`, BrandData);
      if (data) {
        toast.success(data?.message);
      }
      return data;
    } catch (error) {
      toast.error(`Faild To Update Brand ${error}`);
      return error;
    }
  }
);

//Delete Brand
export const deleteBrand = createAsyncThunk(
  "brands/delete",
  async (id: string) => {
    try {
      const data = await DeleteHook(`/api/brands/${id}`);
      if (data) {
        toast.success(data?.message);
      }
      return data;
    } catch (error) {
      toast.error(`Faild To Delete Brand ${error}`);
      return error;
    }
  }
);
