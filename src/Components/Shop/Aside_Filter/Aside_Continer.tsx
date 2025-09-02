'use client'
import Image from "next/image";
import Filter_By_Brand from "./Filter/Filter_By_Brand";
import Filter_By_Category from "./Filter/Filter_By_Category";
import Filter_By_Price from "./Filter/Filter_By_Price";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Aside_Continer() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [categories, setCategories] = useState<string[]>(
    searchParams.get("categories")?.split(",") || []
  );
  const [brands, setBrands] = useState<string[]>(
    searchParams.get("brands")?.split(",") || []
  );
  const [price, setPrice] = useState({
    min: searchParams.get("minPrice") || "",
    max: searchParams.get("maxPrice") || "",
  });
  useEffect(()=>{
      const params = new URLSearchParams();
      if (categories.length > 0) params.set("categories", categories.join(","));
      if (brands.length > 0) params.set("brands", brands.join(","));
      if (price.min) params.set("minPrice", price.min);
      if (price.max) params.set("maxPrice", price.max);
  
      router.push(`/products?${params.toString()}`);
    
  },[categories,brands,price])

  return (
    <div className="flex flex-col justify-start items-start">
        {/*Filter By Category*/}
        <Filter_By_Category categories={categories} setCategories={setCategories}/>
        {/*Filter By Brand*/}
        <Filter_By_Brand brands={brands} setBrands={setBrands}/>
        {/*Filter By Brand*/}
        <Filter_By_Price price={price} setPrice={setPrice}/>
        {/*Image*/}
        <Image className="w-full my-[40px]" src={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756310846/shop-filter_e4sssz.png'} alt="" width={150} height={450} />
    </div>
  )
}
