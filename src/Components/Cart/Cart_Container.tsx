// 'use client'
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import Cart from "./Cart";
import Payment_Form from "./Payment_Form";
import { useEffect } from "react";
import { getAllCart } from "@/Feature/Actions/CartsActions";

export default function Checkout_Container() {
  // const {AllCarts} = useAppSelector((state:RootState)=>state.cart)
  // const dispatch = useAppDispatch()
  // useEffect(()=>{
    // dispatch(getAllCart())
  // },[])
  // console.log(AllCarts)
  return (
    <div className="w-[90%] flex justify-between items-start gap-5">
        {/*Method Pay Information*/}
        <div className="w-[50%] flex flex-col justify-between items-start border-r border-r-[#DEDEDE]">
           <Payment_Form />
        </div>
        {/*Porducts In Cart Information*/}
        <div className="w-[50%] flex flex-col justify-between items-start">
            <Cart />
        </div>
    </div>
  )
}
