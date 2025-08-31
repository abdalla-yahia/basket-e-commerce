'use client'
import Products_Section from "./Products_Section";
import Pagination from "../../../Utils/Pagination";
import Banar_Section from "./Banar_Section";
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import { useEffect } from "react";
import { getAllProduct } from "@/Feature/Actions/ProductsActions";

export default function Products_Container() {
  const {AllProducts} = useAppSelector((state:RootState)=>state.product)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getAllProduct())
  },[])
  return (
    <div className="flex flex-col justify-between items-center gap-5">
        {/*Section Baner*/}
        <Banar_Section />
        {/*Products Section*/}
        <Products_Section />
        {/*Pagination*/}
        <Pagination />
    </div>
  )
}
