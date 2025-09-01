'use client'
import { getAllCart } from "@/Feature/Actions/CartsActions";
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import Image from "next/image";
import { useEffect } from "react";

export default function Cart() {
  const {AllCarts} = useAppSelector((state:RootState)=>state.cart)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getAllCart())
  },[])
  return (
    <div className="w-full flex flex-col justify-start items-start">
        {/*Map Products*/}
        {/*Product One*/}
        <div className="w-full flex justify-between items-center my-[8px]">
            <div className="flex justify-between items-center gap-2 rounded">
                <div className="border border-[#D6D6D6] relative">
                    <Image src={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} alt="product" width={50} height={50}/>
                    <span className=" absolute -top-1 -right-1 p-1 w-5 h-5 rounded-full bg-[#666666] text-white flex justify-center items-center">1</span>
                </div>
                <h3 className="text-[14px] font-[400]">All Natural Italian-Style Chicken Meatballs</h3>
            </div>
            <span className="text-[14px] font-[400] text-black">$7.25</span>
        </div>
        {/*Product Two*/}
        <div className="w-full flex justify-between items-center my-[8px]">
            <div className="flex justify-between items-center gap-2 rounded">
                <div className="border border-[#D6D6D6] relative">
                    <Image src={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756359175/cart_2_lmdxxw.png'} alt="product" width={50} height={50}/>
                     <span className=" absolute -top-1 -right-1 p-1 w-5 h-5 rounded-full bg-[#666666] text-white flex justify-center items-center">1</span>

                </div>
                <h3 className="text-[14px] font-[400]">Coca-Cola – 2 L Bottle</h3>
            </div>
            <span className="text-[14px] font-[400] text-black">$3.85</span>
        </div>
        {/*Product Three*/}
        <div className="w-full flex justify-between items-center my-[8px]">
            <div className="flex justify-between items-center gap-2 rounded">
                <div className="border border-[#D6D6D6] relative">
                    <Image src={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756359175/cart_1_hmo3ur.png'} alt="product" width={50} height={50}/>
                     <span className=" absolute -top-1 -right-1 p-1 w-5 h-5 rounded-full bg-[#666666] text-white flex justify-center items-center">1</span>

                </div>
                <h3 className="text-[14px] font-[400]">Fairlife Lactose-Free 2% Milk</h3>
            </div>
            <span className="text-[14px] font-[400] text-black">$3.69</span>
        </div>
        {/*Subtotal*/}
        <div className="w-full flex justify-between items-center mt-7">
          <h3 className="text-[14px] font-[400]">Subtotal · 3 items</h3>
          <span className="text-[14px] font-[400] text-black">$14.79</span>
        </div>
        {/*Shipping*/}
        <div className="w-full flex justify-between items-center mt-5">
          <h3 className="text-[14px] font-[400]">Shipping</h3>
          <span className="text-[14px] font-[400] text-black uppercase">free</span>
        </div>
        {/*Total*/}
        <div className="w-full flex justify-between items-center mt-5">
          <h3 className="text-[19px] font-[700] text-black">Total</h3>
          <div>
            <span className="text-[#666666] text-[12px] font-[400] uppercase mx-1">usd</span>
          <span className="text-[19px] font-[700] text-black uppercase">$14.79</span>
          </div>
        </div>
        <span className="text-[#666666] text-[14px] font-[400] opacity-70">Including $2.46 in taxes</span>
    </div>
  )
}
