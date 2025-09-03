'use client'
import Products_Container from "@/Components/Shop/Products/Products_Container";
import { setPageNumberRedux, setSearchTextRedux } from "@/Feature/Slices/ProductsSlice";
import { useAppDispatch } from "@/libs/store";

import { useEffect, useState } from "react";

export default function Products_Page() {
  const [pageNumber, setPageNumber] = useState(1)
  const [searchText, setSearchText] = useState('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageNumberRedux(pageNumber))
    dispatch(setSearchTextRedux(searchText))
  }, [pageNumber, searchText])

  return (
    <>
      {/*Shop Container*/}
      <Products_Container pageNumber={pageNumber} setPageNumber={setPageNumber} setSearchText={setSearchText} />
    </>
  )
}
