'use client'
import Link from "next/link";
import * as icon from '@/Utils/Icons/Icons';
import { useAppDispatch } from "@/libs/store";
import { createOrder } from "@/Feature/Actions/OrdersActions";
import { redirect } from "next/navigation";

export default function Payment_Form() {
    const dispatch = useAppDispatch()
    const CheckOutHandler = () => {
        dispatch(createOrder('ssd54'))
        redirect('/')
    }
    return (

        <div className="w-full">
            <div className="w-full px-[15px] flex flex-col justify-between items-start ">
                {/*Contact*/}
                <div className="w-full flex justify-between items-center ">
                    <h2 className="text-black my-[10px] text-[21px] font-[700]" style={{ fontFamily: 'Roboto', lineHeight: '24px' }}>Contact</h2>
                    <Link href={'/login'} className=" underline text-blue-700 cursor-pointer">Login</Link>
                </div>
                <input className="w-full mt-3 p-3 rounded border border-[#1773B0] text-[#707070]" type="email" name="" id="" placeholder="Email or mobile phone number" />
                <div className="flex justify-center items-center gap-2 mt-3">
                    <input className=" appearance-none bg-white rounded border border-[#cacaca] p-2 checked:bg-primary " type="checkbox" name="" id="" />
                    <label className="text-[13.89px] text-black font-[400]" htmlFor="">Email me with news and offers</label>
                </div>
                {/*Delivery*/}
                <h2 className="text-black mt-[35px] text-[21px] font-[700] " style={{ fontFamily: 'Roboto', lineHeight: '24px' }}>Delivery</h2>
                {/*Method Data*/}
                <form className="w-full flex flex-col justify-start items-start gap-2" action="">
                    <input className="w-full mt-3 p-3 rounded border border-[#DEDEDE] text-[#707070]" type="text" name="" id="" placeholder="Country/Region" />
                    <div className="w-full flex justify-between items-center gap-5">
                        <input className="w-[50%] mt-3 p-3 mr-1 rounded border border-[#DEDEDE] text-[#707070]" type="text" name="" id="" placeholder="First name (optional)" />
                        <input className="w-[50%] mt-3 p-3  rounded border border-[#DEDEDE] text-[#707070]" type="text" name="" id="" placeholder="Last name" />
                    </div>
                    <input className="w-full mt-3 p-3 rounded border border-[#DEDEDE] text-[#707070]" type="text" name="" id="" placeholder="Address" />
                    <input className="w-full mt-3 p-3 rounded border border-[#DEDEDE] text-[#707070]" type="text" name="" id="" placeholder="Apartment, suite, etc. (optional)" />
                    <div className="w-full flex justify-between items-center gap-5">
                        <input className="w-[50%] mt-3 p-3 mr-1 rounded border border-[#DEDEDE] text-[#707070]" type="text" name="" id="" placeholder="Postal code (optional)" />
                        <input className="w-[50%] mt-3 p-3  rounded border border-[#DEDEDE] text-[#707070]" type="text" name="" id="" placeholder="City" />
                    </div>
                    <div className="flex justify-center items-center gap-2 mt-3">
                        <input className=" appearance-none bg-white rounded border border-[#cacaca] p-2 checked:bg-primary " type="checkbox" name="" id="" />
                        <label className="text-[13.89px] text-black font-[400]" htmlFor="">Save this information for next time</label>
                    </div>
                </form>
                {/*Shipping method*/}
                <h2 className="text-black mt-[35px] text-[16px] font-[700]" style={{ fontFamily: 'Roboto', lineHeight: '19.2px' }}>Shipping method</h2>
                <div className="w-full flex justify-between mt-3 items-center p-3 bg-[#F0F5FF] rounded border border-[#1773B0] text-blck ">
                    <span className="text-[14px] text-black font-[400]">Standard</span>
                    <span className="text-[14px] text-black font-[700] uppercase">free</span>
                </div>
                {/*Payment*/}
                <h2 className="text-black text-[21px] mt-[35px] font-[700]" style={{ fontFamily: 'Roboto', lineHeight: '25.2px' }}>Payment</h2>
                <span className="text-[#707070]   text-[14px] font-[400]" style={{ fontFamily: 'Roboto', lineHeight: '25.2px' }}>All transactions are secure and encrypted.</span>
                <div className="w-full rounded my-[30px] flex flex-col justify-center items-center bg-[#F5F5F5] p-9">
                    <icon.CiCreditCardOff className="text-[48px] text-[#B3B3B3]" />

                    <span className="text-[#707070] text-[14px] font-[400]">This store can’t accept payments right now.</span>
                </div>
                <button onClick={() => CheckOutHandler()} className="text-[19px] cursor-pointer font-[700] w-full p-2 rounded bg-[#F5F5F5] border border-[#DEDEDE] hover:bg-primary hover:text-white" style={{ fontFamily: 'Roboto' }}>Pay now</button>
            </div>
        </div>
    )
}
