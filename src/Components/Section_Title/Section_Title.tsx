import Link from "next/link";

export default function Section_Title({title,description,href}:{title:string,description:string,href:string}) {
  return (
    <div className="w-full flex justify-between items-center">
        {/*Title*/}
        <div>
            <h1 className="font-[600] text-[#202435] uppercase text-[20px]" style={{fontFamily:'Dosis',lineHeight:'24px',alignItems:'middle'}}>{title}</h1>
            <p className="font-[400] text-[12px] text-[#9B9BB4]" style={{lineHeight:'18px',letterSpacing:'-0.1px'}}>{description}</p>
        </div>
        <button className=" cursor-pointer border border-[#D9D9E9] rounded-[50px] px-8 py-3 hover:bg-primary hover:text-[#FFFF] duration-300">
            <Link href={href}>View All</Link>
             &rarr; 
             </button>
    </div>
  )
}
