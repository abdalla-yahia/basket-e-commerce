import Product_Card from "@/Components/Products/Product_Card";
import Search_Section from "./Search/Search_Section";

export default function Products_Section() {
  return (
    <>
    {/*Search Bar*/}
    <Search_Section/>
    {/*Products*/}
    <div className="w-full  flex justify-between flex-wrap gap-0 items-start mt-3">
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={'22%'} title={'All Natural Italian-Style Chicken Meatballs'} iscounter={true} rating={''} oldprice={'$9.35'} price={'$7.25'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233987/product_3_tnqxie.png'} offer={'23%'} title={"Angie's Boomchickapop Sweet & Salty Kettle Corn"} iscounter={true} rating={''} oldprice={'$4.29'} price={'$3.29'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233984/product_4_t9jl7t.png'} offer={'19%'} title={'Field Roast Chao Cheese Creamy Original'} iscounter={true} rating={''} oldprice={'$24.00'} price={'$19.50'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756246625/product_7_cqn12f.png'} offer={''} title={'Blue Diamond Almonds Lightly Salted'} iscounter={true} rating={''} oldprice={''} price={'$11.68'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233981/product_1_hub2w5.png'} offer={''} title={'Blue Diamond Almonds Lightly Salted'} iscounter={true} rating={''} oldprice={''} price={'$11.68'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756246624/product_5_xrazt4.png'} offer={'23%'} title={"Angie's Boomchickapop Sweet & Salty Kettle Corn"} iscounter={true} rating={''} oldprice={'$4.29'} price={'$3.29'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756246623/product_6_po8mfe.png'} offer={'19%'} title={'Field Roast Chao Cheese Creamy Original'} iscounter={true} rating={''} oldprice={'$24.00'} price={'$19.50'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756239910/Home-1-Hot-2_tv7gub.png'} offer={'22%'} title={'All Natural Italian-Style Chicken Meatballs'} iscounter={true} rating={''} oldprice={'$9.35'} price={'$7.25'} />
    
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={'22%'} title={'All Natural Italian-Style Chicken Meatballs'} iscounter={true} rating={''} oldprice={'$9.35'} price={'$7.25'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233987/product_3_tnqxie.png'} offer={'23%'} title={"Angie's Boomchickapop Sweet & Salty Kettle Corn"} iscounter={true} rating={''} oldprice={'$4.29'} price={'$3.29'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233984/product_4_t9jl7t.png'} offer={'19%'} title={'Field Roast Chao Cheese Creamy Original'} iscounter={true} rating={''} oldprice={'$24.00'} price={'$19.50'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756246625/product_7_cqn12f.png'} offer={''} title={'Blue Diamond Almonds Lightly Salted'} iscounter={true} rating={''} oldprice={''} price={'$11.68'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233981/product_1_hub2w5.png'} offer={''} title={'Blue Diamond Almonds Lightly Salted'} iscounter={true} rating={''} oldprice={''} price={'$11.68'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756246624/product_5_xrazt4.png'} offer={'23%'} title={"Angie's Boomchickapop Sweet & Salty Kettle Corn"} iscounter={true} rating={''} oldprice={'$4.29'} price={'$3.29'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756246623/product_6_po8mfe.png'} offer={'19%'} title={'Field Roast Chao Cheese Creamy Original'} iscounter={true} rating={''} oldprice={'$24.00'} price={'$19.50'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756239910/Home-1-Hot-2_tv7gub.png'} offer={'22%'} title={'All Natural Italian-Style Chicken Meatballs'} iscounter={true} rating={''} oldprice={'$9.35'} price={'$7.25'} />
    
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={'22%'} title={'All Natural Italian-Style Chicken Meatballs'} iscounter={true} rating={''} oldprice={'$9.35'} price={'$7.25'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233987/product_3_tnqxie.png'} offer={'23%'} title={"Angie's Boomchickapop Sweet & Salty Kettle Corn"} iscounter={true} rating={''} oldprice={'$4.29'} price={'$3.29'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233984/product_4_t9jl7t.png'} offer={'19%'} title={'Field Roast Chao Cheese Creamy Original'} iscounter={true} rating={''} oldprice={'$24.00'} price={'$19.50'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756246625/product_7_cqn12f.png'} offer={''} title={'Blue Diamond Almonds Lightly Salted'} iscounter={true} rating={''} oldprice={''} price={'$11.68'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233981/product_1_hub2w5.png'} offer={''} title={'Blue Diamond Almonds Lightly Salted'} iscounter={true} rating={''} oldprice={''} price={'$11.68'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756246624/product_5_xrazt4.png'} offer={'23%'} title={"Angie's Boomchickapop Sweet & Salty Kettle Corn"} iscounter={true} rating={''} oldprice={'$4.29'} price={'$3.29'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756246623/product_6_po8mfe.png'} offer={'19%'} title={'Field Roast Chao Cheese Creamy Original'} iscounter={true} rating={''} oldprice={'$24.00'} price={'$19.50'} />
        <Product_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756239910/Home-1-Hot-2_tv7gub.png'} offer={'22%'} title={'All Natural Italian-Style Chicken Meatballs'} iscounter={true} rating={''} oldprice={'$9.35'} price={'$7.25'} />
    
    </div>
    </>
  )
}
