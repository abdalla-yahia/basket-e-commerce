'use client'
import UploadImages from "@/Utils/UploadImage";
import { SetStateAction, useActionState, useState } from "react";
import * as icon from '@/Utils/Icons/Icons';
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/libs/store";
import { CreateBrand } from "@/Interfaces/BrandInterface";
import { CreateBrandValidation } from "@/Validation/BrandValidation";
import { toast } from "react-toastify";
import { createBrand } from "@/Feature/Actions/BrandsActions";

export default function Add_New_Brand_Container() {
  const [imageUrl, setImages] = useState<string[]>([]);
  const { brand, error, loading } = useSelector((state: RootState) => state.brand)
  const dispatch = useAppDispatch()
  //Create Item Handler
  const CreateItem = (prevState: CreateBrand, formData: FormData): CreateBrand => {
    const formstate = {
      ...prevState,
      title: formData.get('BrnadTitle') as string,
      description: formData.get('BrnadDescription') as string,
      image: imageUrl && imageUrl[0]
    }
    //Check Validation 
    const Validation = CreateBrandValidation.safeParse(formstate)
    if (!Validation?.success) {
      toast.warning(Validation?.error?.issues?.map(e => e?.message)?.join(', '))
      return formstate;
    }
    //Send Data 
    dispatch(createBrand(Validation?.data))
    return formstate
  }
  //Initial State
  const InitialState = {
    title: '',
    description: '',
    image: ''
  }

  const [, ActionStat] = useActionState(CreateItem, InitialState)
  return (
    <div className="w-full flex flex-col justify-start items-center gap-5 p-8">
      {/*Section Title*/}
      <h1 className="text-2xl font-[600] gap-2 mb-5 text-primary mr-auto flex justify-center items center">
        {/* SVG Icon */}
        <icon.IoPricetagsSharp />
        Create Anew Brand
      </h1>
      {/*Form */}
      <form action={ActionStat} className="w-[70%]">
        {/*Brand Image*/}
        <UploadImages images={imageUrl} setImages={setImages as (urls: string[]) => SetStateAction<string[]>} />
        {/*Brand Image URL*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="BrnadUrl">Brand Url:</label>
          <input onChange={(e) => setImages([e.target.value])} type="text" name="BrnadUrl" id="BrnadUrl" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*Brand Title*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="BrnadTitle">Brand Title:</label>
          <input type="text" name="BrnadTitle" id="BrnadTitle" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*Brand Description*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="BrnadDescription">Brand Description:</label>
          <input type="text" name="BrnadDescription" id="BrnadDescription" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*Submit Button*/}
        {
          error && <p className="text-red-500">{error}</p>
        }
        {
          brand?.brand?.title && <p className="text-green-500">Created Brand Successfully</p>
        }
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <button type="submit" id="BrnadDescription" className='p-2 border border-[#F3F4F7] text-white cursor-pointer bg-primary rounded w-full'>
            {loading ? (
              <>
                <div className="w-full flex justify-center items-center gap-2">
                  <icon.LuLoader className="h-4 w-4 animate-spin" />
                  Saving...
                </div>
              </>
            )

              : 'Save'}
          </button>
        </div>
      </form>
    </div>
  )
}
