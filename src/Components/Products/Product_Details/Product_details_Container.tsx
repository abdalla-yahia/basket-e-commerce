'use client'
import * as icon from '@/Utils/Icons/Icons';
import Product_Details_Section from "./Product_Details_Section"
import Related_Products from "./Related_Products"
import Link from "next/link"
import { RootState, useAppDispatch, useAppSelector } from '@/libs/store';
import { useEffect } from 'react';
import { getProductBySlug } from '@/Feature/Actions/ProductsActions';
import { UpdateProduct } from '@/Interfaces/ProductInterface';

export default function Product_details_Container({ slug }: { slug: string }) {
    const { product } = useAppSelector((state: RootState) => state.product)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getProductBySlug(slug))
    }, [slug, dispatch])

    return (
        <div className="w-full">
            {/*OverLay*/}
            <div className="w-full bg-black/50 fixed top-0 left-0 h-full z-40 flex justify-center items-center">
            </div>
            {/*Product Details Container*/}
            <div className="w-[70%] flex flex-col justify-start items-start h-fit p-8 bg-white absolute top-[70%] left-[50%] -translate-[50%] rounded opacity-100 z-50">
                {/*Close Button*/}
                <Link href="/products/shop">
                    <icon.IoClose className="text-[20px] font-bold absolute top-5 right-5 cursor-pointer duration-150 hover:scale-125" />
                </Link>
                {/*Product Details*/}
                <Product_Details_Section />
                {/*Related products*/}
                <Related_Products product={product?.product as UpdateProduct} />
            </div>
        </div>
    )
}
