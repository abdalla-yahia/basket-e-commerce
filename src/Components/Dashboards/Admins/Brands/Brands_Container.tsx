'use client'
import { UpdateBrand } from "@/Interfaces/BrandInterface"
import { RootState, useAppSelector } from "@/libs/store"
import Brand_Content from "./Brand_Content"
import * as icon from '@/Utils/Icons/Icons'


export default function Brands_Container() {
  const { AllBrands } = useAppSelector((state: RootState) => state.brand)

  return (
    <div className="w-full overflow-x-auto scrollbar-none flex flex-col justify-start items-start relative">
      {/*Section Title*/}
      <h1 className="text-xl font-bold my-4 text-primary flex justify-between items-center">
        <icon.SiBrandfolder className="text-3xl mx-2" />
        All Brands {`(${AllBrands?.brands?.length})`}
      </h1>
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
