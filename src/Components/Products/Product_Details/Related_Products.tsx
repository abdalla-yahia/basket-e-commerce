import Product_Smal_Card from "../Product_Smal_Card";

export default function Related_Products() {
  return (
    <div className="w-full flex flex-col">
        {/*Title Section*/}
        <h2 className="text-black text-[14px] font-[700] my-2">Related products</h2>
        {/*Section Content*/}
        <div className="flex justify-start items-center gap-3">
            <Product_Smal_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={'On Sale'} title={'All Natural Italian-Style Chicken Meatballs'} oldprice={'$9.35'} price={'$7.25'}/>
            <Product_Smal_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={'On Sale'} title={'All Natural Italian-Style Chicken Meatballs'} oldprice={'$9.35'} price={'$7.25'}/>
            <Product_Smal_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={'On Sale'} title={'All Natural Italian-Style Chicken Meatballs'} oldprice={'$9.35'} price={'$7.25'}/>
            <Product_Smal_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={'On Sale'} title={'All Natural Italian-Style Chicken Meatballs'} oldprice={'$9.35'} price={'$7.25'}/>
            <Product_Smal_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={'On Sale'} title={'All Natural Italian-Style Chicken Meatballs'} oldprice={'$9.35'} price={'$7.25'}/>
            <Product_Smal_Card img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={'On Sale'} title={'All Natural Italian-Style Chicken Meatballs'} oldprice={'$9.35'} price={'$7.25'}/>
        </div>
    </div>
  )
}
