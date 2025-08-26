import Link from "next/link";

export default function NavList() {
  return (
    <ul className="flex justify-between items-center gap-2">
        <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-4xl">
            <Link href='/about' className="cursor-pointer hover:text-fontcolor">About Us</Link>
        </li>
        <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-4xl">
            <Link href='/compare' className="cursor-pointer hover:text-fontcolor">Compare</Link>
        </li>
        <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-4xl">
            <Link href='/wishlist' className="cursor-pointer hover:text-fontcolor">Wishlist</Link>
        </li>
    </ul>
  )
}
