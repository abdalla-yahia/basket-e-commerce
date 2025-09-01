'use client'
import { getAllProduct } from "@/Feature/Actions/ProductsActions"
import { UpdateProduct } from "@/Interfaces/ProductInterface"
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store"
import { useEffect } from "react"
import Product_content from "./Product_content"
import * as icon from '@/Utils/Icons/Icons';

export default function Products_Container() {
  const { AllProducts } = useAppSelector((state: RootState) => state.product)
  const dispatch = useAppDispatch()
  //Fetch All Products
  useEffect(() => {
    dispatch(getAllProduct())
  }, [dispatch])


  return (
    <div className="w-full flex flex-col justify-start items-start relative">
      {/*Section Title*/}
      <h1 className="text-xl font-bold my-4 text-primary flex justify-between items-center">
        <icon.FaBoxOpen className="text-3xl mx-2"/>
        All Products
        </h1>
      {/*Products Table*/}
      <table className="w-full border border-gray-200 table">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border border-[#E4E5EE]">Image</th>
            <th className="p-2 border border-[#E4E5EE]">Title</th>
            <th className="p-2 border border-[#E4E5EE]">Description</th>
            <th className="p-2 border border-[#E4E5EE]">Category</th>
            <th className="p-2 border border-[#E4E5EE]">Brand</th>
            <th className="p-2 border border-[#E4E5EE]">Quantity</th>
            <th className="p-2 border border-[#E4E5EE]">Price</th>
            <th className="p-2 border border-[#E4E5EE]">Offer</th>
            <th className="p-2 border border-[#E4E5EE]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            AllProducts?.products?.map((product: UpdateProduct) =>
              <Product_content key={product?.id} product={product} />
            )
          }
        </tbody>
      </table>

    </div>
  )
}
