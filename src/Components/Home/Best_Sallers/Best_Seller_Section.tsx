'use client'
import Product_Card from "@/Components/Products/Product_Card";
import Section_Title from "@/Components/Section_Title/Section_Title";
import { UpdateProduct } from "@/Interfaces/ProductInterface";
import { RootState, useAppSelector } from "@/libs/store";
import * as icon from '@/Utils/Icons/Icons';
import { useRef } from "react";

export default function Best_Seller_Section() {
  const { AllProducts } = useAppSelector((state: RootState) => state.product)

  const ref = useRef<HTMLDivElement>(null)
  //Scroll Box Content To Right Handler
  const ArrowRightHandler = () => {
    ref?.current?.scrollBy({
      left: -55,
      behavior: 'smooth'
    })
  }
  //Scroll Box Content To Left Handler
  const ArrlowLeftHandler = () => {
    ref?.current?.scrollBy({
      left: 55,
      behavior: 'smooth'
    })
  }
  return (
    <section className="w-full md:w-[75%] ">
      {/*Section Title*/}
      <Section_Title title={'Best Sellers'} description={'Do not miss the current offers until the end of March.'} href={'/products/shop'} />
      {/*Products*/}
      <div className="relative w-full h-fit">
        {/*Arrow Right Button*/}
        <div className=" w-fit flex justify-center items-center bg-transparent  absolute top-[50%] translate-y-[50%] right-0 z-50">
          <icon.RiArrowRightSLine onClick={() => ArrowRightHandler()} className="text-4xl hover:bg-primary hover:text-white hover:scale-125   w-[25px] h-[25px] duration-150 z-50 text-primary font-extrabold bg-white border border-primary  cursor-pointer rounded-full" />
        </div>
        {/*Products Container*/}
        <div ref={ref} className="flex justify-between gap-0  overflow-x-scroll scrollbar-none">
          {
            AllProducts?.FullyProducts && AllProducts?.FullyProducts?.map((product: UpdateProduct) =>
              <Product_Card slug={product?.slug as string} key={product?.id} img={product?.image || 'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={product?.offer as string} title={product?.title as string} rating={product?.rating || '4.5'} oldprice={product?.oldPrice as unknown as string} price={product?.price as unknown as string} quantity={product?.quantity as number} iscounter />
            )
          }

        </div>
        {/*Arrow Left button*/}
        <div className=" w-fit flex justify-center items-center bg-transparent  absolute top-[50%] translate-y-[50%] left-0 z-50">
          <icon.RiArrowLeftSLine onClick={() => ArrlowLeftHandler()} className="text-4xl hover:bg-primary  hover:text-white hover:scale-125   w-[25px] h-[25px] duration-150 z-50 text-primary font-extrabold bg-white border border-primary  cursor-pointer rounded-full" />
        </div>
      </div>
    </section>
  )
}
