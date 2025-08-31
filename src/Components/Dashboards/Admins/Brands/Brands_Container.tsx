'use client'
import { getAllBrands } from "@/Feature/Actions/BrandsActions"
import { UpdateBrand } from "@/Interfaces/BrandInterface"
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store"
import { useEffect } from "react"
import Brand_Content from "./Brand_Content"


export default function Brands_Container() {
  const { AllBrands } = useAppSelector((state: RootState) => state.brand)
  const dispatch = useAppDispatch()
  //Fetch All Brands
  useEffect(() => {
    dispatch(getAllBrands())
  }, [dispatch])

  console.log(AllBrands)
  return (
    <div className="w-full flex justify-start items-start relative">
      {/*Brands Table*/}
      <table className="w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border border-[#E4E5EE]">Image</th>
            <th className="p-2 border border-[#E4E5EE]">Title</th>
            <th className="p-2 border border-[#E4E5EE]">Description</th>
            <th className="p-2 border border-[#E4E5EE]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            AllBrands?.brands?.map((brand: UpdateBrand) =>
              <Brand_Content key={brand?.id} brand={brand} />
            )
          }
        </tbody>
      </table>

    </div>
  )
}
