import Link from "next/link";
import { UpdateCategory } from "@/Interfaces/CategoryInterface";
import Image from "next/image";
import { RootState, useAppSelector } from "@/libs/store";

export default function Main_NavBar() {
    const { AllCategories } = useAppSelector((state: RootState) => state.category)

    return (
        <div className="shadow md:shadow-none mt-4 flex w-full  justify-center md:justify-end ">
            <ul className="flex w-full justify-between md:justify-end items-center gap-4">
                <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-full">
                    <Link className=" capitalize" href="/">Home</Link>
                </li>
                <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-full">
                    <Link className=" capitalize" href="/products/shop">Shop</Link>
                </li>
                {
                    AllCategories?.categories?.slice(0, 3)?.map((category: UpdateCategory) =>
                        <li key={category?.id} className="hidden sm:flex group justify-center  items-center gap-2 hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-full text-center">
                            {/*Icon*/}
                            <Image src={category?.image as string || ''} alt={category?.title as string} width={20} height={20} className="hidden md:block grayscale-100 group-hover:grayscale-0 duration-200" />
                            <Link className=" capitalize line-clamp-1 md:line-clamp-2" href={`/products/categories/${category?.id}`}>{category?.title}</Link>
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
