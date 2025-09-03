import Link from "next/link";

export default function Image_Section({img,header,title,description,text,price,href}:{img:string,header:string,title:string,description:string,text:string,price:string,href?:string}) {
  return (
    <aside className="hidden md:block w-[20%] h-[400px] pt-[40px] pl-[40px] rounded-[7px] bg-cover bg-top-right bg-no-repeat bg-green-500" style={{backgroundImage:`url(${img})`}}>
        {/*Content*/}
        <div className="flex flex-col justify-center items-start gap-3">
            <p className="text-[#FFFFFF] text-[13px] font-[400]" style={{lineHeight:'19.5px'}}>{header}</p>
            <h1 className="text-[#202435] text-[22px] font-[200]" style={{lineHeight:'26.4px',letterSpacing:'-0.8px'}}>{title}</h1>
            <h2 className="text-[#202435] text-[24px] font-[600]" style={{lineHeight:'28.8px',letterSpacing:'-0.8px'}}>{description}</h2>
            <span className="text-[#202435] text-[12px] font-[400]" style={{lineHeight:'12px',letterSpacing:'-0.1px'}}>{text}</span>
            <h4 className="text-[#D51243] text-[30px] font-[600]" style={{lineHeight:'30px',letterSpacing:'-0.1px',fontFamily:'Dosis'}}>{price}</h4>
            {href && <button className=" cursor-pointer border border-[#D9D9E9] rounded-[50px] px-8 py-3 bg-primary text-[#FFFF] duration-300">
            <Link href={href ||''}>Shop Now</Link>
             &rarr; 
             </button>}
        </div>
    </aside>
  )
}
