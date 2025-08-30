'use client'
import { getAllUsers } from "@/Feature/Actions/UsersActions"
import { UpdateUser } from "@/Interfaces/UserInterface"
import { RootState, useAppDispatch } from "@/libs/store"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import User_Content from "./User_Content"


export default function Users_Container() {
  const {AllUsers} = useSelector((state:RootState)=>state.user)
  const dispatch = useAppDispatch()
  //Fetch All Users
  useEffect(()=>{
    dispatch(getAllUsers())
  },[dispatch])

console.log(AllUsers)
  return (
    <div className="w-full flex justify-start items-start relative">
      {/*Users Table*/}
      <table className="w-full border border-gray-200">
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
      AllUsers?.users?.map((User:UpdateUser)=>
        <User_Content key={User?.id} User={User}/>
      )
    }
  </tbody>
</table>

    </div>
  )
}
