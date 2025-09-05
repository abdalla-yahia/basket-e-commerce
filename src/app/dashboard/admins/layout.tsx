'use client'
import Aside_Dashboard from "@/Components/Dashboards/Aside/Aside_Dashboard";
import { getAllBrands } from "@/Feature/Actions/BrandsActions";
import { getAllCategories } from "@/Feature/Actions/CategoriesActions";
import { getAllOrders } from "@/Feature/Actions/OrdersActions";
import { getAllProduct } from "@/Feature/Actions/ProductsActions";
import { getAllUsers } from "@/Feature/Actions/UsersActions";
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import { useEffect } from "react";
import { setBrandsRedux, setCategoriesRedux, setPageNumberRedux, setPriceRedux, setSearchTextRedux } from "@/Feature/Slices/ProductsSlice";
import { usePathname, useSearchParams } from "next/navigation";

export default function AdminsLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const { pageNumber, searchText, categories, brands, price } = useAppSelector((state: RootState) => state.product)
    const { order } = useAppSelector((state: RootState) => state.order)
    const { user } = useAppSelector((state: RootState) => state.user)
    const { category } = useAppSelector((state: RootState) => state.category)
    const { brand } = useAppSelector((state: RootState) => state.brand)
    const pathname = usePathname()
    const dispatch = useAppDispatch()
    const searchParams = useSearchParams();
    //Get Query From Url After Reload Page
    useEffect(() => {
      dispatch(setPageNumberRedux(searchParams.get("pageNumber") || '1'))
      dispatch(setSearchTextRedux(searchParams.get("search") || ''))
      dispatch(setCategoriesRedux(searchParams.get("categories")?.split(",") || []))
      dispatch(setBrandsRedux(searchParams.get("brands")?.split(",") || []))
      dispatch(setPriceRedux({
        min: searchParams.get("minPrice") || "",
        max: searchParams.get("maxPrice") || "",
      }))
    }, [])
  const params = new URLSearchParams()
   useEffect(() => {
    if (categories.length > 0) params.set("categories", categories.join(","));
    if (brands.length > 0) params.set("brands", brands.join(","));
    if (price.min) params.set("minPrice", price.min);
    if (price.max) params.set("maxPrice", price.max);
    if (pageNumber) params.set('pageNumber', pageNumber.toString())
    if (searchText) params.set('search', searchText.toString())
  }, [categories, brands, price, pageNumber, searchText])

  useEffect(() => {
    dispatch(getAllBrands())
    dispatch(getAllCategories())
    dispatch(getAllUsers())
    dispatch(getAllOrders())
  }, [dispatch,order,user,category,brand])

    //Get All Products 
  useEffect(() => {
    dispatch(getAllProduct(params as URLSearchParams))
  }, [pathname, categories, brands, price, pageNumber, searchText])

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
