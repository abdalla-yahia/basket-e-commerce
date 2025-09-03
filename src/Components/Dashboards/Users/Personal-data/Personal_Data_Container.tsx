'use client'
import Image from "next/image";
import { useState } from "react";
import { UpdateUser } from "@/Interfaces/UserInterface";
import { RootState, useAppSelector } from "@/libs/store";
import Edit_User_Form from "../../Admins/Users/Form_Edit_User";

export default function Personal_Data_Container() {
  const [Toggle, setToggle] = useState(false)
  const { user } = useAppSelector((state: RootState) => state.user)

  return (
    <div className="w-full p-5 ">
      {/*Edit Form*/}
      <div className="relative w-full">
        {Toggle && <Edit_User_Form User={user?.user as UpdateUser} setIsToggle={setToggle} />}
      </div>
      {/*User Information*/}
      <div className="w-full p-5 flex flex-col justify-between items-start gap-2">
        {/*Image And Name*/}
        <div className="flex justify-between items-center gap-2">
          {/*Image*/}
          <Image className="rounded-full" src={user?.user?.image || 'https://static.vecteezy.com/system/resources/previews/060/423/145/non_2x/business-avatar-icon-with-a-simple-clean-design-featuring-a-man-in-a-suit-suitable-for-online-profiles-or-websites-free-png.png'} alt="admin-image" width={220} height={220} />
          {/*Main Information*/}
          <div className="flex flex-col justify-between items-start">
            {/*Admin Name*/}
            <h1 className="text-xl font-[600]">{user?.user?.name}</h1>
            {/*Email*/}
            <h2 className="text-[12px] font-[600] text-gray-400">{user?.user?.email}</h2>
          </div>
        </div>
        {/*Admin Information*/}
        <div className="w-full flex flex-col justify-start items-start gap-6">
          {/*Phone*/}
          <div className="flex justify-center items-center gap-2">
            <h3 className="text-[14px] font-bold">Phone : </h3>
            <p className="text-[12px] text-gray-500">{user?.user?.phone}</p>
          </div>
          {/*Address*/}
          <div className="flex justify-center items-center gap-2">
            <h3 className="text-[14px] font-bold">Address : </h3>
            <p className="text-[12px] text-gray-500">{user?.user?.address}</p>
          </div>
          {/*Gender*/}
          <div className="flex justify-center items-center gap-2">
            <h3 className="text-[14px] font-bold">Gender : </h3>
            <p className="text-[12px] text-gray-500">
              {user?.user?.gender}
            </p>
          </div>
          {/*Login Date*/}
          <div className="flex justify-center items-center gap-2">
            <h3 className="text-[14px] font-bold">Login Date : </h3>
            <p className="text-[12px] text-gray-500">{new Date(user?.user?.createdAt as string).toLocaleDateString('ar-EG', { year: 'numeric', month: 'short', day: '2-digit' })}</p>
          </div>
        </div>
        {/*Actions Button */}
        <button onClick={() => setToggle(!Toggle)} title="Edit Admin" className="w-[20%] my-5 ml-auto rounded-xl p-1 bg-primary/70 hover:bg-primary text-white cursor-pointer  font-[500] duration-150 text-xl flex justify-center items-center">Edit</button>
      </div>
    </div>
  )
}
