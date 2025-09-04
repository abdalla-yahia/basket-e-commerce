
export default function Banar_Section({ img, title, header, paragraph }: { img: string, title: string, header: string, paragraph: string }) {
  return (
    <div className='w-full flex flex-col justify-center rounded md:rounded-xl items-center gap-2 p-[10px] md:p-[40px] bg-no-repeat bg-cover' style={{ backgroundImage: `url(${img})` }}>
      {/*Header*/}
      <h2 className="text-[#202435] text-[14px] md:text-[24px] font-[200]">{title}</h2>
      {/*Title*/}
      <h1 className="text-[#202435] text-[16px] md:text-[30px] font-[600]">
        Delivered to
        <span className="text-green-500 text-[16px] md:text-[30px] font-[600] mx-3">{header}</span>
      </h1>
      {/*Description*/}
      <p className="text-[#9B9BB4] text-[10px] md:text-[12px] font-[400]">{paragraph}</p>
    </div>
  )
}
