
export default function Pagination() {
  return (
    <div className="w-full flex justify-center items-center my-[20px]">
        <div className="w-[50%] flex justify-center items-center gap-2">
            {/*Next Button*/}
            <button>Next</button>
            {/*Pages number*/}
            <button className="rounded-full hover:bg-primary hover:text-white duration-150 cursor-pointer p-2 w-5 h-5 flex justify-center items-center ">1</button>
            <button className="rounded-full hover:bg-primary hover:text-white duration-150 cursor-pointer p-2 w-5 h-5 flex justify-center items-center ">2</button>
            <button className="rounded-full hover:bg-primary hover:text-white duration-150 cursor-pointer p-2 w-5 h-5 flex justify-center items-center bg-primary text-white ">3</button>
            <button className="rounded-full hover:bg-primary hover:text-white duration-150 cursor-pointer p-2 w-5 h-5 flex justify-center items-center ">...</button>
            <button className="rounded-full hover:bg-primary hover:text-white duration-150 cursor-pointer p-2 w-5 h-5 flex justify-center items-center ">5</button>
            <button className="rounded-full hover:bg-primary hover:text-white duration-150 cursor-pointer p-2 w-5 h-5 flex justify-center items-center ">6</button>
            <button className="rounded-full hover:bg-primary hover:text-white duration-150 cursor-pointer p-2 w-5 h-5 flex justify-center items-center ">7</button>
            {/*Prev Button*/}
            <button>Prev</button>
        </div>
    </div>
  )
}
