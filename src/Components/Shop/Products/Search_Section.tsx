import { RootState, useAppDispatch, useAppSelector } from "@/libs/store"
import { setSearchTextRedux } from '@/Feature/Slices/ProductsSlice';
import Sort_DropDown from "@/Utils/Sort_DropDown";


export default function Search_Section() {

  const { AllProducts } = useAppSelector((state: RootState) => state.product)
  const dispatch = useAppDispatch()
  //Search Handeler
  const SearchHandler = (e: string) => {
    dispatch(setSearchTextRedux(e))
  }

  return (
    <div className="w-full text-[8px] md:text-[12px] flex justify-between items-center p-2 md:p-5 gap-5 rounded md:rounded-lg bg-[#F7F8FD]">
      {/*Products Count*/}
      <span className="text-[#9B9BB4] text-[8px] md:text-[12px] font-[400]">{AllProducts?.products?.length} products</span>
      {/*Search Input*/}
      <input onChange={(e) => SearchHandler(e.target.value)} type="text" name="" id="" className="outline-none border-none h-full flex-1" placeholder="Search For Product..." />
      {/*Filter Option*/}
      <Sort_DropDown />
    </div>
  )
}
