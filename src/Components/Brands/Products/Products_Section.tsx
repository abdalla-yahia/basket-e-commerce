'use client'
import Product_Card from "@/Components/Products/Product_Card";
import { getCategoryById } from "@/Feature/Actions/CategoriesActions";
import { UpdateProduct } from "@/Interfaces/ProductInterface";
import { RootState, useAppDispatch } from "@/libs/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Search_Section from "./Search/Search_Section";

export default function Products_Section({id}:{id:string}) {
  const {category} = useSelector((state:RootState)=>state.category)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getCategoryById(id))
  },[id])
  const ProductsCount = category?.category?.products?.length as number
  return (
    <>
    {/*Search Bar*/}
      <Search_Section ProductsCount={ProductsCount}/>
      {/*Products*/}
    <div className="w-full  flex justify-between flex-wrap gap-0 items-start mt-3">
      {/*Get All Products Of Specific Category*/}
        {
            category?.category?.products?.map((product:UpdateProduct)=>{
              return  <Product_Card key={product?.id} img={product?.image || 'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={product?.offer || ''} title={product?.title as unknown as string} iscounter={true} rating={product?.rating || '4.5'} oldprice={product?.oldPrice as unknown as string} price={product?.price as unknown as string} />
            }  
            )
        }
        
    </div>
    </>
  )
}
