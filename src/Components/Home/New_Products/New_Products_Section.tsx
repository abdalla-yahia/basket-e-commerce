'use client'
import Product_Card from "@/Components/Products/Product_Card";
import Section_Title from "@/Components/Section_Title/Section_Title";
import { UpdateProduct } from "@/Interfaces/ProductInterface";
import { RootState, useAppSelector } from "@/libs/store";
import Link from "next/link";

export default function New_Products_Section() {
  const { AllProducts } = useAppSelector((state: RootState) => state.product)

  return (
    <section className="w-[75%]">
      {/*Free Advertising Code*/}
      <div className="rounded-lg px-20 py-6 my-3 flex justify-center items-center gap-2 bg-[#FFEEF2]">
        {/*Link To Purchase*/}
        <p className="text-[#ED174A] text-[16px] font-[400]" style={{ lineHeight: '24px', letterSpacing: '-0.1px' }}>Super discount for your
          <Link className="mx-2 font-bold underline" href={'/'} >first purchase.</Link>
        </p>
        {/*Code*/}
        <p className="border-2 border-dotted border-[#FF6048] text-[#FF6048] font-extrabold rounded-2xl px-4 py-2">FREE25BAC</p>
        {/*How To Use*/}
        <span className="text-[12px] text-[#9B9BB4] font-[400]">Use discount code in checkout!</span>
      </div>
      {/*Section Title*/}
      <Section_Title title={'New Products'} description={'New products with updated stocks.'} href={'/products/shop'} />
      {/*Products*/}
      <div className="w-full  flex justify-between flex-wrap gap-0 items-start mt-3">
        {
          AllProducts?.FullyProducts && AllProducts?.FullyProducts?.slice(0, 8)?.map((product: UpdateProduct) =>
            <Product_Card slug={product?.slug as string} key={product?.id} img={product?.image || 'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={product?.offer as string} title={product?.title as string} rating={product?.rating || '4.5'} oldprice={product?.oldPrice as unknown as string} price={product?.price as unknown as string} quantity={product?.quantity as number} />
          )
        }
      </div>
    </section>
  )
}
