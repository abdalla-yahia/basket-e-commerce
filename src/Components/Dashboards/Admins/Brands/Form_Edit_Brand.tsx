'use client'
import { useActionState, useState } from "react";
import * as icon from '@/Utils/Icons/Icons';
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/libs/store";
import { UpdateBrandValidation } from "@/Validation/BrandValidation";
import { toast } from "react-toastify";
import { updateBrand } from "@/Feature/Actions/BrandsActions";
import { UpdateBrand } from "@/Interfaces/BrandInterface";
import UploadOneImage from "@/Utils/UploadOneImage";
import { clearBrand } from "@/Feature/Slices/BrandsSlice";

export default function Edit_Brand_Form({ brand, setIsToggle }: { brand: UpdateBrand, setIsToggle: (arg0: boolean) => void }) {
  const [imageUrl, setImageUrl] = useState<string>(brand?.image as string);
  const { brand: EditBrand, error, loading } = useSelector((state: RootState) => state.brand)

  const dispatch = useAppDispatch()
  //Create Item Handler
  const UpdateItem = (prevState: UpdateBrand, formData: FormData): UpdateBrand => {
    const formstate = {
      ...prevState,
      id: brand?.id,
      title: formData.get('BrandTitle') as string || brand?.title,
      description: formData.get('BrandDescription') as string || brand?.description,
      image: formData.get('BrandUrl') as string ||imageUrl,
    }
    //Check Validation 
    console.log(formstate)
    const Validation = UpdateBrandValidation?.safeParse(formstate)
    if (!Validation?.success) {
      toast.warning(Validation?.error?.issues?.map(e => e?.message)?.join(', '))
      return formstate;
    }
    //Send Data 
    dispatch(updateBrand(formstate))
    return formstate
  }
  //Initial State
  const InitialState = {
    id: brand?.id,
    title: brand?.title,
    description: brand?.description,
    image: brand?.image,
  }

  const [, ActionStat] = useActionState(UpdateItem, InitialState)
  if (EditBrand?.brand?.title) {
    setIsToggle(false)
    dispatch(clearBrand())
  }
  return (
    <div className="w-[50%] absolute -top-[100%] bg-[#ddd] rounded left-0 flex flex-col justify-start items-center gap-5 p-8">
      {/*Close Form*/}
      <icon.IoClose onClick={() => setIsToggle(false)} className="text-xl absolute top-3 right-3 cursor-pointer" />
      {/*Section Title*/}
      <h1 className="text-2xl font-[600] gap-2 mb-5 text-primary mr-auto flex justify-center items center">
        {/* Icon */}
        <icon.IoPricetagsSharp />
        Update Brand
      </h1>
      {/*Form */}
      <form action={ActionStat} className="w-[70%]">
        {/*Brand Image*/}
        <UploadOneImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
        {/*Brand Image URL*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="BrandUrl">Brand Image Url:</label>
          <input type="text" name="BrandUrl" id="BrandUrl" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*Brand Title*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="BrandTitle">Brand Title:</label>
          <input placeholder={brand?.title} type="text" name="BrandTitle" id="BrandTitle" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*Brand Description*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="BrandDescription">Brand Description:</label>
          <input placeholder={brand?.description} type="text" name="BrandDescription" id="BrandDescription" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>

        {/*Submit Button*/}
        {
          error && <p className="text-red-500">{error}</p>
        }
        {
          EditBrand?.brand?.title && <p className="text-green-500">Created Brand Successfully</p>
        }
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <button type="submit" id="BrandDescription" className='p-2 border border-[#F3F4F7] text-white cursor-pointer bg-primary rounded w-full'>
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
