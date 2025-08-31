'use client'
import { UpdateOrder } from "@/Interfaces/OrderInterface"
import { RootState, useAppDispatch } from "@/libs/store"
import { useEffect } from "react"
import { useAppSelector } from "react-redux"
import Order_Content from "./Order_Content"
import { getUserById } from "@/Feature/Actions/UsersActions"


export default function Orders_Container() {
  const { LogedUser } = useAppSelector((state: RootState) => state.auth)
  const { user } = useAppSelector((state: RootState) => state.user)
  const dispatch = useAppDispatch()
  //Fetch All Orders
  useEffect(() => {
    dispatch(getUserById(LogedUser?.user?.id as string))
  }, [dispatch])

  //Fetch User
  useEffect(() => {
    dispatch(getUserById(LogedUser?.user?.id as string))
  }, [LogedUser?.user?.name])

  return (
    <div className="w-full flex justify-start items-start relative">
      {/*Orders Table*/}
      <table className="w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border border-[#E4E5EE]">ID</th>
            <th className="p-2 border border-[#E4E5EE]">Status</th>
            <th className="p-2 border border-[#E4E5EE]">Products</th>
            <th className="p-2 border border-[#E4E5EE]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            user?.user?.orders?.map((Order: UpdateOrder) =>
              <Order_Content key={Order?.id} Order={Order} />
            )
          }
        </tbody>
      </table>

    </div>
  )
}
