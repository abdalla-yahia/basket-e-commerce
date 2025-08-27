import Link from "next/link";

export default function Porduct_Advertising({img,header,title,description,href}:{img:string,header:string,title:string,description:string,href:string}) {
  return (
    <div className="rounded-2xl w-full bg-no-repeat bg-top-right bg-cover" style={{backgroundImage:`url(${img})`}}>
        {/*Content*/}
        <div className="flex flex-col justify-start items-start gap-3 p-8">
            <h3 className=" uppercase text-[#00B853] font-[600] text-[14px]" style={{fontFamily:'Dosis',lineHeight:'21px'}}>{header}</h3>
            <h2 className=" text-[#3E445A] font-[600] text-[24px]" style={{letterSpacing:'-0.8px',lineHeight:'28.8px'}}>{title}</h2>
            <p className=" text-[#9B9BB4] font-[400] text-[12px]" style={{letterSpacing:'-0.1px',lineHeight:'18px'}}>{description}</p>
            <button className="bg-[#C2C2D3] rounded-3xl hover:bg-primary duration-100 text-white p-3">
                <Link href={href}>Shop Now</Link>
            </button>
        </div>
    </div>
  )
}
