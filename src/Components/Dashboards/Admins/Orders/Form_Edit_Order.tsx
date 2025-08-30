'use client'
import { useActionState } from "react";
import * as icon from '@/Utils/Icons/Icons';
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/libs/store";
import { updateOrder } from "@/Feature/Actions/OrdersActions";
import { UpdateOrder } from "@/Interfaces/OrderInterface";

export default function Edit_Order_Form({Order,setIsToggle}:{Order:UpdateOrder,setIsToggle:(arg0:boolean)=>void}) {
    const {order:EditOrder,error,loading} = useSelector((state:RootState)=>state.order)

    const dispatch = useAppDispatch()
    //Create Item Handler
    const UpdateItem = (prevState:UpdateOrder,formData:FormData):UpdateOrder=>{
      const formstate= {
        ...prevState,
        id:Order?.id,
        userId:formData.get('OrderTitle') as string || Order?.userId,
        products:formData.get('OrderDescription') || Order?.products,
      }
      //Check Validation 
      console.log(formstate)

      //Send Data 
      dispatch(updateOrder(formstate as UpdateOrder))
      return formstate as UpdateOrder
    }
    //Initial State
    const InitialState = {
      id:Order?.id,
      userId:Order?.userId,
      products:Order?.products,
    }

    const [,ActionStat] = useActionState(UpdateItem,InitialState)
    if(EditOrder?.order?.title){
      setIsToggle(false)
    }
  return (
    <div className="w-[50%] absolute -top-[100%] bg-[#ddd] rounded left-0 flex flex-col justify-start items-center gap-5 p-8">
      {/*Close Form*/}
      <icon.IoClose onClick={()=>setIsToggle(false)} className="text-xl absolute top-3 right-3 cursor-pointer"/>
      {/*Section Title*/}
        <h1 className="text-2xl font-[600] gap-2 mb-5 text-primary mr-auto flex justify-center items center">
            {/* Icon */}
          <icon.IoPricetagsSharp />
          Update Order
          </h1>
      {/*Form */}
      <form action={ActionStat} className="w-[70%]">
        
        {/*Order UserId*/}
          <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
              <label htmlFor="OrderTitle">Order Title:</label>
              <input placeholder={Order?.userId} type="text" name="OrderTitle" id="OrderTitle" className='p-2 bg-[#F3F4F7] rounded w-full'/>
          </div>
        {/*Order */}
          <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
              <label htmlFor="OrderDescription">Order Description:</label>
              <input placeholder='Order Products' type="text" name="OrderDescription" id="OrderDescription" className='p-2 bg-[#F3F4F7] rounded w-full'/>
          </div>

        {/*Submit Button*/}
        {
          error && <p className="text-red-500">{error}</p>
        }
        {
          EditOrder?.order?.title && <p className="text-green-500">Created Order Successfully</p>
        }
          <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
            <button type="submit" id="OrderDescription" className='p-2 border border-[#F3F4F7] text-white cursor-pointer bg-primary rounded w-full'>
              {loading ?(
                    <>
                    <div className="w-full flex justify-center items-center gap-2">
                            <icon.LuLoader className="h-4 w-4 animate-spin" />
                    Saving...
                    </div>
                    </>
                ) 
                :'Save'}
              </button>
          </div>
      </form>
    </div>
  )
}
