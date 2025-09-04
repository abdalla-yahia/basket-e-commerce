'use client'
import { UpdateCategory } from "@/Interfaces/CategoryInterface";
import { RootState, useAppSelector } from "@/libs/store";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Categories_List() {
    const { AllCategories } = useAppSelector((state: RootState) => state.category)
    const [isToggle,setIsToggle] = useState(false)
    return (
        <div className=" flex flex-col  w-full md:w-[80%] text-[#3E445A] font-[400] text-sm  justify-start md:justify-between items-start gap-5 border border-[#E4E5EE] rounded-b-[7px]">
            {/*List Of Categories*/}
            <ul className="overflow-x-auto scrollbar-none flex-1 flex flex-row md:flex-col md:w-full px-6 py-4 justify-start md:justify-between items-center md:items-start gap-5 md:pb-8 border-b border-[#D9D9E9]">
                {
                    AllCategories?.categories?.slice(0,isToggle ? AllCategories?.categories?.length : 5)?.map((category: UpdateCategory) =>
                        <li key={category?.id} className="flex-shrink-0 md:w-full  flex justify-center md:justify-between items-center gap-3 hover:text-primary group">
                            <Link href={`/products/categories/${category?.id}`} className="w-full flex justify-start gap-4 items-start">
                                <Image title={category?.title as string} src={category?.image as string || ''} alt={category?.title as string} width={20} height={20} className="md:grayscale-100 group-hover:grayscale-0 duration-200" />
                                <span className="hidden md:block">{category?.title}</span>
                            </Link>
                        </li>
                    )
                }

                <li className=" cursor-pointer text-lg text-primary font-bold" onClick={()=>setIsToggle(!isToggle)}>{isToggle?'less..':'more...'}</li>
            </ul>
            {/*List Of Filters*/}
            <ul className="hidden md:flex flex-col w-full px-6 py-4 justify-between items-start gap-5 ">
                <li>
                    <Link href="/products/shop">Value of the Day</Link>
                </li>
                <li>
                    <Link href="/products/shop">Top 100 Offers</Link>
                </li>
                <li>
                    <Link href="/products/shop">New Arrivals</Link>
                </li>
            </ul>
        </div>
    )
}
