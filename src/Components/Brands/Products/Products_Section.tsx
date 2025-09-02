'use client'
import Product_Card from "@/Components/Products/Product_Card";
import { UpdateProduct } from "@/Interfaces/ProductInterface";
import { RootState, useAppSelector } from "@/libs/store";
import Search_Section from "./Search/Search_Section";
import Image from "next/image";

export default function Products_Section({setSearchText}:{setSearchText:(arg0:string)=>void}) {
  const { brand } = useAppSelector((state: RootState) => state.brand)

  const ProductsCount = brand?.brand?.products?.length as number
  return (
    <>
      {/*Search Bar*/}
      <Search_Section setSearchText={setSearchText} ProductsCount={ProductsCount} />
      {/*Products*/}
      <div className="w-full  flex justify-between flex-wrap gap-0 items-start mt-3">
         <div className="w-full  flex justify-center  flex-wrap gap-2 items-center my-4">
            {brand?.brand?.image && <Image src={brand?.brand?.image} alt={brand?.brand?.title || 'Categpry-Image'} width={50} height={50} />}
            <h2 className="text-2xl font-bold">{brand?.brand?.title}</h2>
          </div>
        {/*Get All Products Of Specific brand*/}
        {
          brand?.brand?.products?.map((product: UpdateProduct) => {
            return <Product_Card slug={product?.slug as string} key={product?.id} img={product?.image || 'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={product?.offer as string} title={product?.title as unknown as string} iscounter={true} rating={product?.rating || '4.5'} oldprice={product?.oldPrice as unknown as string} price={product?.price as unknown as string} quantity={product?.quantity as number}/>
          }
          )
        }

      </div>
    </>
  )
}
