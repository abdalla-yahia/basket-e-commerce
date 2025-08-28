import Filter_Title from "@/Components/Shop/Aside_Filter/Filter/Filter_Title";
import Image from "next/image";

export default function Widget_Banner({title}:{title:string}) {
  return (
      <div className="flex flex-col w-full">
        {/*Title*/}
        <Filter_Title title={title} />
        {/*Content Section*/}
        <Image src={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756310846/shop-filter_e4sssz.png'} alt="Widget Banner" width={150} height={150} />
    </div>
  )
}
