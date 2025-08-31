'use client'
import Link from "next/link";
import useSvgColor from "@/Utils/Icons/SVG-Color";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "@/libs/store";
import { useSelector } from "react-redux";
import { getAllCategories } from "@/Feature/Actions/CategoriesActions";
import { UpdateCategory } from "@/Interfaces/CategoryInterface";
import Image from "next/image";

export default function Main_NavBar() {
    const {AllCategories} = useSelector((state:RootState)=>state.category)
        const dispatch = useAppDispatch()
        useEffect(()=>{
            dispatch(getAllCategories())
        },[])

    const [href, setHref] = useState('')
    if (href) {
        window.location.href = href
    }
    return (
        <div>
            <ul className="flex justify-center items-center gap-4">
                <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] cursor-pointer p-2 rounded-full">
                    <select name="" id="" onChange={(e) => setHref(e.target.value)}>
                        <option disabled value="" selected>Change HomePage</option>
                        <option className=" capitalize" value="/">Home</option>
                        <option className=" capitalize" value="/about">Home-2</option>
                        <option className=" capitalize" value="/compare">Home-3</option>
                        <option className=" capitalize" value="/wishlist">Home-4</option>
                        <option className=" capitalize" value="/">Home-5</option>
                    </select>
                </li>
                <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-full">
                    <Link className=" capitalize" href="/products">Shop</Link>
                </li>
                {
                AllCategories?.categories?.slice(0,3)?.map((category:UpdateCategory)=>
                <li key={category?.id} className="flex justify-center items-center gap-2 hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-full">
                    {/*Icon*/}
                    <Image src={category?.image as string || ''} alt={category?.title as string} width={20} height={20} style={{filter:'grayscale(1)'}}/>
                    <Link className=" capitalize" href={`/categories/${category?.id}`}>{category?.title}</Link>
                </li>
                )
                }
                <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-full">
                    <Link className=" capitalize" href="/blog">Blog</Link>
                </li>
                <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-full">
                    <Link className=" capitalize" href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}
