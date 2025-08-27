
import ProductGallery from "@/Utils/Swiper";
import Product_Content from "./Product_Content";

export default function Product_Details_Section() {
    const product = {
        images :[
            'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png',
            'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233984/product_4_t9jl7t.png',
            'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233987/product_3_tnqxie.png',
            'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233981/product_1_hub2w5.png'
        ]
    }
 
  return (
    <div className=" w-full flex justify-between items-center gap-5">
        {/*Product Gallary*/}
        <div className="w-[50%] flex justify-center items-center">
        <ProductGallery images={product?.images}/>
        </div>
        {/*Product Content*/}
        <Product_Content />
    </div>
  )
}
