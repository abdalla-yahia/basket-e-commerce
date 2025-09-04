'use client'
import { UpdateUser } from "@/Interfaces/UserInterface"
import { RootState, useAppSelector } from "@/libs/store"
import User_Content from "./User_Content"
import * as icon from '@/Utils/Icons/Icons'

export default function Users_Container() {
  const { AllUsers } = useAppSelector((state: RootState) => state.user)

  return (
    <div className="w-full overflow-x-auto scrollbar-none flex flex-col justify-start items-start relative">
      {/*Section Title*/}
      <h1 className="text-xl font-bold my-4 text-primary flex justify-between items-center">
        <icon.FaUsers className="text-3xl mx-2" />
        All Users {`(${AllUsers?.users?.length})`}
      </h1>
      {/*Users Table*/}
      <table className="w-full border border-gray-200 text-center">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border border-[#E4E5EE]">Image</th>
            <th className="p-2 border border-[#E4E5EE]">Name</th>
            <th className="p-2 border border-[#E4E5EE]">Gender</th>
            <th className="p-2 border border-[#E4E5EE]">Email</th>
            <th className="p-2 border border-[#E4E5EE]">Phone</th>
            <th className="p-2 border border-[#E4E5EE]">Address</th>
            <th className="p-2 border border-[#E4E5EE]">Role</th>
            <th className="p-2 border border-[#E4E5EE]">Orders</th>
            <th className="p-2 border border-[#E4E5EE]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            AllUsers?.users?.map((User: UpdateUser) =>
              <User_Content key={User?.id} User={User} />
            )
          }
        </tbody>
      </table>

    </div>
  )
}
