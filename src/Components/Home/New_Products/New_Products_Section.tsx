'use client'
import Product_Card from "@/Components/Products/Product_Card";
import Section_Title from "@/Components/Section_Title/Section_Title";
import Link from "next/link";

export default function New_Products_Section() {
  return (
    <section className="w-[75%]">
        {/*Free Advertising Code*/}
        <div className="rounded-lg px-20 py-6 my-3 flex justify-center items-center gap-2 bg-[#FFEEF2]">
            {/*Link To Purchase*/}
            <p className="text-[#ED174A] text-[16px] font-[400]" style={{lineHeight:'24px',letterSpacing:'-0.1px'}}>Super discount for your 
                <Link className="mx-2 font-bold underline" href={'/'} >first purchase.</Link>
            </p>
            {/*Code*/}
            <p className="border-2 border-dotted border-[#FF6048] text-[#FF6048] font-extrabold rounded-2xl px-4 py-2">FREE25BAC</p>
            {/*How To Use*/}
            <span className="text-[12px] text-[#9B9BB4] font-[400]">Use discount code in checkout!</span>
        </div>
        {/*Section Title*/}
        <Section_Title title={'New Products'} description={'New products with updated stocks.'} href={'/'}/>
        {/*Products*/}
        <div className="w-full  flex justify-between flex-wrap gap-0 items-start mt-3">
            <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={'22%'} title={'All Natural Italian-Style Chicken Meatballs'} rating={''} oldprice={'$9.35'} price={'$7.25'} />
            <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233987/product_3_tnqxie.png'} offer={'23%'} title={"Angie's Boomchickapop Sweet & Salty Kettle Corn"} rating={''} oldprice={'$4.29'} price={'$3.29'} />
            <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233984/product_4_t9jl7t.png'} offer={'19%'} title={'Field Roast Chao Cheese Creamy Original'} rating={''} oldprice={'$24.00'} price={'$19.50'} />
            <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756246625/product_7_cqn12f.png'} offer={''} title={'Blue Diamond Almonds Lightly Salted'} rating={''} oldprice={''} price={'$11.68'} />
            <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233981/product_1_hub2w5.png'} offer={''} title={'Blue Diamond Almonds Lightly Salted'} rating={''} oldprice={''} price={'$11.68'} />
            <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756246624/product_5_xrazt4.png'} offer={'23%'} title={"Angie's Boomchickapop Sweet & Salty Kettle Corn"} rating={''} oldprice={'$4.29'} price={'$3.29'} />
            <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756246623/product_6_po8mfe.png'} offer={'19%'} title={'Field Roast Chao Cheese Creamy Original'} rating={''} oldprice={'$24.00'} price={'$19.50'} />
            <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756239910/Home-1-Hot-2_tv7gub.png'} offer={'22%'} title={'All Natural Italian-Style Chicken Meatballs'} rating={''} oldprice={'$9.35'} price={'$7.25'} />
        </div>
    </section>
  )
}
