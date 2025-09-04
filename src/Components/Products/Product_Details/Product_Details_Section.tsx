'use client'
import ProductGallery from "@/Utils/Swiper";
import Product_Content from "./Product_Content";
import { RootState, useAppSelector } from "@/libs/store";

export default function Product_Details_Section() {
    const { product } = useAppSelector((state: RootState) => state.product)
   
  return (
    <div className=" w-full flex flex-col md:flex-row justify-between items-center gap-5">
        {/*Product Gallary*/}
        <div className="w-full md:w-[50%] flex justify-center items-center">
        <ProductGallery images={product?.product && product?.product?.gallery as string[]}/>
        </div>
        {/*Product Content*/}
        <Product_Content />
    </div>
  )
}
