'use client'
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import { useEffect } from "react";
import { getAllCategories } from "@/Feature/Actions/CategoriesActions";
import { useAppDispatch } from "@/libs/store";
import { getAllCart } from "@/Feature/Actions/CartsActions";
import { getWishlist } from "@/Feature/Actions/WishListActions";



export default function MainLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    const dispatch = useAppDispatch()
        useEffect(()=>{
            dispatch(getAllCategories())
            dispatch(getAllCart())
            dispatch(getWishlist())

        },[dispatch])
    return(
        <>
        <Header />
            <main>
                {children}
            </main>
        <Footer />
        </>
    )
}