import dynamic from "next/dynamic";
import Aside_Continer from "./Aside_Filter/Aside_Continer";
import { useAppDispatch } from "@/libs/store";
import { useEffect } from "react";
import { getBrandById } from "@/Feature/Actions/BrandsActions";
const Products_Container = dynamic(()=> import("./Products/Products_Container"),{
  ssr:true,
   loading: () => (
    <div className="flex items-center justify-center h-40">
      <span className="animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></span>
      <p className="text-muted animate-pulse font-bold text-3xl">Loading...</p>
    </div>
  ),
});

export default function Brands_Container({id}:{id:string}) {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getBrandById(id))
  }, [id])

  return (
    <section className="w-full flex justify-center items-center mt-[40px]">
        {/*Container*/}
        <div className="w-[90%] flex justify-between items center gap-5">
            {/*Aside Filter*/}
            <aside className="w-[20%]">
                <Aside_Continer />
            </aside>
            {/*Section Body*/}
            <div className="w-[75%]">
                <Products_Container id={id}/>
            </div>
        </div>
    </section>
  )
}
