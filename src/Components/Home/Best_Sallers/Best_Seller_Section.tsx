'use client'
import Product_Card from "@/Components/Products/Product_Card";
import Section_Title from "@/Components/Section_Title/Section_Title";
import { getAllProduct } from "@/Feature/Actions/ProductsActions";
import { UpdateProduct } from "@/Interfaces/ProductInterface";
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import * as icon from '@/Utils/Icons/Icons';
import { useEffect, useRef } from "react";

export default function Best_Seller_Section() {
  const { AllProducts } = useAppSelector((state: RootState) => state.product)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllProduct())
  }, [])
  const ref = useRef<HTMLDivElement>(null)
  //Scroll Box Content To Right Handler
  const ArrowRightHandler = () => {
    ref?.current?.scrollBy({
      left: 25,
      behavior: 'smooth'
    })
  }
  //Scroll Box Content To Left Handler
  const ArrlowLeftHandler = () => {
    ref?.current?.scrollBy({
      left: -25,
      behavior: 'smooth'
    })
  }
  console.log(AllProducts)
  return (
    <section className="w-[75%] ">
      {/*Section Title*/}
      <Section_Title title={'Best Sellers'} description={'Do not miss the current offers until the end of March.'} href={'/products'} />
      {/*Products*/}
      <div className="relative w-full ">
        {/*Arrow Right Button*/}
        <div className="h-full w-[10%] flex justify-center items-center bg-transparent  absolute top-0 right-0 z-50">
          <icon.RiArrowRightSLine onClick={() => ArrowRightHandler()} className="text-4xl hover:bg-primary hover:text-white hover:scale-125   w-[25px] h-[25px] duration-150 z-50 text-primary font-extrabold bg-white border border-primary  cursor-pointer rounded-full" />
        </div>
        {/*Products Container*/}
        <div ref={ref} className="flex justify-between gap-0 mt-3  overflow-x-scroll scrollbar-none">
          {
            AllProducts?.products && AllProducts?.products?.map((product: UpdateProduct) =>
              <Product_Card slug={product?.slug as string} key={product?.id} img={product?.image || 'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={product?.offer || '22%'} title={product?.title as string} rating={product?.rating || '4.5'} oldprice={product?.oldPrice as unknown as string} price={product?.price as unknown as string} quantity={product?.quantity as number} iscounter />
            )
          }

        </div>
        {/*Arrow Left button*/}
        <div className="h-full w-[10%] flex justify-center items-center bg-transparent  absolute top-0 left-0 z-50">
          <icon.RiArrowLeftSLine onClick={() => ArrlowLeftHandler()} className="text-4xl hover:bg-primary  hover:text-white hover:scale-125   w-[25px] h-[25px] duration-150 z-50 text-primary font-extrabold bg-white border border-primary  cursor-pointer rounded-full" />
        </div>
      </div>
    </section>
  )
}
