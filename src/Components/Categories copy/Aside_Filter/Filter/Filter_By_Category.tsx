'use client'
import { useSelector } from "react-redux";
import Filter_Title from "./Filter_Title";
import { RootState, useAppDispatch } from "@/libs/store";
import { useEffect } from "react";
import { getAllCategories } from "@/Feature/Actions/CategoriesActions";
import { UpdateCategory } from "@/Interfaces/CategoryInterface";

export default function Filter_By_Category() {
  const {AllCategories} = useSelector((state:RootState)=>state.category)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getAllCategories())
  },[])

  return (
    <div className="flex flex-col justify-between items-start">
        {/*Filter Title*/}
        <Filter_Title title="Product Categories" />
        {/*Category Filter*/}
        <ul className="flex flex-col justify-start items-start gap-2 ">
          {
            AllCategories?.categories?.map((category:UpdateCategory)=>
              <li key={category?.id} className="flex justify-start items-start gap-4">
                <input className=" appearance-none bg-white border border-[#D9D9E9]  p-2 hover:bg-primary/50 checked:bg-primary " type="checkbox" name={category?.title} id={category?.id} />
                <label className="text-[#71778E] text-[14px] font-[400]" htmlFor={category?.id}>{category?.title}</label>
              </li>
            )
          }
        </ul>
    </div>
  )
}
