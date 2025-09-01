'use client'
import Filter_Title from "./Filter_Title";
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import { useEffect } from "react";
import { getAllBrands } from "@/Feature/Actions/BrandsActions";
import { UpdateBrand } from "@/Interfaces/BrandInterface";

export default function Filter_By_Brand() {
  const { AllBrands } = useAppSelector((state: RootState) => state.brand)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllBrands())
  }, [])
  console.log(AllBrands)
  return (
    <div className="flex flex-col justify-between items-start my-[20px]">
      {/*Filter Title*/}
      <Filter_Title title="Brands" />
      {/*Brand Filter*/}
      <ul className="flex flex-col justify-start items-start gap-2 ">
        {
          AllBrands?.brands?.map((brand: UpdateBrand) =>
            <li key={brand?.id} className="w-full flex justify-between items-center gap-4">
              <div className="flex justify-start items-start gap-4"> 
                <input className=" appearance-none bg-white border border-[#D9D9E9]  p-2 hover:bg-primary/50 checked:bg-primary " type="checkbox" name="" id={brand?.title} />
                <label className="text-[#71778E] text-[14px] font-[400]" htmlFor={brand?.title}>{brand?.title}</label>
              </div>
              <span className="text-[#71778E] text-[14px] font-[400]">{`(${brand?.products?.length})`}</span>
              </li>
            )
        }
      </ul>
    </div>
  )
}
