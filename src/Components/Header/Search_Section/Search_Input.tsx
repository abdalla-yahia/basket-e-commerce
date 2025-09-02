'use client'
import * as icon from '@/Utils/Icons/Icons'; 
import { useRouter } from 'next/navigation';

export default function Search_Input({setSearchText}:{setSearchText:(arg0:string)=>void}) {
  const router = useRouter()
  const Searchandler=(e:string)=>{
    setSearchText(e)
    router.push('/products')
  }
  return (
    <div className="h-[60px] w-[60%] bg-[#F3F4F7] flex justify-between items-center px-[16px] py-[8px] rounded-xl">
        {/*Input Search*/}
        <input onChange={(e)=>Searchandler(e.target.value)} className="text-[#9595A9] w-full h-full outline-none border-none" type="search" name="" id="" placeholder="Search for Products, fruit, meat, eggs .etc..." />
        {/*Icon Search*/}
            <icon.RiSearchLine className='text-2xl'/>
    </div>
  )
}
