'use client'
import { getAllCategories } from "@/Feature/Actions/CategoriesActions";
import { UpdateCategory } from "@/Interfaces/CategoryInterface";
import { RootState, useAppDispatch } from "@/libs/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Categories_List() {
    const {AllCategories} = useSelector((state:RootState)=>state.category)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(getAllCategories())
    },[])

  return (
    //@To-Do Map-Of Categories
    <div className="flex flex-col w-[80%] text-[#3E445A] font-[400] text-sm justify-between items-start gap-5 border border-[#E4E5EE] rounded-b-[7px]">
        {/*List Of Categories*/}
        <ul className="flex flex-col w-full px-6 py-4 justify-between items-start gap-5 pb-8 border-b border-[#D9D9E9]">
            {
                AllCategories?.categories?.map((category:UpdateCategory)=>
                <li key={category?.id} className="flex justify-center items-center gap-3 hover:text-primary">
                    <Image src={category?.image as string || ''} alt={category?.title as string} width={20} height={20} style={{filter:'grayscale(1)'}}/>
                    <Link href={`/categories/${category?.id}`}>{category?.title}</Link>
                </li>

                )
            }
        </ul>
        {/*List Of Filters*/}
        <ul className="flex flex-col w-full px-6 py-4 justify-between items-start gap-5 ">
            <li>
                <Link href="/products">Value of the Day</Link>
            </li>
            <li>
                <Link href="/products">Top 100 Offers</Link>
            </li>
            <li>
                <Link href="/products">New Arrivals</Link>
            </li>
        </ul>
    </div>
  )
}
