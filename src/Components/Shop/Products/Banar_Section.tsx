
export default function Banar_Section() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-2 p-[40px] bg-no-repeat bg-cover' style={{backgroundImage:`url(https://res.cloudinary.com/dghqvxueq/image/upload/v1756307430/shope_n9bjrk.png)`}}>
        {/*Header*/}
        <h2 className="text-[#202435] text-[24px] font-[200]">Organic Meals Prepared</h2>
        {/*Title*/}
        <h1 className="text-[#202435] text-[30px] font-[600]">
            Delivered to 
            <span className="text-green-500 text-[30px] font-[600] mx-3">your Home</span>
        </h1>
        {/*Description*/}
        <p className="text-[#9B9BB4] text-[12px] font-[400]">Fully prepared & delivered nationwide.</p>
    </div>
  )
}
