'use client'
import Products_Section from "./Products_Section";
import Pagination from "../../../Utils/Pagination";
import Banar_Section from "./Banar_Section";
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import { useEffect, useState } from "react";
import {  getAllProduct, getProductsByPageNumber } from "@/Feature/Actions/ProductsActions";
import {Count_Of_Products} from '@/Utils/Constants';

export default function Products_Container() {
  const [pageNumber,setPageNumber] =useState(1)
  const {AllProducts} = useAppSelector((state:RootState)=>state.product)
  const {ProductsByPageNumber} = useAppSelector((state:RootState)=>state.product)
  const dispatch = useAppDispatch()
  //Get All Products
  useEffect(()=>{
  dispatch(getAllProduct())
},[])
//Get Products By Page Number
  useEffect(()=>{
    dispatch(getProductsByPageNumber(pageNumber))
  },[pageNumber])
  //Get Count Of Pages From Server
  const pages = ProductsByPageNumber?.pages;
  console.log(AllProducts?.products?.length)
  return (
    <div className="flex flex-col justify-between items-center gap-5">
        {/*Section Baner*/}
        <Banar_Section />
        {/*Products Section*/}
        <Products_Section />
        {/*Pagination*/}
        {
           AllProducts?.products?.length > Count_Of_Products &&
          <Pagination pagesCount={pages as number} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
        }
    </div>
  )
}
