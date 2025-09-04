import { DeleteHook, GetHook, PostHook } from "@/Base/Hooks";
import { CreateOrder, UpdateOrder } from "@/Interfaces/OrderInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//Get All orders
export const getAllOrders = createAsyncThunk("orders/getAll", async () => {
  try {
    const res = await GetHook("/api/orders");
    return res;
  } catch (error) {
    toast.error(`Error To Get All Orders`);
    return error;
  }
});

// Get Order By Id
export const getOrderById = createAsyncThunk(
  "orders/getbyid",
  async (id: string) => {
    try {
      const data = await GetHook(`/api/orders/${id}`);
      return data;
    } catch (error) {
      toast.error(`Faild To Get Order`);
      return error;
    }
  }
);
//Create order
export const createOrder = createAsyncThunk(
  "orders/create",
  async (orderData: string) => {
    try {
      const data = await PostHook(`/api/orders`, orderData);
      if (data) {
        toast.success(data?.message);
      }
      return data;
    } catch (error) {
      toast.error(`Create Anew order Faild `);
      return error;
    }
  }
);
//Update Order
export const updateOrder = createAsyncThunk(
  "orders/update",
  async (OrderData: UpdateOrder) => {
    try {
      const data = await PostHook(`/api/orders/${OrderData?.id}`, OrderData);
      if (data) {
        toast.success(data?.message);
      }
      return data;
    } catch (error) {
      toast.error(`Faild To Update Order`);
      return error;
    }
  }
);

//Delete Order
export const deleteOrder = createAsyncThunk(
  "orders/delete",
  async (id: string) => {
    try {
      const data = await DeleteHook(`/api/orders/${id}`);
      if (data) {
        toast.success(data?.message);
      }
      return data;
    } catch (error) {
      toast.error(`Faild To Delete Order `);
      return error;
    }
  }
);
