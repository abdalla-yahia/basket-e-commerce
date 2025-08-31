'use client'
import UploadImages from "@/Utils/UploadImage";
import { SetStateAction, useActionState, useEffect, useState } from "react";
import * as icon from '@/Utils/Icons/Icons';
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/libs/store";
import { UpdateUserValidation } from "@/Validation/UserValidation";
import { toast } from "react-toastify";
import { updateUser } from "@/Feature/Actions/UsersActions";
import { UpdateUser } from "@/Interfaces/UserInterface";

export default function Edit_User_Form({ User, setIsToggle }: { User: UpdateUser, setIsToggle: (arg0: boolean) => void }) {
  const UserImage = [User?.image as string]
  const [imageUrl, setImages] = useState<string[]>(UserImage);
  const { user: EditUser, error, loading } = useSelector((state: RootState) => state.user)

  const dispatch = useAppDispatch()
  //Create Item Handler
  const UpdateItem = (prevState: UpdateUser, formData: FormData): UpdateUser => {
    const formstate = {
      ...prevState,
      id: User?.id,
      name: formData.get('UserName') as string || User?.name,
      address: formData.get('UserAddress') as string || User?.address,
      phone: formData.get('UserPhone') as string || User?.phone,
      image: imageUrl && imageUrl[0],
    }
    //Check Validation 
    console.log(formstate)
    const Validation = UpdateUserValidation?.safeParse(formstate)
    if (!Validation?.success) {
      toast.warning(Validation?.error?.issues?.map(e => e?.message)?.join(', '))
      return formstate;
    }
    //Send Data 
    dispatch(updateUser(formstate))
    return formstate
  }
  //Initial State
  const InitialState = {
    id: User?.id,
    name: User?.name,
    phone: User?.phone,
    address: User?.address,
    image: User?.image,
  }

  const [, ActionStat] = useActionState(UpdateItem, InitialState)
  if (EditUser?.status === 201) {
    setIsToggle(false);
  }
  return (
    <div className="w-[50%] absolute -top-[100%] bg-[#ddd] rounded left-0 flex flex-col justify-start items-center gap-5 p-8">
      {/*Close Form*/}
      <icon.IoClose onClick={() => setIsToggle(false)} className="text-xl absolute top-3 right-3 cursor-pointer" />
      {/*Section Title*/}
      <h1 className="text-2xl font-[600] gap-2 mb-5 text-primary mr-auto flex justify-center items center">
        {/* Icon */}
        <icon.IoPricetagsSharp />
        Update User
      </h1>
      {/*Form */}
      <form action={ActionStat} className="w-[70%]">
        {/*User Image*/}
        <UploadImages images={imageUrl} setImages={setImages as (urls: string[]) => SetStateAction<string[]>} />
        {/*User Image URL*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="UserUrl">User Image Url:</label>
          <input onChange={(e) => setImages([e.target.value])} type="text" name="UserUrl" id="UserUrl" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*User Name*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="UserName">User Name:</label>
          <input placeholder={User?.name} type="text" name="UserName" id="UserName" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*User Address*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="UserAddress">User Address:</label>
          <input placeholder={User?.address} type="text" name="UserAddress" id="UserAddress" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*User Phone*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="UserPhone">User Phone:</label>
          <input placeholder={User?.phone} type="phone" name="UserPhone" id="UserPhone" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>

        {/*Submit Button*/}
        {
          error && <p className="text-red-500">{error}</p>
        }
        {
          EditUser?.status === 201 && <p className="text-green-500">Update User Successfully</p>
        }
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <button type="submit" id="UserRole" className='p-2 border border-[#F3F4F7] text-white cursor-pointer bg-primary rounded w-full'>
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
