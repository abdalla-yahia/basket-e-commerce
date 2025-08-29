'use client'
import UploadImages from "@/Utils/UploadImage";
import { SetStateAction, useActionState, useState } from "react";
import * as icon from '@/Utils/Icons/Icons';
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/libs/store";
import { CreateCategory } from "@/Interfaces/CategoryInterface";
import { CreateCategoryValidation } from "@/Validation/CategoryValidation";
import { toast } from "react-toastify";
import { createCategory } from "@/Feature/Actions/CategoriesActions";

export default function Add_New_Category_Container() {
    const [imageUrl, setImages] = useState<string[]>([]);
    const {category,error,loading} = useSelector((state:RootState)=>state.category)
    const dispatch = useAppDispatch()
    //Create Item Handler
    const CreateItem = (prevState:CreateCategory,formData:FormData):CreateCategory=>{
      const formstate= {
        ...prevState,
        title:formData.get('CategoryTitle') as string,
        description:formData.get('CategoryDescription') as string,
        image:imageUrl && imageUrl[0] 
      }
      //Check Validation 
      const Validation = CreateCategoryValidation.safeParse(formstate)
      if(!Validation?.success){
        toast.warning(Validation?.error?.issues?.map(e=>e?.message)?.join(', '))
        return formstate;
      }
      //Send Data 
      dispatch(createCategory(Validation?.data))
      return formstate
    }
    //Initial State
    const InitialState = {
      title:'',
      description:'',
      image:''
    }

    const [,ActionStat] = useActionState(CreateItem,InitialState)
  return (
    <div className="w-full flex flex-col justify-start items-center gap-5 p-8">
      {/*Section Title*/}
        <h1 className="text-2xl font-[600] gap-2 mb-5 text-primary mr-auto flex justify-center items center">
            {/* SVG Icon */}
          <icon.IoPricetagsSharp />
          Create Anew Category
          </h1>
      {/*Form */}
      <form action={ActionStat} className="w-[70%]">
         {/*Category Image*/}
        <UploadImages images={imageUrl} setImages={setImages as (urls: string[]) => SetStateAction<string[]>} />
        {/*Category Image URL*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
            <label htmlFor="CategoryUrl">Category Url:</label>
            <input onChange={(e)=>setImages(prev=>[...prev,e.target.value])} type="text" name="CategoryUrl" id="CategoryUrl" className='p-2 bg-[#F3F4F7] rounded w-full'/>
        </div>
        {/*Category Title*/}
          <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
              <label htmlFor="CategoryTitle">Category Title:</label>
              <input type="text" name="CategoryTitle" id="CategoryTitle" className='p-2 bg-[#F3F4F7] rounded w-full'/>
          </div>
        {/*Category Description*/}
          <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
              <label htmlFor="CategoryDescription">Category Description:</label>
              <input type="text" name="CategoryDescription" id="CategoryDescription" className='p-2 bg-[#F3F4F7] rounded w-full'/>
          </div>
        {/*Submit Button*/}
        {
          error && <p className="text-red-500">{error}</p>
        }
        {
          category?.category?.title && <p className="text-green-500">Created Category Successfully</p>
        }
          <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
            <button type="submit" id="CategoryDescription" className='p-2 border border-[#F3F4F7] text-white cursor-pointer bg-primary rounded w-full'>
              {loading ?(
                    <>
                    <div className="w-full flex justify-center items-center gap-2">
                            <icon.LuLoader className="h-4 w-4 animate-spin" />
                    Saving...
                    </div>
                    </>
                ) 
                
                :'Save'}
              </button>
          </div>
      </form>
    </div>
  )
}
