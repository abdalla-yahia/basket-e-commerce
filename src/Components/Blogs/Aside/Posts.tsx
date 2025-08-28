import Filter_Title from "@/Components/Shop/Aside_Filter/Filter/Filter_Title";
import Image from "next/image";

export default function Posts({title}:{title:string}) {
  return (
    <div className="flex flex-col">
                {/*Title*/}
                <Filter_Title title={title} />
                <div className="flex flex-col gap-3 justify-start items-start border border-[#EDEEF5] p-2">
                    {/*Map Posts */}
                    <div className="flex justify-center items-center w-fit h-fit gap-4">
                        {/*Image*/}
                        <div className="relative rounded-full flex justify-center items-center w-[60px] h-[60px]">
                            <Image className="rounded-full " src={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756340039/post_2_orlqb5.png'} alt="" width={50} height={50} />
                            <span className="rounded-full w-4 h-4 bg-primary text-white absolute top-2 -right-1 p-1 flex justify-center items-center">1</span>
                        </div>
                        <span className="text-[#202435] text-[14px] font-[500]">But I must explain to you how all this mistaken idea</span>
                    </div>
                    <div className="flex justify-center items-center w-fit h-fit gap-4">
                        {/*Image*/}
                        <div className="relative rounded-full flex justify-center items-center w-[60px] h-[60px]">
                            <Image className="rounded-full " src={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756340153/post_1_t4llhv.png'} alt="" width={50} height={50} />
                            <span className="rounded-full w-4 h-4 bg-primary text-white absolute top-2 -right-1 p-1 flex justify-center items-center">2</span>
                        </div>
                        <span className="text-[#202435] text-[14px] font-[500]">The Problem With Typefaces on the Web</span>
                    </div>
                    <div className="flex justify-center items-center w-fit h-fit gap-4">
                        {/*Image*/}
                        <div className="relative rounded-full flex justify-center items-center w-[60px] h-[60px]">
                            <Image className="rounded-full " src={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756336018/blog_1_fj6q9z.png'} alt="" width={50} height={50} />
                            <span className="rounded-full w-4 h-4 bg-primary text-white absolute top-2 -right-1 p-1 flex justify-center items-center">3</span>
                        </div>
                        <span className="text-[#202435] text-[14px] font-[500]">English Breakfast Tea With Tasty Donut Desserts</span>
                    </div>
                </div>
            </div>
  )
}
