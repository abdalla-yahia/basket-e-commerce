import { setSearchTextRedux } from "@/Feature/Slices/ProductsSlice";
import { useAppDispatch } from "@/libs/store";
import {setSortRedux} from '@/Feature/Slices/ProductsSlice';

export default function Search_Section({ ProductCount }: { ProductCount: number }) {

  const dispatch = useAppDispatch()
  //Search Handeler
  const SearchHandler = (e: string) => {
    dispatch(setSearchTextRedux(e))
  }
  //Set Sort 
  const SortProductsHandler = (e:string)=>{
    dispatch(setSortRedux(e))
  }
  return (
    <div className="w-full flex justify-between items-center p-5 gap-5  rounded-lg bg-[#F7F8FD]">
      {/*Products Count*/}
      <span className="text-[#9B9BB4] text-[12px] font-[400]">{ProductCount} products</span>
      {/*Search Input*/}
      <input onChange={(e) => SearchHandler(e.target.value)} type="text" name="" id="" className="outline-none border-none h-full flex-1" placeholder="Search For Product..." />
      {/*Filter Option*/}
      <div className="flex justify-between items-center">
        <span className="text-[#9B9BB4] text-[12px] font-[400]">Sort by:</span>
        <select onChange={(e)=>SortProductsHandler(e.target.value)} name="" id="" className="text-[#202435] text-[13px] font-[500]">
            <option value="az">Alphabetical, A - Z</option>
            <option value="za">Alphabetical, Z - A</option>
            <option value="new-old">Newest - Oldest</option>
            <option value="old-new">Oldest - Newest</option>
            <option value="price-high-low">Price, High - Low</option>
            <option value="price-low-high">Price, Low - High</option>
        </select>
      </div>
    </div>
  )
}
