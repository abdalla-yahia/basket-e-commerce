'use client'
import { UpdateCategory } from "@/Interfaces/CategoryInterface"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Categories_DropDown_Component({isToggle,setIsToggle,items,ChangeCategoryHandeler,setItemSelected}:{isToggle:boolean,setIsToggle:(arg0:boolean)=>void,items:UpdateCategory[],ChangeCategoryHandeler:(arg0:string,arg1:string)=>void,setItemSelected:(arg0:string)=>void}) {
    const router = useRouter()
  
    return (
        <>
            {isToggle &&<div  className="Custom-Drop-Down w-full absolute top-[100%] left-0 rounded-b-xl border border-[#eee]">
                {/*List*/}
                <ul className="w-full shadow flex flex-col justify-start items-start py-2 px-1 bg-white rounded-b-xl gap-2">
                    <li onClick={()=>{setIsToggle(false);router.push(`/products/shop`);setItemSelected('All Categories')}}  className="group flex justify-start items-center gap-1  cursor-pointer text-black w-full p-1 hover:bg-primary hover:text-white duration-200">
                        <Image src={'https://static.vecteezy.com/system/resources/previews/028/600/884/non_2x/sticky-notes-3d-rendering-icon-illustration-free-png.png'} alt={'All Categories'} width={20} height={20} className="grayscale-100 group-hover:grayscale-0"/> 
                        <span className="uppercase">All Categories</span>
                    </li>
                    {
                        items?.length && items?.map((item:UpdateCategory)=>
                            <li onClick={()=>{ChangeCategoryHandeler(item?.id as string , item?.title as string);setIsToggle(false)}} key={item?.id} className="group flex justify-start items-center gap-2 cursor-pointer text-black w-full p-1 hover:bg-primary hover:text-white duration-200">
                                {item?.image && <Image src={item?.image} alt={item?.title as string} width={20} height={20} className="grayscale-100 group-hover:grayscale-0"/> }
                                <span className=" uppercase">{item?.title}</span>
                            </li>
                        )
                    }
                </ul>
            </div>}
        </>
  )
}
