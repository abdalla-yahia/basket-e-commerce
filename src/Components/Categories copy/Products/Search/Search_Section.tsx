
export default function Search_Section() {
  return (
    <div className="w-full flex justify-between items-center p-5 gap-5  rounded-lg bg-[#F7F8FD]">
        {/*Products Count*/}
        <span className="text-[#9B9BB4] text-[12px] font-[400]">62 products</span>
        {/*Search Input*/}
        <input type="text" name="" id="" className="outline-none border-none h-full flex-1" placeholder="Search For Product..."/>
        {/*Filter Option*/}
        <div className="flex justify-between items-center">
            <span className="text-[#9B9BB4] text-[12px] font-[400]">Sort by:</span>
            <select name="" id="" className="text-[#202435] text-[13px] font-[500]">
                <option value="">Alphabetically, A-Z</option>
            </select>
        </div>
    </div>
  )
}
