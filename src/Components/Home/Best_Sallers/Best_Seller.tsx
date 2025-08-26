import Product_Card from "@/Components/Products/Product_Card";
import Section_Title from "@/Components/Section_Title/Section_Title";

export default function Best_Seller() {
  return (
    <section className="w-[75%]">
        {/*Section Title*/}
        <Section_Title title={'Best Sellers'} description={'Do not miss the current offers until the end of March.'} href={'/'}/>
        {/*Products*/}
        <div className="w-full  flex justify-between gap-0 items-start mt-3">
            <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={'22%'} title={'All Natural Italian-Style Chicken Meatballs'} rating={''} oldprice={'$9.35'} price={'$7.25'}/>
            <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233984/product_4_t9jl7t.png'} offer={'19%'} title={'Field Roast Chao Cheese Creamy Original'} rating={''} oldprice={'$24.00'} price={'$19.50'}/>
            <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233987/product_3_tnqxie.png'} offer={'23%'} title={"Angie's Boomchickapop Sweet & Salty Kettle Corn"} rating={''} oldprice={'$4.29'} price={'$3.29'}/>
            <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233981/product_1_hub2w5.png'} offer={''} title={'Blue Diamond Almonds Lightly Salted'} rating={''} oldprice={''} price={'$11.68'}/>
        </div>
    </section>
  )
}
