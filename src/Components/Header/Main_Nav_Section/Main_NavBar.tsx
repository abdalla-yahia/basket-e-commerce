import Link from "next/link";
import { UpdateCategory } from "@/Interfaces/CategoryInterface";
import Image from "next/image";
import { RootState, useAppSelector } from "@/libs/store";

export default function Main_NavBar() {
    const { AllCategories } = useAppSelector((state: RootState) => state.category)

    return (
        <div>
            <ul className="flex justify-center items-center gap-4">
                <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-full">
                    <Link className=" capitalize" href="/">Home</Link>
                </li>
                <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-full">
                    <Link className=" capitalize" href="/products/shop">Shop</Link>
                </li>
                {
                    AllCategories?.categories?.slice(0, 3)?.map((category: UpdateCategory) =>
                        <li key={category?.id} className="flex justify-center items-center gap-2 hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-full">
                            {/*Icon*/}
                            <Image src={category?.image as string || ''} alt={category?.title as string} width={20} height={20} style={{ filter: 'grayscale(1)' }} />
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
