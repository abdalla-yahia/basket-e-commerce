'use client'
import { UpdateProduct } from "@/Interfaces/ProductInterface"
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store"
import Product_content from "./Product_content"
import * as icon from '@/Utils/Icons/Icons';
import Pagination from "@/Utils/Pagination";
import { setSearchTextRedux } from "@/Feature/Slices/ProductsSlice";

export default function Products_Container() {
  const { AllProducts } = useAppSelector((state: RootState) => state.product)
  const dispatch = useAppDispatch()

  //Get Count Of Pages From Server
  const pages = AllProducts?.pages;
  const SearchProductHandler =(e:string)=>{
    dispatch(setSearchTextRedux(e))
  }

  return (
    <>
    {/*Products Table Container*/}
    <div className="w-full overflow-x-auto scrollbar-none flex flex-col justify-start items-start relative">
      {/*Section Title*/}
      <h1 className="text-xl font-bold my-4 text-primary flex justify-between items-center">
        <icon.FaBoxOpen className="text-3xl mx-2" />
        All Products {`(${AllProducts?.FullyProducts?.length})`}
      </h1>
      {/*Search Input*/}
      <input onChange={(e)=>SearchProductHandler(e.target.value as string)} type="search" name="" id="" placeholder="Search For Product..." className="w-full bg-gray-200 my-1 p-2 rounded "/>
      {/*Products Table*/}
      <table className="w-full  border border-gray-200 table">
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
    {/*Pagination*/}
      {
        pages > 1 &&
        <Pagination pagesCount={pages as number} />
      }
    </>
  )
}
