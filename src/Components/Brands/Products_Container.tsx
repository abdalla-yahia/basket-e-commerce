'use client'
import Products_Section from "./Products_Section";
import Pagination from "../../Utils/Pagination";
import Banar_Section from "@/Utils/Banar_Section";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import { Count_Of_Products } from "@/Utils/Constants";
import { getBrandById, getProductsOfBrandById } from "@/Feature/Actions/BrandsActions";

export default function Products_Container({ id }: { id: string }) {
  const [pageNumber, setPageNumber] = useState(1)
  const [searchText, setSearchText] = useState('')

  const { AllProducts } = useAppSelector((state: RootState) => state.product)
  const { products } = useAppSelector((state: RootState) => state.brand)
  const dispatch = useAppDispatch()

  const query = {
    id,
    pageNumber,
    searchText
  }
  useEffect(() => {
    dispatch(getBrandById(id))
  }, [id])

  //Get Products By Search Text
  useEffect(() => {
    dispatch(getProductsOfBrandById(query as { id: string, pageNumber: number, searchText: string }))
  }, [dispatch, pageNumber, searchText])

  //Get Count Of Pages From Server
  const pages = products?.pages;
  return (
    <div className="flex flex-col justify-between items-center gap-5">
      {/*Section Baner*/}
      <Banar_Section img={`https://res.cloudinary.com/dghqvxueq/image/upload/v1756307430/shope_n9bjrk.png`} title={'Organic Meals Prepared'} header={'your Home'} paragraph={'Fully prepared & delivered nationwide.'} />
      {/*Products Section*/}
      <Products_Section setSearchText={setSearchText} />
      {/*Pagination*/}
      {
        AllProducts?.products?.length > Count_Of_Products &&
        <Pagination pagesCount={pages as number} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      }
    </div>
  )
}
