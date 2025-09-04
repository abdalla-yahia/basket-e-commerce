'use client'
import Product_Card from "@/Components/Products/Product_Card";
import { UpdateProduct } from "@/Interfaces/ProductInterface";
import { RootState, useAppSelector } from "@/libs/store";
import Search_Section from "./Search_Section";
import Image from "next/image";
import Pagination from "@/Utils/Pagination";

export default function Products_Section() {
  const { products } = useAppSelector((state: RootState) => state.brand)

  const ProductsCount = products?.products?.length as number
   //Get Count Of Pages From Server
  const pages = products?.pages;
  console.log(products)
  return (
    <>
      {/*Search Bar*/}
      <Search_Section ProductsCount={ProductsCount ?? 0} />
      {/*Name Of Brand And Its Image*/}
      <div className="w-full  flex justify-between flex-wrap gap-0 items-start mt-5 mb-[35px]">
        <div className="w-full  flex justify-center  flex-wrap gap-2 items-center">
          {products?.brand?.image && <Image src={products?.brand?.image} alt={products?.brand?.title || 'Categpry-Image'} width={50} height={50} />}
          <h2 className="text-2xl font-bold">{products?.brand?.title}</h2>
        </div>
        {/*Get All Products Of Specific brand*/}
        {
          products?.products?.map((product: UpdateProduct) => {
            return <Product_Card slug={product?.slug as string} key={product?.id} img={product?.image || 'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={product?.offer as string} title={product?.title as unknown as string} iscounter={true} rating={product?.rating || '4.5'} oldprice={product?.oldPrice as unknown as string} price={product?.price as unknown as string} quantity={product?.quantity as number} />
          }
          )
        }
         {/*Pagination*/}
              {
                 pages > 1 &&
                <Pagination pagesCount={pages as number} />
              }
      </div>
    </>
  )
}
