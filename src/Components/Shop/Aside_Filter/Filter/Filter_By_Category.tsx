'use client'
import Filter_Title from "./Filter_Title";
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import { ChangeEvent, useState } from "react";
import { UpdateCategory } from "@/Interfaces/CategoryInterface";
import { setCategoriesRedux } from '@/Feature/Slices/ProductsSlice';

export default function Filter_By_Category() {
  const [isToggle, setIsToggle] = useState(false)
  const { AllCategories } = useAppSelector((state: RootState) => state.category)
  const { categories } = useAppSelector((state: RootState) => state.product)
  const dispatch = useAppDispatch()

  //Checked Input Handler
  const ChevkedInputHandler = (e: ChangeEvent<HTMLInputElement>, category: UpdateCategory) => {
    if (e.target.checked) {
      dispatch(setCategoriesRedux([...categories, category?.id]))
    } else {
      dispatch(setCategoriesRedux(categories?.filter(ele => ele !== category?.id)))
    }
  }
  return (
    <div className="flex flex-col justify-between items-start">
      {/*Filter Title*/}
      <Filter_Title title="Product Categories" />
      {/*Category Filter*/}
      <ul className="flex flex-col justify-start items-start gap-2 ">
        <li className="flex justify-start items-start gap-4">
          <input onChange={() => dispatch(setCategoriesRedux([]))} checked={categories?.length <= 0} className=" appearance-none bg-white border border-[#D9D9E9]  p-2 hover:bg-primary/50 checked:bg-primary " type="checkbox" name='AllCategories' id='AllCategories' />
          <label className="text-[#71778E] text-[14px] font-[400]" htmlFor='AllCategories'>All Categories</label>
        </li>
        {
          AllCategories?.categories?.slice(0, isToggle ? AllCategories?.categories?.length : 5)?.map((category: UpdateCategory) =>
            <li key={category?.id} className="flex justify-start items-start gap-4">
              <input checked={categories.includes(category?.id)} onChange={(e) => ChevkedInputHandler(e, category)} className=" appearance-none bg-white border border-[#D9D9E9]  p-2 hover:bg-primary/50 checked:bg-primary " type="checkbox" name={category?.title} id={category?.id} />
              <label className="text-[#71778E] text-[14px] font-[400]" htmlFor={category?.id}>{category?.title}</label>
            </li>
          )
        }
        <li className="cursor-pointer text-lg text-primary font-bold" onClick={() => setIsToggle(!isToggle)}>{isToggle ? 'less..' : 'more...'}</li>

      </ul>
    </div>
  )
}
