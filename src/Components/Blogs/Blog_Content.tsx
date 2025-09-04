import Image from 'next/image'

export default function Blog_Content({img,category,title,date,auther,description}:{img:string,category:string,title:string,date:string,auther:string,description:string}) {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-3">
            {/*Image Of Blog*/}
            <Image className="w-full rounded md:rounded-xl" src={img} alt="" width={150} height={150}/>
            {/*Blog Content*/}
            <div className="flex flex-col justify-start items-start gap-3">
                {/*Category*/}
                <span className="text-[#9B9BB4] text-[8px] md:text-[13px] font-[600]">{category}</span>
                {/*Title*/}
                <h2 className="text-[#202435] text-[20px] md:text-[36px] font-[600]">{title}</h2>
                <div className="flex justify-between items-center gap-4">
                    {/*Date Of Publich*/}
                    <span className="text-[#71778E] text-[10px] md:text-[14px] font-[500]">{date}</span>
                    {/*Auther*/}
                    <span className="text-[#202435] text-[10px] md:text-[14px] font-[500]">{auther}</span>
                </div>
                {/*Description*/}
                <p className="text-[#202435] text-[11px] md:text-[15px] font-[400]">{description}</p>
            </div>
        </div>
  )
}
