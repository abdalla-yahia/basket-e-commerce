'use client'
import { UpdateCategory } from "@/Interfaces/CategoryInterface";
import { RootState, useAppSelector } from "@/libs/store";
import Image from "next/image";
import Link from "next/link";

export default function Categories_List() {
    const { AllCategories } = useAppSelector((state: RootState) => state.category)

    return (
        <div className="flex flex-col w-full md:w-[80%] text-[#3E445A] font-[400] text-sm justify-between items-center md:items-start gap-5 border border-[#E4E5EE] rounded-b-[7px]">
            {/*List Of Categories*/}
            <ul className="flex flex-row md:flex-col w-full px-6 py-4 justify-between items-center md:items-start gap-5 md:pb-8 border-b border-[#D9D9E9]">
                {
                    AllCategories?.categories?.map((category: UpdateCategory) =>
                        <li key={category?.id} className="w-full  flex justify-center md:justify-between items-center gap-3 hover:text-primary">
                            <Link href={`/products/categories/${category?.id}`} className="w-full flex justify-start gap-4 items-start">
                                <Image title={category?.title as string} src={category?.image as string || ''} alt={category?.title as string} width={20} height={20} className=" md:grayscale-100" />
                                <span className="hidden md:block">{category?.title}</span>
                            </Link>
                        </li>
                    )
                }
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
