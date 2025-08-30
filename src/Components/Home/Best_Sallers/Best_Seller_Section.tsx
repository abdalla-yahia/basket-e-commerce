'use client'
import Product_Card from "@/Components/Products/Product_Card";
import Section_Title from "@/Components/Section_Title/Section_Title";
import * as icon from '@/Utils/Icons/Icons';
import { useRef } from "react";

export default function Best_Seller_Section() {
  const ref = useRef<HTMLDivElement>(null)
  //Scroll Box Content To Right Handler
  const ArrowRightHandler = ()=>{
    ref?.current?.scrollBy({
      left:25,
      behavior:'smooth'
    })
  }
  //Scroll Box Content To Left Handler
  const ArrlowLeftHandler = ()=>{
    ref?.current?.scrollBy({
      left:-25,
      behavior:'smooth'
    })
  }
  return (
    <section className="w-[75%] ">
        {/*Section Title*/}
        <Section_Title title={'Best Sellers'} description={'Do not miss the current offers until the end of March.'} href={'/'}/>
        {/*Products*/}
        <div className="relative w-full">
          {/*Arrow Right Button*/}
          <div className="h-full w-[10%] flex justify-center items-center bg-transparent  absolute top-0 right-0 z-50">
            <icon.RiArrowRightSLine onClick={()=>ArrowRightHandler()} className="text-4xl hover:bg-primary hover:text-white hover:scale-125   w-[25px] h-[25px] duration-150 z-50 text-primary font-extrabold bg-white border border-primary  cursor-pointer rounded-full"/>
          </div>
          {/*Products Container*/}
              <div ref={ref} className="flex justify-between gap-0 items-start mt-3  overflow-x-scroll scrollbar-none">
                  <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={'22%'} title={'All Natural Italian-Style Chicken Meatballs'} rating={''} oldprice={'$9.35'} price={'$7.25'} iscounter/>
                  <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233984/product_4_t9jl7t.png'} offer={'19%'} title={'Field Roast Chao Cheese Creamy Original'} rating={''} oldprice={'$24.00'} price={'$19.50'} iscounter/>
                  <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233987/product_3_tnqxie.png'} offer={'23%'} title={"Angie's Boomchickapop Sweet & Salty Kettle Corn"} rating={''} oldprice={'$4.29'} price={'$3.29'} iscounter/>
                  <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233981/product_1_hub2w5.png'} offer={''} title={'Blue Diamond Almonds Lightly Salted'} rating={''} oldprice={''} price={'$11.68'} iscounter/>
                  <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233984/product_4_t9jl7t.png'} offer={'19%'} title={'Field Roast Chao Cheese Creamy Original'} rating={''} oldprice={'$24.00'} price={'$19.50'} iscounter/>
                  <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233987/product_3_tnqxie.png'} offer={'23%'} title={"Angie's Boomchickapop Sweet & Salty Kettle Corn"} rating={''} oldprice={'$4.29'} price={'$3.29'} iscounter/>
                  <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233981/product_1_hub2w5.png'} offer={''} title={'Blue Diamond Almonds Lightly Salted'} rating={''} oldprice={''} price={'$11.68'} iscounter/>
                  <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233984/product_4_t9jl7t.png'} offer={'19%'} title={'Field Roast Chao Cheese Creamy Original'} rating={''} oldprice={'$24.00'} price={'$19.50'} iscounter/>
                  <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233987/product_3_tnqxie.png'} offer={'23%'} title={"Angie's Boomchickapop Sweet & Salty Kettle Corn"} rating={''} oldprice={'$4.29'} price={'$3.29'} iscounter/>
                  <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233981/product_1_hub2w5.png'} offer={''} title={'Blue Diamond Almonds Lightly Salted'} rating={''} oldprice={''} price={'$11.68'} iscounter/>
              </div>
            {/*Arrow Left button*/}
          <div className="h-full w-[10%] flex justify-center items-center bg-transparent  absolute top-0 left-0 z-50">
            <icon.RiArrowLeftSLine onClick={()=>ArrlowLeftHandler()} className="text-4xl hover:bg-primary  hover:text-white hover:scale-125   w-[25px] h-[25px] duration-150 z-50 text-primary font-extrabold bg-white border border-primary  cursor-pointer rounded-full"/>
          </div>
        </div>
    </section>
  )
}
