import Image from "next/image";
import {setSortRedux} from '@/Feature/Slices/ProductsSlice';
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@/libs/store";

export default function Sort_DropDown() {
    const [isToggle,setIsToggle] =useState(false)
    const [sortSelected,setSortSelected] =useState('Alphabetical, A - Z') 
    const sortRef = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch()

    //Set Sort 
    const ChangeSortHandeler = (e:string)=>{
        dispatch(setSortRedux(e))
    }
    //Close Sort DropDown When User Clicked Outside 
    useEffect(()=>{
        const CloseSortDropDown = (e:MouseEvent)=>{
        if(sortRef?.current && !sortRef?.current?.contains(e.target as Node)){
            setIsToggle(false)
        }
        }
        window.addEventListener('click',CloseSortDropDown)
        //Clear Listener
        return ()=> window.removeEventListener('click',CloseSortDropDown)
    },[])

    return (
    <>
    <div ref={sortRef} onClick={()=>setIsToggle(!isToggle)} className="w-[18%] h-full cursor-pointer relative flex justify-start items-center gap-3">
        <span className="text-[#9B9BB4] text-[12px] font-[400]">Sort by:</span>

            {/*List*/}
        {isToggle &&<div  className="w-full z-50 absolute top-[100%] left-0 rounded-b-xl border border-[#eee]">
            <ul className="w-full shadow flex flex-col justify-start items-start py-2 bg-white rounded-b-xl gap-2">
                {/*Alphabetical, A - Z*/}
                <li onClick={()=>{ChangeSortHandeler('az');setIsToggle(false);setSortSelected('Alphabetical, A - Z')}}  className="group flex justify-start items-center gap-2  cursor-pointer text-black w-full p-1 hover:bg-primary hover:text-white duration-200">
                    <span className="uppercase">Alphabetical, A - Z</span>
                    <Image src={'https://static.vecteezy.com/system/resources/previews/060/150/847/large_2x/stunning-modern-letter-a-uppercase-authentic-free-png.png'} alt={'Alphabetical, A - Z'} width={20} height={20} className="grayscale-100 group-hover:grayscale-0"/> 
                </li>
                {/*Alphabetical, Z - A*/}
                <li onClick={()=>{ChangeSortHandeler('za');setIsToggle(false);setSortSelected('Alphabetical, Z - A')}}  className="group flex justify-start items-center gap-2  cursor-pointer text-black w-full p-1 hover:bg-primary hover:text-white duration-200">
                    <span className="uppercase">Alphabetical, Z - A</span>
                    <Image src={'https://static.vecteezy.com/system/resources/previews/065/392/286/large_2x/inspired-industrial-isometric-park-bench-with-symmetrical-design-crisp-edges-flat-color-with-scalable-design-genuine-free-png.png'} alt={'Alphabetical, Z - A'} width={20} height={20} className="grayscale-100 group-hover:grayscale-0"/> 
                </li>
                {/*Newest - Oldest*/}
                <li onClick={()=>{ChangeSortHandeler('new-old');setIsToggle(false);setSortSelected('Newest - Oldest')}}  className="group flex justify-start items-center gap-2  cursor-pointer text-black w-full p-1 hover:bg-primary hover:text-white duration-200">
                    <span className="uppercase">Newest - Oldest</span>
                    <Image src={'https://static.vecteezy.com/system/resources/previews/055/743/605/non_2x/festive-letter-n-with-ornaments-free-png.png'} alt={'Newest - Oldest'} width={20} height={20} className="grayscale-100 group-hover:grayscale-0"/> 
                </li>
                {/*Oldest - Newest*/}
                <li onClick={()=>{ChangeSortHandeler('old-new');setIsToggle(false);setSortSelected('Oldest - Newest')}}  className="group flex justify-start items-center gap-2  cursor-pointer text-black w-full p-1 hover:bg-primary hover:text-white duration-200">
                    <span className="uppercase">Oldest - Newest</span>
                    <Image src={'https://static.vecteezy.com/system/resources/previews/054/329/199/large_2x/the-letter-o-is-made-of-rusty-metal-and-green-paint-free-png.png'} alt={'Oldest - Newest'} width={20} height={20} className="grayscale-100 group-hover:grayscale-0"/> 
                </li>
                {/*Price, High - Low*/}
                <li onClick={()=>{ChangeSortHandeler('price-high-low');setIsToggle(false);setSortSelected('Price, High - Low')}}  className="group flex justify-start items-center gap-2  cursor-pointer text-black w-full p-1 hover:bg-primary hover:text-white duration-200">
                    <span className="uppercase">Price, High - Low</span>
                    <Image src={'https://static.vecteezy.com/system/resources/previews/035/898/405/large_2x/3d-alphabet-letter-h-with-blue-color-free-png.png'} alt={'Price, High - Low'} width={20} height={20} className="grayscale-100 group-hover:grayscale-0"/> 
                </li>
                {/*Price, Low - High*/}
                <li onClick={()=>{ChangeSortHandeler('price-low-high');setIsToggle(false);setSortSelected('Price, Low - High')}}  className="group flex justify-start items-center gap-2  cursor-pointer text-black w-full p-1 hover:bg-primary hover:text-white duration-200">
                    <span className="uppercase">Price, Low - High</span>
                    <Image src={'https://static.vecteezy.com/system/resources/previews/035/750/770/large_2x/3d-alphabet-letter-l-with-blue-color-free-png.png'} alt={'Price, Low - High'} width={20} height={20} className="grayscale-100 group-hover:grayscale-0"/> 
                </li>
            </ul>
        </div>}
          <p>{sortSelected}</p>
      </div>
    </>
  )
}
