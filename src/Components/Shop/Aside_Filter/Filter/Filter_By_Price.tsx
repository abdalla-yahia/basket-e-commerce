import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import Filter_Title from "./Filter_Title";
import { setPriceRedux } from "@/Feature/Slices/ProductsSlice";

export default function Filter_By_Price() {
  const {price} =useAppSelector((state:RootState)=>state.product)
  const dispatch = useAppDispatch()
  
  return (
    <div className="flex flex-col justify-between items-start my-[20px]">
        {/*Filter Title*/}
        <Filter_Title title="Price" />
        {/*Price Filter*/}
        <div className="flex justify-between items-center gap-5">
            {/*Price From*/}
            <div className="flex flex-col justify-start items-start gap-2">
                {/*Title & Input*/}
                <span className="text-[#71778E] text-[13px] font-[400]" style={{lineHeight:'19.5px',letterSpacing:'-0.1px'}}>From</span>
                <input defaultValue={price?.min} onChange={(e)=>dispatch(setPriceRedux({...price,min:e.target.value}))} className="bg-[#F3F4F7] rounded p-3 w-full" type="number" min={0} max={99999} name="Min" id="" placeholder="0"/>
            </div>
            <span className="mx-[15px]">ـــ</span>
            {/*Price To*/}
            <div className="flex flex-col justify-start items-start gap-2">
                {/*Title & Input*/}
                <span className="text-[#71778E] text-[13px] font-[400]" style={{lineHeight:'19.5px',letterSpacing:'-0.1px'}}>To</span>
                <input defaultValue={price?.max} onChange={(e)=>dispatch(setPriceRedux({...price,max:e.target.value}))} className="bg-[#F3F4F7] rounded p-3 w-full" type="number" min={0} max={99999} name="Max" id="" placeholder="65.00"/>
            </div>
        </div>
    </div>
  )
}
