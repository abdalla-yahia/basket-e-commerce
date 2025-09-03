'use client'
import Aside_Dashboard from "@/Components/Dashboards/Aside/Aside_Dashboard";
import { getAllBrands } from "@/Feature/Actions/BrandsActions";
import { getAllCategories } from "@/Feature/Actions/CategoriesActions";
import { getAllProduct } from "@/Feature/Actions/ProductsActions";
import { getAllUsers } from "@/Feature/Actions/UsersActions";
import { useAppDispatch } from "@/libs/store";
import { useEffect } from "react";

export default function AdminsLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const dispatch = useAppDispatch()
  const params = new URLSearchParams()
  params.set('pageNumber', '1')
  useEffect(() => {
    dispatch(getAllBrands())
    dispatch(getAllCategories())
    dispatch(getAllUsers())
    dispatch(getAllProduct(params as URLSearchParams))

  }, [dispatch])
  return (
    <section className="w-full flex justify-center items-center mt-[40px]">
      <div className="w-[90%] flex justify-between items-start gap-5">
        {/*Aside Buttons*/}
        <Aside_Dashboard role={'admins'} />
        {/*Page Content*/}
        <div className="w-[80%] flex flex-col justify-start items-start  text-[#3E445A] font-[400] text-sm gap-0 border border-[#E4E5EE] p-4 rounded">
          {children}
        </div>
      </div>
    </section>
  );
}
