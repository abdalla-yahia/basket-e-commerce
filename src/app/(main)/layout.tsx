'use client'
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { getAllCategories } from "@/Feature/Actions/CategoriesActions";
import { useAppDispatch } from "@/libs/store";
import "react-toastify/dist/ReactToastify.css";



export default function MainLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    const dispatch = useAppDispatch()
        useEffect(()=>{
            dispatch(getAllCategories())
        },[])
    return(
        <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
       <ToastContainer/>
        </>
    )
}