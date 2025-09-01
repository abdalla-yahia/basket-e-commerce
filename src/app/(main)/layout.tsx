'use client'
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import { useEffect } from "react";
import { getAllCategories } from "@/Feature/Actions/CategoriesActions";
import { useAppDispatch } from "@/libs/store";



export default function MainLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    const dispatch = useAppDispatch()
        useEffect(()=>{
            dispatch(getAllCategories())
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