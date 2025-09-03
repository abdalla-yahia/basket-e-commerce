'use client'
import { UpdateBrand } from "@/Interfaces/BrandInterface";
import { RootState, useAppSelector } from "@/libs/store";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Brands_Carsoul_Container() {
    const { AllBrands } = useAppSelector((state: RootState) => state.brand)
    return (
        <div className="w-full my-4 py-1 ">
            {/* Left To Right */}
            <Marquee autoFill={true} pauseOnHover >
                {AllBrands?.brands?.map((brand: UpdateBrand) => (
                    <Link key={brand?.id} href={`/products/brands/${brand?.id}`}>
                        <Image loading="lazy" src={brand?.image as string} alt={brand?.title as string} width={100} height={60} className="object-contain" />
                    </Link>
                ))}
            </Marquee>
        </div>
    )
}
