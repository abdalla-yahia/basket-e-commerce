'use client'
import Link from "next/link";

export default function Slider({ img1, text, textColor, paragraph, paragraphColor, paragraph2, paragraph2Color, bgcolor }: { img1: string, text: string, textColor: string, paragraph: string, paragraphColor: string, paragraph2: string, paragraph2Color: string, bgcolor: string }) {
  return (
    <div style={{backgroundImage:`url(${img1})`}} className={` ${bgcolor} relative bg-top-right bg-cover bg-no-repeat w-full h-[484px] flex flex-col md:flex-row justify-center md:justify-between items-center `}>
      <div className="w-full md:w-1/2  left-[8%]  absolute flex flex-col justify-center items-start gap-5 mb-8">
        <h1 className={`text-3xl md:text-5xl font-extrabold ${textColor} text-start`} style={{lineHeight:'57.6px'}}>{text}</h1>
        <p className={`text-[16px] ${paragraphColor}  font-[400]  text-center`} >{paragraph}</p>
        <div>
        <span className="text-[16px] mr-2 ">from</span>
        <span style={{fontFamily:'Dosis'}} className={`text-4xl font-extrabold ${paragraph2Color} text-center`}>{paragraph2}</span>
        </div>
        <div className="w-full md:w-[50%]">
          <Link href={'/products/shop'}>
            <button  className={`${bgcolor} text-white px-6 py-3 rounded-[50px] cursor-pointer text-sm `} >Shop Now &rarr;</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
