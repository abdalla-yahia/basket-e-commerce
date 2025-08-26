'use client'
import Section_Title from "@/Components/Section_Title/Section_Title";
import Image from "next/image";
import { useState } from "react";

export default function Hot_Products_Section() {
    const [days,setDays]=useState(0)
    const [houres,setHoures]=useState(0)
    const [minutes,setminutes]=useState(0)
    const [seconds,setSeconds]=useState(0)
    const [progress,setProgress]=useState(0)

   const newYear = new Date(new Date().getFullYear() + 1, 0, 1);

    setInterval(() => {
     const now = new Date();
     const diffrent = +newYear - +now;

     if (diffrent <= 0) {
       return;
     }

     //Get Progress Bar Width
    const startOfYear = new Date(now.getFullYear(), 0, 1);  
    const endOfYear   = new Date(now.getFullYear() + 1, 0, 1);

    const total = +endOfYear - +startOfYear; 
    const passed = +now - +startOfYear;      

    setProgress((passed / total) * 100);
     
     //Set Timer
  setDays(Math.floor(diffrent / (1000 * 60 * 60 * 24)));
  setHoures(Math.floor((diffrent / (1000 * 60 * 60)) % 24));
  setminutes(Math.floor((diffrent / (1000 * 60)) % 60));
  setSeconds(Math.floor((diffrent / 1000) % 60));

}, 1000);
  return (
    <section className="w-[100%]">
        {/*Section Title*/}
        <Section_Title title={'HOT PRODUCT FOR THIS WEEK'} description={"Don't miss this opportunity at a special discount just for this week."} href={'/'}/>
        {/*Products*/}
        <div className="w-full bg-white flex justify-between rounded-2xl items-start p-5 mt-3 border border-[#ED174A]">
            {/*Image Section*/}
            <div className="relative w-[20%]">
                {/*Image*/}
                <Image src={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756239910/Home-1-Hot-2_tv7gub.png'} alt="" width={150} height={100}/>
                {/*Offer*/}
                <span className=" absolute top-0 left-0 rounded-full p-3 text-center w-[66px] h-[66px] bg-[#ED174A] text-white text-[24px] font-[600]" style={{fontFamily:'Dosis',letterSpacing:'-0.1px',lineHeight:'36px'}}>18%</span>
            </div>
            {/*Content Section*/}
            <div className="flex flex-col w-[80%] gap-3 justify-start items-start ">
                {/*Price*/}
                <div className="flex justify-between items-center gap-2">
                    {/*Old Price*/}
                    <p className="font-[600] text-[#C2C2D3] text-[15.3px] line-through" style={{lineHeight:'22.95px',letterSpacing:'-0.1px',fontFamily:'Dosis'}}>$5.49</p>
                    {/*Price*/}
                    <p className="font-[600] text-[#D51243] text-[18px]" style={{lineHeight:'27px',letterSpacing:'-0.1px',fontFamily:'Dosis'}}>$4.49</p>
                </div>
                {/*Title*/}
                <h2 className="font-[500] text-[18px]" style={{lineHeight:'25.2px'}}>Chobani Complete Vanilla Greek Yogurt</h2>
                {/*In Stok*/}
               <h2 className="font-[600] uppercase text-[#00B853] text-[11px]" style={{lineHeight:'16.5px',letterSpacing:'-0.1px',fontFamily:'Dosis'}}>In stock</h2>
                {/*Progress*/}
                <div className="w-[80%] h-3 bg-[#EDEEF5] rounded-2xl">
                    <div style={{width:`${progress}%`}} className={`relative bg-gradient-to-r from-[#D51243] to-[#FFCD00] h-3 rounded-2xl`}>
                        <span className="progress_persentage absolute bg-gradient-to-r from-[#D51243] to-[#FFCD00]  -top-[35px] text-[12px] text-white -right-5 bg-primary px-2 py-1 rounded-sm animate-bounce">{progress.toFixed(0)}%</span>
                    </div>
                </div>
                {/*Timer*/}
                <div className="flex justify-between items-center">
                    {/*Days*/}
                    <span className="bg-[#EDEEF5] px-2 py-1 mx-1 rounded-[3px]">{days   <= 9 ? `0${days}`: days}</span>:
                    {/*Hours*/}
                    <span className="bg-[#EDEEF5] px-2 py-1 mx-1 rounded-[3px]">{houres <= 9 ? `0${houres}` : houres}</span>:
                    {/*Minutes*/}
                    <span className="bg-[#EDEEF5] px-2 py-1 mx-1 rounded-[3px]">{minutes <=9 ? `0${minutes}`: minutes}</span>:
                    {/*Seconds*/}
                    <span className="bg-[#EDEEF5] px-2 py-1 mx-1 rounded-[3px]">{seconds <=9 ?`0${seconds}`: seconds}</span>
                    <p className="text-start mx-2 w-[100px] font-[400] text-[#3E445A]">Remains until the end of the offer</p>
                </div>
            </div>
        </div>
    </section>
  )
}
