'use client'
import Filter_Title from "./Filter_Title";
import { RootState, useAppSelector } from "@/libs/store";
import { ChangeEvent } from "react";
import { UpdateBrand } from "@/Interfaces/BrandInterface";

export default function Filter_By_Brand({brands,setBrands}:{brands:string[],setBrands:(arg0:string[])=>void}) {
  const { AllBrands } = useAppSelector((state: RootState) => state.brand)

  //Checked Input Handler
  const ChekedInputHandler = (e:ChangeEvent<HTMLInputElement>,brand:UpdateBrand)=>{
    if(e.target.checked){
      setBrands([...brands,brand?.id])
    }else{
      setBrands(brands?.filter(ele=>ele !== brand?.id))
    }
  }
  return (
    <div className="w-full flex flex-col justify-between items-start my-[20px]">
      {/*Filter Title*/}
      <Filter_Title title="Brands" />
      {/*Brand Filter*/}
      <ul className="w-full flex flex-col justify-start items-start gap-2 ">
         <li className="flex justify-start items-start gap-4">
              <input onChange={()=>setBrands([])} checked={brands?.length <= 0} className=" appearance-none bg-white border border-[#D9D9E9]  p-2 hover:bg-primary/50 checked:bg-primary " type="checkbox" name='AllBrands' id='AllBrands' />
              <label className="text-[#71778E] text-[14px] font-[400]" htmlFor='AllBrands'>All Brands</label>
            </li>
        {
          AllBrands?.brands?.map((brand: UpdateBrand) =>
            <li key={brand?.id} className="w-full flex justify-between items-center gap-4">
              <div className="flex justify-start items-start gap-4"> 
                <input onChange={(e)=>ChekedInputHandler(e,brand)} checked={brands?.includes(brand?.id)} className=" appearance-none bg-white border border-[#D9D9E9]  p-2 hover:bg-primary/50 checked:bg-primary " type="checkbox" name="" id={brand?.title} />
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
