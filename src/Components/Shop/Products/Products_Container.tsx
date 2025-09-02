'use client'
import Products_Section from "./Products_Section";
import Pagination from "../../../Utils/Pagination";
import Banar_Section from "./Banar_Section";
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import { useEffect, useState } from "react";
import {  getAllProduct, getProductsByFilter, getProductsByPageNumber, getProductsBySearchText } from "@/Feature/Actions/ProductsActions";
import {Count_Of_Products} from '@/Utils/Constants';
import { useSearchParams } from "next/navigation";

export default function Products_Container() {
  const [pageNumber,setPageNumber] =useState(1)
  const [searchText,setSearchText] = useState('')
  const searchParams = useSearchParams()
  const {AllProducts} = useAppSelector((state:RootState)=>state.product)
  const {ProductsByPageNumber} = useAppSelector((state:RootState)=>state.product)
  const dispatch = useAppDispatch()

  const query ={
    pageNumber,
    searchText
  }
  //Get All Products
  useEffect(()=>{
    dispatch(getAllProduct())
  },[dispatch])

//Get Products By Page Number
  useEffect(()=>{
    dispatch(getProductsByPageNumber(pageNumber))
  },[pageNumber,dispatch,searchText])

  //Get Products By Search Text
    useEffect(()=>{
      dispatch(getProductsBySearchText(query as {pageNumber:number,searchText:string}))
    },[dispatch,pageNumber,searchText])

    //Set PageNumer While Filter Running
    useEffect(()=>{
      const params = new URLSearchParams();
      if(pageNumber){
        params.set('pageNumber',pageNumber.toString())
      }
    },[pageNumber])
    //Get Filter Products
    useEffect(()=>{
      dispatch(getProductsByFilter())
    },[searchParams])
    console.log(searchParams)
  //Get Count Of Pages From Server
  const pages = ProductsByPageNumber?.pages;
  return (
    <div className="flex flex-col justify-between items-center gap-5">
        {/*Section Baner*/}
        <Banar_Section />
        {/*Products Section*/}
        <Products_Section setSearchText={setSearchText}/>
        {/*Pagination*/}
        {
           AllProducts?.products?.length > Count_Of_Products &&
          <Pagination pagesCount={pages as number} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
        }
    </div>
  )
}
