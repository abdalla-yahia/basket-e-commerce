// 'use client'
import Cart from "./Cart";
import Payment_Form from "./Payment_Form";

export default function Checkout_Container() {

  return (
    <div className="w-[90%] flex flex-col-reverse md:flex-row justify-between items-start gap-5">
        {/*Method Pay Information*/}
        <div className="w-full md:w-[50%] flex flex-col justify-between items-start border-r border-r-[#DEDEDE]">
           <Payment_Form />
        </div>
        {/*Porducts In Cart Information*/}
        <div className="w-full md:w-[50%] flex flex-col justify-between items-start">
            <Cart />
        </div>
    </div>
  )
}
