import { RootState, useAppDispatch, useAppSelector } from "@/libs/store"
import { setPageNumberRedux } from "@/Feature/Slices/ProductsSlice";

export default function Pagination({ pagesCount }: { pagesCount: number }) {
  const { pageNumber } = useAppSelector((state: RootState) => state.product)
  const dispatch = useAppDispatch()

  const Buttons = []
  for (let i = 1; i <= pagesCount; i++) {
    Buttons.push(<button onClick={() => dispatch(setPageNumberRedux(i))} className={`${pageNumber === i && 'bg-primary text-white'} rounded-full hover:bg-primary hover:text-white duration-150 cursor-pointer p-2 w-5 h-5 flex justify-center items-center `}>{i}</button>)
  }

  return (
    /**
     * Creat Pagination With This Form  If Count Of pages Greater Than Or Equal 7 Pages
     * Next 1 2 3 ... 6 ... 15 16 17 prev
     * 
     * Creat Pagination With This Form  If Count Of pages Less Than 7 Pages
     * Next 1 2 3 4 5 6 Prev 
     */
    <div className="w-full flex justify-center items-center my-[20px]">
      {
        pagesCount >= 7 ?
          (
            <div className="w-[50%] flex justify-center items-center gap-2">
              {/*Next Button*/}
              <button onClick={() => pageNumber < pagesCount && (dispatch(setPageNumberRedux(pageNumber + 1)))} className={`${pageNumber >= pagesCount ? 'bg-gray-200 text-gray-400 cursor-not-allowed hover:bg-gray-300' : " hover:bg-primary hover:text-white cursor-pointer"} rounded-full  duration-150  p-2  flex justify-center items-center `}>Next</button>
              {/*pagesCount number Start from 1 to 3*/}
              {
                Buttons.slice(0, 3)
              }
              {/*....*/}
              <button className={` cursor-pointer  rounded-full  duration-150  p-2  flex justify-center items-center text-xl `}>...</button>
              {/*Page number greater than 3 or less than 3*/}
              {
                pageNumber > 3 && pageNumber < (pagesCount - 2) &&
                <span className={`bg-primary text-white rounded-full duration-150 cursor-pointer p-2 w-5 h-5 flex justify-center items-center `}>{pageNumber}</span>
              }
              {/*....*/}
              <button className={` cursor-pointer  rounded-full  duration-150  p-2  flex justify-center items-center text-xl `}>...</button>
              {/*pagesCount number Start from Last 3 to final*/}
              {
                Buttons.slice(-3,)
              }
              {/*Prev Button*/}
              <button onClick={() => pageNumber > 1 && (dispatch(setPageNumberRedux(pageNumber - 1)))} className={`${pageNumber <= 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed hover:bg-gray-300' : " hover:bg-primary hover:text-white cursor-pointer"} rounded-full  duration-150  p-2  flex justify-center items-center `}>Prev</button>
            </div>
          )
          : (
            <div className="w-[50%] flex justify-center items-center gap-2">
              {/*Next Button*/}
              <button onClick={() => pageNumber < pagesCount && (dispatch(setPageNumberRedux(pageNumber + 1)))} className={`${pageNumber >= pagesCount ? 'bg-gray-200 text-gray-400 cursor-not-allowed hover:bg-gray-300' : " hover:bg-primary hover:text-white cursor-pointer"} rounded-full  duration-150  p-2  flex justify-center items-center `}>Next</button>
              {
                Buttons
              }
              {/*Prev Button*/}
              <button onClick={() => pageNumber > 1 && (dispatch(setPageNumberRedux(pageNumber - 1)))} className={`${pageNumber <= 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed hover:bg-gray-300' : " hover:bg-primary hover:text-white cursor-pointer"} rounded-full  duration-150  p-2  flex justify-center items-center `}>Prev</button>
            </div>
          )
      }

    </div>
  )
}
