import Image from "next/image";

export default function CopyRights_Credit() {
  return (
    <div className='w-full flex justify-center items-center pb-[40px]'>
        <div className="w-[90%] flex justify-between items center">
            {/*CopyRights*/}
           <span className="font-[400] text-[12px] text-[#202435] opacity-50" style={{lineHeight:'18px',letterSpacing:'-0.1px'}}>Copyright 2025 © All rights reserved by Blackrise Theme</span>
            {/*Credit Cards*/}
            <div className="flex justify-between items-center gap-2">
                <span className="font-[400] text-[12px] text-[#202435] opacity-50" style={{lineHeight:'18px',letterSpacing:'-0.1px'}}>Privacy Policy</span>
                <span className="font-[400] text-[12px] text-[#202435] opacity-50" style={{lineHeight:'18px',letterSpacing:'-0.1px'}}>Terms and Conditions</span>
                <span className="font-[400] text-[12px] text-[#202435] opacity-50" style={{lineHeight:'18px',letterSpacing:'-0.1px'}}>Cookie</span>
                <Image src='https://res.cloudinary.com/dghqvxueq/image/upload/v1756273627/credit-card_atv6sq.png' alt='credit-image' width={300} height={100} />
            </div>
        </div>
    </div>
  )
}
