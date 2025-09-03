'use client'
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import { useEffect } from "react";
import { getAllCategories } from "@/Feature/Actions/CategoriesActions";
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import { getAllCart } from "@/Feature/Actions/CartsActions";
import { getWishlist } from "@/Feature/Actions/WishListActions";
import { getAllBrands } from "@/Feature/Actions/BrandsActions";
import { getAllProduct } from "@/Feature/Actions/ProductsActions";
import { useRouter, useSearchParams } from "next/navigation";
import { setBrandsRedux, setCategoriesRedux, setPriceRedux } from "@/Feature/Slices/ProductsSlice";

export default function MainLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const {pageNumber,searchText,categories,brands,price} = useAppSelector((state:RootState)=>state.product)  
     
    const dispatch = useAppDispatch()
    // const router = useRouter();
      const searchParams = useSearchParams();
        //Get Query From Url After Reload Page
      useEffect(()=>{
        dispatch(setCategoriesRedux(searchParams.get("categories")?.split(",") || []))
        dispatch(setBrandsRedux(searchParams.get("brands")?.split(",") || []))
        dispatch(setPriceRedux({
        min: searchParams.get("minPrice") || "",
        max: searchParams.get("maxPrice") || "",
      }))
      },[])

      //Set Queries To URL 
      const params = new URLSearchParams();
      useEffect(() => {
        if (categories.length > 0) params.set("categories", categories.join(","));
        if (brands.length > 0) params.set("brands", brands.join(","));
        if (price.min) params.set("minPrice", price.min);
        if (price.max) params.set("maxPrice", price.max);
        if (pageNumber) params.set('pageNumber', pageNumber.toString())
        if (searchText) params.set('search', searchText.toString())
        // router.push(`/products/shop?${params.toString()}`);
    
      }, [categories, brands, price,pageNumber,searchText])
    
    
    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(getAllBrands())
        dispatch(getAllCart())
        dispatch(getWishlist())   
    }, [dispatch])
    //Get All Products 
    useEffect(() => {
        dispatch(getAllProduct(params as URLSearchParams))
    }, [categories, brands, price,pageNumber,searchText])

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}