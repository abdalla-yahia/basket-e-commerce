'use client'
import Products_Container from "@/Components/Shop/Products/Products_Container";
import { setPageNumberRedux, setSearchTextRedux } from "@/Feature/Slices/ProductsSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import { useEffect } from "react";

export default function Products_Page() {
  const {pageNumber,searchText} = useAppSelector((state:RootState)=>state.product)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageNumberRedux(pageNumber))
    dispatch(setSearchTextRedux(searchText))
  }, [pageNumber, searchText])

  return (
    <>
      {/*Shop Container*/}
      <Products_Container  />
    </>
  )
}
