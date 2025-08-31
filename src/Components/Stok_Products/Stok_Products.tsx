'use client'
import { getAllCategories } from "@/Feature/Actions/CategoriesActions";
import { UpdateCategory } from "@/Interfaces/CategoryInterface";
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import Image from "next/image";
import { useEffect } from "react";

export default function Stok_Products() {
  const {AllCategories} = useAppSelector((state:RootState)=>state.category)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getAllCategories())
  },[])
  //Get First Category To Be A Main Category
  const mainCategory = AllCategories?.categories && AllCategories?.categories?.[0] as UpdateCategory
  return (
    <div className='w-full flex justify-between items-start h-[240px] mt-5 overflow-hidden  rounded-2xl border border-[#E4E5EE]'>
        {/*Main Product*/}
        <div className='flex flex-col h-[250px] justify-center items-center p-5 border border-[#E4E5EE]'>
            <Image  src={mainCategory?.image || "https://res.cloudinary.com/dghqvxueq/image/upload/v1756257568/product_9_io0fca.png"} alt={mainCategory?.title as string} width={200} height={200}/>
            {/*Product Title*/}
            <h3 className="text-[14px] text-[#202435] font-[600]" style={{lineHeight:'16.8px'}}>{mainCategory?.title as string}</h3>
            {/*Product Quantity*/}
            <span className="text-[12px] text-[#202435] font-[300]" style={{lineHeight:'18px',letterSpacing:'-0.1px'}}>{mainCategory?.products?.length} Items</span>
        </div>
        {/*Items Container*/}
        <div className="w-full flex justify-start items-start flex-wrap">
            {/*Items*/}
            {
                AllCategories?.categories && AllCategories?.categories?.slice(0,8)?.map((category:UpdateCategory)=>
                    <div key={category?.id} className="w-1/4 flex-1 h-1/2 flex justify-start items-center gap-2 p-5 border border-[#E4E5EE]">
                        <Image src={category?.image || "https://res.cloudinary.com/dghqvxueq/image/upload/v1756257566/product_10_lnu3vr.png"} alt={category?.title as string} width={80} height={50}/>
                        {/*Content*/}
                        <div className="flex flex-col justify-start items-start gap-1">
                            {/*Product Title*/}
                            <h3 className="text-[14px] text-[#202435] font-[600]" style={{lineHeight:'16.8px'}}>{category?.title as string}</h3>
                            {/*Product Quantity*/}
                            <span className="text-[12px] text-[#202435] font-[300]" style={{lineHeight:'18px',letterSpacing:'-0.1px'}}>{category?.products?.length} Items</span>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}
