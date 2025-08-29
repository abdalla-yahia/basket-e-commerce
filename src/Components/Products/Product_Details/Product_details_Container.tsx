'use client'
import { getProductBySlug } from "@/Feature/Actions/ProductsActions"
import { RootState, useAppDispatch } from "@/libs/store"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import * as icon from '@/Utils/Icons/Icons';
import Product_Details_Section from "./Product_Details_Section"
import Related_Products from "./Related_Products"

export default function Product_details_Container({slug="Rice-0"}:{slug:string}) {
    const {product,error,loading} = useSelector((state:RootState)=>state.product)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(getProductBySlug(slug))
    },[])
    //Close Button Handller
    const CloseSectionHandller =()=>{
        window.history.back()
    }
  return (
    <div className="w-full">
        {/*OverLay*/}
        <div className="w-full bg-black/50  absolute top-8 left-0 h-full z-40 flex justify-center items-center">
        </div>
        {/*Product Details Container*/}
        <div className="w-[70%] flex flex-col justify-start items-start h-fit p-4 bg-white absolute top-[50%] left-[50%] -translate-[50%] rounded opacity-100 z-50">
            {/*Close Button*/}
            <icon.IoClose className="text-[20px] font-bold absolute top-5 right-5 cursor-pointer duration-150 hover:scale-125" onClick={()=>CloseSectionHandller()} />
            {/*Product Details*/}
            <Product_Details_Section />
            {/*Related products*/}
            <Related_Products />
        </div>
    </div>
  )
}
