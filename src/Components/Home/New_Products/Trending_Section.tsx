'use client'
import Link from "next/link";
import Image from "next/image";
import { RootState, useAppSelector } from "@/libs/store";
import { UpdateProduct } from "@/Interfaces/ProductInterface";
import * as icon from '@/Utils/Icons/Icons'

export default function Trending_Section() {
    const { AllProducts } = useAppSelector((state: RootState) => state.product)

    return (
        <aside className="hidden md:flex w-[20%] flex-col  justify-start items-start">
            {/*Download App*/}
            <ul className="flex mb-8 max-w-full  flex-col justify-between items-start gap-3 border border-[#E4E5EE] rounded-lg">
                <li className="flex gap-2 justify-center items-center  border-b border-b-[#E4E5EE] w-full p-3">
                    {/*Icon*/}
                    <icon.GrDocumentDownload className="text2xl" />
                    <Link className="text-[#202435] font-[400] text-[12px] cursor-pointer hover:text-primary duration-100" href={'/'}>Download the Bacola App to your Phone.</Link>
                </li>
                <li className="flex gap-2 justify-center items-center  border-b border-b-[#E4E5EE] w-full p-3">
                    {/*Icon*/}
                    <icon.GrDocumentDownload className="text2xl" />
                    <Link className="text-[#202435] font-[400] text-[12px] cursor-pointer hover:text-primary duration-100" href={'/'}>Download the Bacola App to your Phone.</Link>
                </li>
                <li className="flex gap-2  justify-center items-center    w-full p-3">
                    {/*Icon*/}
                    <icon.GrDocumentDownload className="text2xl" />
                    <Link className="text-[#202435] font-[400] text-[12px] cursor-pointer hover:text-primary duration-100" href={'/'}>Download the Bacola App to your Phone.</Link>
                </li>
            </ul>
            {/*Trending Section*/}
            <h2 className="max-w-full uppercase font-[600] text-[15px] text-[#202435]">Trending Search</h2>
            <div className="w-full  flex mt-2 flex-col justify-between items-start gap-3 border border-[#E4E5EE] rounded-lg">
                {/*Items*/}
                {
                    AllProducts?.products && AllProducts?.products?.slice(0, 6)?.map((product: UpdateProduct) =>

                        <Link key={product?.id} href={`/products/${product?.slug}`}>
                            <div className="flex justify-start items-center ">
                                <Image src={product?.image || 'https://res.cloudinary.com/dghqvxueq/image/upload/v1756252578/product_8_ulqvqt.png'} alt={product?.title as string} width={50} height={50} />
                                {/*Content*/}
                                <div className="flex flex-col justify-start gap-2 items-start py-4 ">
                                    <h5 className="font-[500] text-[13px]" style={{ lineHeight: '18.2px' }}>{product?.title as string}</h5>
                                    {/*Price*/}
                                    <div className="flex justify-between items-center gap-2">
                                        {/*Old Price*/}
                                        <p className="font-[600] text-[#C2C2D3] text-[15.3px] line-through" style={{ lineHeight: '22.95px', letterSpacing: '-0.1px', fontFamily: 'Dosis' }}>${product?.oldPrice as unknown as string}</p>
                                        {/*Price*/}
                                        <p className="font-[600] text-[#D51243] text-[18px]" style={{ lineHeight: '27px', letterSpacing: '-0.1px', fontFamily: 'Dosis' }}>${product?.price as unknown as string}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    )
                }
            </div>
        </aside>
    )
}
