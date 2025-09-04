'use client'
import { setSearchTextRedux } from '@/Feature/Slices/ProductsSlice';
import { useAppDispatch } from '@/libs/store';
import * as icon from '@/Utils/Icons/Icons';
import { useRouter } from 'next/navigation';

export default function Search_Input() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const SearchHandler = (e: string) => {
    dispatch(setSearchTextRedux(e))
    router.push('/products/shop')
  }
  return (
    <div className="h-[40px] md:h-[60px] hidden md:flex-auto lg:flex-1  bg-[#F3F4F7] md:flex justify-between items-center px-[16px] py-[8px] rounded-xl">
      {/*Input Search*/}
      <input onChange={(e) => SearchHandler(e.target.value)} className="text-[#9595A9] h-full outline-none border-none w-full" type="search" name="" id="" placeholder="Search for Products, fruit, meat, eggs .etc..." />
      {/*Icon Search*/}
      <icon.RiSearchLine className='text-2xl' />
    </div>
  )
}
