import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import UserSlice from '@/Feature/Slices/UsersSlice';
import ProductSlice from '@/Feature/Slices/ProductsSlice';
import BrandSlice from '@/Feature/Slices/BrandsSlice';
import OrderSlice from '@/Feature/Slices/OrdersSlice';
import CartSlice from '@/Feature/Slices/CartsSlice';
import CategorySlice from '@/Feature/Slices/CategoriesSlice';
import AuthSlice from '@/Feature/Slices/AuthSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
        user:UserSlice,
        product:ProductSlice,
        brand:BrandSlice,
        order:OrderSlice,
        cart:CartSlice,
        category:CategorySlice,
        auth:AuthSlice
    },
    
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
