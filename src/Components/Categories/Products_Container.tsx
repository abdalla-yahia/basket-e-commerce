'use client'
import Products_Section from "./Products_Section";
import Pagination from "@/Utils/Pagination";
import Banar_Section from "@/Utils/Banar_Section";
import { useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import { getCategoryById } from "@/Feature/Actions/CategoriesActions";

export default function Products_Container({ id }: { id: string }) {
  const { pageNumber, searchText,brands } = useAppSelector((state: RootState) => state.product)
  const { products } = useAppSelector((state: RootState) => state.category)
  const dispatch = useAppDispatch()

  const query = {
    id,
    pageNumber,
    searchText,
    brands
  }
  useEffect(() => {
    dispatch(getCategoryById(query as { id: string, pageNumber: number, searchText: string,brands:string[] }))
  }, [id, pageNumber, searchText,brands])

  //Get Count Of Pages From Server
  const pages = products?.pages;
  return (
    <div className="flex flex-col justify-between items-center gap-5">
      {/*Section Baner*/}
      <Banar_Section img={`https://res.cloudinary.com/dghqvxueq/image/upload/v1756307430/shope_n9bjrk.png`} title={'Organic Meals Prepared'} header={'your Home'} paragraph={'Fully prepared & delivered nationwide.'} />
      {/*Products Section*/}
      <Products_Section />
      {/*Pagination*/}
      {
        pages > 1 &&
        <Pagination pagesCount={pages as number} />
      }
    </div>
  )
}
