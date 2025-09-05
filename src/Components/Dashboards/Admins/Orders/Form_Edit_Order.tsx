'use client'
import { useActionState, useEffect } from "react";
import * as icon from '@/Utils/Icons/Icons';
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import { updateOrder } from "@/Feature/Actions/OrdersActions";
import { UpdateOrder } from "@/Interfaces/OrderInterface";

export default function Edit_Order_Form({ Order, setIsToggle }: { Order: UpdateOrder, setIsToggle: (arg0: boolean) => void }) {
  const { order: EditOrder, error, loading } = useAppSelector((state: RootState) => state.order)

  const dispatch = useAppDispatch()
  //Create Item Handler
  const UpdateItem = (prevState: UpdateOrder, formData: FormData): UpdateOrder => {
    const formstate = {
      ...prevState,
      id: Order?.id,
      status: formData.get('OrderStatus') || Order?.status
    }

    //Send Data 
    dispatch(updateOrder(formstate as UpdateOrder))
    return formstate as UpdateOrder
  }
  //Initial State
  const InitialState = {
    id: Order?.id,
    status: Order?.status
  }

  const [, ActionStat] = useActionState(UpdateItem, InitialState)
  useEffect(()=>{
    if (EditOrder?.status == 201) {
      setIsToggle(false)
    }
  },[EditOrder?.status])
  return (
    <div className="w-[50%] absolute z-50 top-0 bg-[#ddd] rounded left-0 flex flex-col justify-start items-center gap-5 p-8">
      {/*Close Form*/}
      <icon.IoClose onClick={() => setIsToggle(false)} className="text-xl absolute top-3 right-3 cursor-pointer" />
      {/*Section Title*/}
      <h1 className="text-2xl font-[600] gap-2 mb-5 text-primary mr-auto flex justify-center items center">
        {/* Icon */}
        <icon.IoPricetagsSharp />
        Update Order
      </h1>
      {/*Form */}
      <form action={ActionStat} className="w-[70%]">

        {/*Order Status*/}
        <label htmlFor="OrderStatus">Order Status:</label>
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <select name="OrderStatus" id="OrderStatus" className='p-2 bg-[#F3F4F7] rounded w-full'>
            <option className="capitalize " value="PENDING">{'PENDING'.toLowerCase()}</option>
            <option className="capitalize " value="PREPARING">{'PREPARING'.toLowerCase()}</option>
            <option className="capitalize " value="SHIPPED">{'SHIPPED'.toLowerCase()}</option>
            <option className="capitalize " value="DELIVERED">{'DELIVERED'.toLowerCase()}</option>
            <option className="capitalize " value="CANCELED">{'CANCELED'.toLowerCase()}</option>
            <option className="capitalize " value="RETURNED">{'RETURNED'.toLowerCase()}</option>
          </select>
        </div>

        {/*Submit Button*/}
        {
          error && <p className="text-red-500">{error}</p>
        }
        {
          EditOrder?.status === 201 && <p className="text-green-500">Updated Order Successfully</p>
        }
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <button type="submit" id="OrderDescription" className='p-2 border border-[#F3F4F7] text-white cursor-pointer bg-primary rounded w-full'>
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
