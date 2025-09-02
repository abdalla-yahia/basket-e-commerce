import Filter_Title from "./Filter_Title";

export default function Filter_By_Price({price,setPrice}:{price: {min:string,max:string},setPrice:(arg0:{min:string,max:string})=>void}) {
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
                <input onChange={(e)=>setPrice({...price,min:e.target.value})} className="bg-[#F3F4F7] rounded p-3 w-full" type="number" min={0} max={99999} name="Min" id="" placeholder="0"/>
            </div>
            <span className="mx-[15px]">ـــ</span>
            {/*Price To*/}
            <div className="flex flex-col justify-start items-start gap-2">
                {/*Title & Input*/}
                <span className="text-[#71778E] text-[13px] font-[400]" style={{lineHeight:'19.5px',letterSpacing:'-0.1px'}}>To</span>
                <input onChange={(e)=>setPrice({...price,max:e.target.value})} className="bg-[#F3F4F7] rounded p-3 w-full" type="number" min={0} max={99999} name="Max" id="" placeholder="65.00"/>
            </div>
        </div>
    </div>
  )
}
