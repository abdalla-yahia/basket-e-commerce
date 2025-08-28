import Filter_Title from "@/Components/Shop/Aside_Filter/Filter/Filter_Title";

export default function Tags_Section({title}:{title:string}) {
  return (
      <div className="flex flex-col w-full">
        {/*Title*/}
        <Filter_Title title={title} />
        {/*Content Section*/}
            <div className="flex flex-wrap gap-2">
                <span className="border border-[#EDEEF5] p-2 rounded">ecommerce</span>
                <span className="border border-[#EDEEF5] p-2 rounded">food</span>
                <span className="border border-[#EDEEF5] p-2 rounded">grocery</span>
                <span className="border border-[#EDEEF5] p-2 rounded">klbtheme</span>
                <span className="border border-[#EDEEF5] p-2 rounded">organic</span>
                <span className="border border-[#EDEEF5] p-2 rounded">shop</span>
                <span className="border border-[#EDEEF5] p-2 rounded">shopify</span>
                <span className="border border-[#EDEEF5] p-2 rounded">store</span>
            </div>
    </div>
  )
}
