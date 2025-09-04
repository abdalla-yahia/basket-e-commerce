import { RootState, useAppSelector } from "@/libs/store";
import Link from "next/link";

export default function NavList() {
  const {productsInWish} = useAppSelector((state:RootState)=>state.wishlist)
  const count = productsInWish?.wishlist?.products?.length
  return (
    <ul className="w-[90%] md:w-fit flex justify-between items-center gap-2">
        <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-4xl">
            <Link href='/about' className="cursor-pointer hover:text-fontcolor">About Us</Link>
        </li>
        <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-4xl">
            <Link href='/compare' className="cursor-pointer hover:text-fontcolor">Compare</Link>
        </li>
        <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-4xl relative">
            <Link href='/wishlist' className="cursor-pointer hover:text-fontcolor">Wishlist</Link>
            <span className=" absolute top-0 right-0 bg-orange-500 rounded-full p-1 text-white w-4 h-4 flex justify-center items-center">{count}</span>
        </li>
    </ul>
  )
}
