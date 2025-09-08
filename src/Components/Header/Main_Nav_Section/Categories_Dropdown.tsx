'use client'
import { UpdateCategory } from "@/Interfaces/CategoryInterface"
import { RootState, useAppSelector } from "@/libs/store";
import Categories_DropDown_Component from "@/Utils/Categories_DropDown_Component";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import * as icon from '@/Utils/Icons/Icons'
export default function Categories_Dropdown() {
  const {AllCategories} = useAppSelector((state:RootState)=>state.category)
  const [isToggle,setIsToggle] = useState(false)
  const [itemSelected,setItemSelected] = useState('All Categories')
  const router = useRouter()
  const dropDownRef = useRef<HTMLDivElement>(null);

  //Redirect To Link Of Category
  const ChangeCategoryHandeler =(id:string,title:string)=>{
    setItemSelected(title)
    router.push(`/products/categories/${id}`)
  }
  //Get Total Count Of Products On All Categories
  const TotalProducts = AllCategories?.categories?.reduce((acc, rec:UpdateCategory) => {
  return acc + (rec?.products?.length as number || 0);
}, 0);

  //Close DropDown If User Click On Body
  useEffect(()=>{
    function ClickOutSideDropDownHandler(e: MouseEvent) {
      if (!dropDownRef?.current?.contains(e.target as Node)) {
        setIsToggle(false);
      }
    }
    window.addEventListener("click", ClickOutSideDropDownHandler);
    return () => window.removeEventListener("click", ClickOutSideDropDownHandler);
  },[])
  return (
    <div ref={dropDownRef} onClick={()=>{setIsToggle(!isToggle)}} className="hidden md:flex justify-between items-center px-[15px] py-[10px] gap-2 rounded-[50px] bg-[#35AFA0] text-white relative">
      {/*List Icon*/}
      <icon.BsList className="text-3xl"/>
      {/*Item Title*/}
       <p className=" uppercase w-full text-center whitespace-nowrap text-[15px] font-[600]" style={{fontFamily:'Dosis'}}>{itemSelected}</p>
       {/*Arrow Down Icon*/}
       <icon.MdKeyboardArrowDown className="text-3xl"/>
      {/*DropDown List*/}
      <Categories_DropDown_Component  isToggle={isToggle} setIsToggle={setIsToggle} ChangeCategoryHandeler={ChangeCategoryHandeler} items={AllCategories?.categories as UpdateCategory[]} setItemSelected={setItemSelected}/>
      {/*Products Count*/}
      <p className="bg-[#EDEEF5] text-[#71778E] rounded-[18px] text-[8px] px-1 absolute font-semibold top-10/12 left-9" style={{lineHeight:'15px',fontFamily:'Dosis',letterSpacing:'0px'}}>
        TOTAL {TotalProducts} PRODUCTS
      </p>
    </div>
  )
}
