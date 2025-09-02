'use client'
import { RootState, useAppSelector } from "@/libs/store";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  const {AllCarts} = useAppSelector((state:RootState)=>state.cart)
  const {productsCount,totalPrice} = useAppSelector((state:RootState)=>state.cart)

  return (
    <div className="w-full flex flex-col justify-start items-start">
        {/*Map Products*/}
        {
          AllCarts?.carts && AllCarts?.carts?.items.map((product)=>
          <div key={product?.product?.id} className="w-full flex justify-between items-center my-[8px]">
              <div className="flex justify-between items-center gap-2 rounded">
                 <Link href={`/products/${product?.product?.slug}?quantity=${product?.quantity}`}>
                    <div className="border border-[#D6D6D6] relative">
                        <Image src={product?.product?.image || 'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} alt="product" width={50} height={50}/>
                        <span className=" absolute -top-1 -right-1 p-1 w-5 h-5 rounded-full bg-[#666666] text-white flex justify-center items-center">{product?.quantity}</span>
                    </div> 
                 </Link>
                  <h3 className="text-[14px] font-[400]">{product?.product?.title}</h3>
              </div>
              <span className="text-[14px] font-[400] text-black">${(+(product?.product?.price as number) * +(product?.quantity)).toFixed(2)}</span>
          </div>
          )
        }
        {/*Subtotal*/}
        <div className="w-full flex justify-between items-center mt-7">
          <h3 className="text-[14px] font-[400]">Subtotal <span className="text-xl font-bold text-primary">{productsCount}</span> items</h3>
          <span className="text-[14px] font-[400] text-black">${totalPrice.toFixed(2)}</span>
        </div>
        {/*Shipping*/}
        <div className="w-full flex justify-between items-center mt-5">
          <h3 className="text-[14px] font-[400]">Shipping</h3>
          <span className="text-[14px] font-[600] text-black uppercase">free</span>
        </div>
        {/*Total*/}
        <div className="w-full flex justify-between items-center mt-5">
          <h3 className="text-[19px] font-[700] text-black">Total</h3>
          <div>
            <span className="text-[#666666] text-[12px] font-[400] uppercase mx-1">usd</span>
          <span className="text-[19px] font-[700] text-black uppercase">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
        <span className="text-[#666666] text-[14px] font-[400] opacity-70">Including $2.46 in taxes</span>
    </div>
  )
}
