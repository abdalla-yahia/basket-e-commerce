'use client'
import Image from "next/image";
import Filter_By_Brand from "./Filter/Filter_By_Brand";
import Filter_By_Category from "./Filter/Filter_By_Category";
import Filter_By_Price from "./Filter/Filter_By_Price";

export default function Aside_Continer() {
  

  
  return (
    <div className="flex flex-col justify-start items-start">
      {/*Filter By Category*/}
      <Filter_By_Category />
      {/*Filter By Brand*/}
      <Filter_By_Brand  />
      {/*Filter By Brand*/}
      <Filter_By_Price  />
      {/*Image*/}
      <Image className="w-full my-[40px]" src={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756310846/shop-filter_e4sssz.png'} alt="" width={150} height={450} />
    </div>
  )
}
