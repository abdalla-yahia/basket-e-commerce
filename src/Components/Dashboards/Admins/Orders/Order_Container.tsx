'use client'
import { getAllOrders } from "@/Feature/Actions/OrdersActions"
import { UpdateOrder } from "@/Interfaces/OrderInterface"
import { RootState, useAppDispatch } from "@/libs/store"
import { useEffect } from "react"
import { useAppSelector } from "react-redux"
import Order_Content from "./Order_Content"


export default function Orders_Container() {
  const { AllOrders } = useAppSelector((state: RootState) => state.order)
  const dispatch = useAppDispatch()
  //Fetch All Orders
  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch])

  console.log(AllOrders)
  return (
    <div className="w-full flex justify-start items-start relative">
      {/*Orders Table*/}
      <table className="w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border border-[#E4E5EE]">ID</th>
            <th className="p-2 border border-[#E4E5EE]">User</th>
            <th className="p-2 border border-[#E4E5EE]">Status</th>
            <th className="p-2 border border-[#E4E5EE]">Products</th>
            <th className="p-2 border border-[#E4E5EE]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            AllOrders?.orders?.map((Order: UpdateOrder) =>
              <Order_Content key={Order?.id} Order={Order} />
            )
          }
        </tbody>
      </table>

    </div>
  )
}
