import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import UserSlice from '@/Feature/Slices/UserSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
        user:UserSlice,
    },
    
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
