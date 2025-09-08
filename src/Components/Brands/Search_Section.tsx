import { setSearchTextRedux } from "@/Feature/Slices/ProductsSlice"
import { useAppDispatch } from "@/libs/store"
import Sort_DropDown from "@/Utils/Sort_DropDown";

export default function Search_Section({ ProductsCount }: { ProductsCount: number }) {
  const dispatch = useAppDispatch()
  //Search Handeler
  const SearchHandler = (e: string) => {
    dispatch(setSearchTextRedux(e))
  }
  
  return (
    <div className="w-full flex justify-between items-center p-5 gap-5  rounded-lg bg-[#F7F8FD]">
      {/*Products Count*/}
      <span className="text-[#9B9BB4] text-[12px] font-[400]">{ProductsCount} products</span>
      {/*Search Input*/}
      <input onChange={(e) => SearchHandler(e.target.value as string)} type="text" name="" id="" className="outline-none border-none h-full flex-1" placeholder="Search For Product..." />
      {/*Filter Option*/}
        <Sort_DropDown />
    </div>
  )
}
