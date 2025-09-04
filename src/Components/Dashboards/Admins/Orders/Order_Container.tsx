'use client'
import { UpdateOrder } from "@/Interfaces/OrderInterface"
import { RootState, useAppSelector } from "@/libs/store"
import Order_Content from "./Order_Content"
import * as icon from '@/Utils/Icons/Icons'

export default function Orders_Container() {
  const { AllOrders } = useAppSelector((state: RootState) => state.order)

  return (
    <div className="w-full overflow-x-auto scrollbar-none flex flex-col justify-start items-start relative">
      {/*Section Title*/}
      <h1 className="text-xl font-bold my-4 text-primary flex justify-between items-center">
        <icon.MdOutlineLocalShipping className="text-3xl mx-2" />
        All Orders {`(${AllOrders?.orders?.length})`}
      </h1>
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
