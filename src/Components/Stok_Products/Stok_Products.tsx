import Image from "next/image";

export default function Stok_Products() {
  return (
    <div className='flex justify-between items-start h-[240px] mt-5 overflow-hidden  rounded-2xl border border-[#E4E5EE]'>
        {/*Main Product*/}
        <div className='flex flex-col h-[250px] justify-center items-center p-5 border border-[#E4E5EE]'>
            <Image  src="https://res.cloudinary.com/dghqvxueq/image/upload/v1756257568/product_9_io0fca.png" alt="image-" width={300} height={300}/>
            {/*Product Title*/}
            <h3 className="text-[14px] text-[#202435] font-[600]" style={{lineHeight:'16.8px'}}>Beverages</h3>
            {/*Product Quantity*/}
            <span className="text-[12px] text-[#202435] font-[300]" style={{lineHeight:'18px',letterSpacing:'-0.1px'}}>11 Items</span>
        </div>
        {/*Items Container*/}
        <div className="flex justify-start items-start flex-wrap">
            {/*Items*/}
            <div className="w-1/4 h-1/2 flex justify-start items-center gap-2 p-5 border border-[#E4E5EE]">
                <Image src="https://res.cloudinary.com/dghqvxueq/image/upload/v1756257566/product_10_lnu3vr.png" alt="image-" width={80} height={50}/>
                {/*Content*/}
                <div className="flex flex-col justify-start items-start gap-1">
                    {/*Product Title*/}
                    <h3 className="text-[14px] text-[#202435] font-[600]" style={{lineHeight:'16.8px'}}>Biscuits & Snacks</h3>
                    {/*Product Quantity*/}
                    <span className="text-[12px] text-[#202435] font-[300]" style={{lineHeight:'18px',letterSpacing:'-0.1px'}}>6 Items</span>
                </div>
            </div>
            <div className="w-1/4 h-1/2 flex justify-start items-center gap-2 p-5 border border-[#E4E5EE]">
                <Image src="https://res.cloudinary.com/dghqvxueq/image/upload/v1756265579/product_1_hynvm1.jpg" alt="image-" width={80} height={50}/>
                {/*Content*/}
                <div className="flex flex-col justify-start items-start gap-1">
                    {/*Product Title*/}
                    <h3 className="text-[14px] text-[#202435] font-[600]" style={{lineHeight:'16.8px'}}>Breads & Bakery</h3>
                    {/*Product Quantity*/}
                    <span className="text-[12px] text-[#202435] font-[300]" style={{lineHeight:'18px',letterSpacing:'-0.1px'}}>6 Items</span>
                </div>
            </div>
            <div className="w-1/4 h-1/2 flex justify-start items-center gap-2 p-5 border border-[#E4E5EE]">
                <Image src="https://res.cloudinary.com/dghqvxueq/image/upload/v1756257571/product_11_encx1o.png" alt="image-" width={80} height={50}/>
                {/*Content*/}
                <div className="flex flex-col justify-start items-start gap-1">
                    {/*Product Title*/}
                    <h3 className="text-[14px] text-[#202435] font-[600]" style={{lineHeight:'16.8px'}}>Breakfast & Dairy</h3>
                    {/*Product Quantity*/}
                    <span className="text-[12px] text-[#202435] font-[300]" style={{lineHeight:'18px',letterSpacing:'-0.1px'}}>8 Items</span>
                </div>
            </div>
            <div className="w-1/4 h-1/2 flex justify-start items-center gap-2 p-5 border border-[#E4E5EE]">
                <Image src="https://res.cloudinary.com/dghqvxueq/image/upload/v1756257564/product_12_po2ckj.png" alt="image-" width={80} height={50}/>
                {/*Content*/}
                <div className="flex flex-col justify-start items-start gap-1">
                    {/*Product Title*/}
                    <h3 className="text-[14px] text-[#202435] font-[600]" style={{lineHeight:'16.8px'}}>Frozen Foods</h3>
                    {/*Product Quantity*/}
                    <span className="text-[12px] text-[#202435] font-[300]" style={{lineHeight:'18px',letterSpacing:'-0.1px'}}>7 Items</span>
                </div>
            </div>
            <div className="w-1/4 h-1/2 flex justify-start items-center gap-2 p-5 border border-[#E4E5EE]">
                <Image src="https://res.cloudinary.com/dghqvxueq/image/upload/v1756257571/product_15_zh36lc.png" alt="image-" width={80} height={50}/>
                {/*Content*/}
                <div className="flex flex-col justify-start items-start gap-1">
                    {/*Product Title*/}
                    <h3 className="text-[14px] text-[#202435] font-[600]" style={{lineHeight:'16.8px'}}>Fruits & Vegetables</h3>
                    {/*Product Quantity*/}
                    <span className="text-[12px] text-[#202435] font-[300]" style={{lineHeight:'18px',letterSpacing:'-0.1px'}}>11 Items</span>
                </div>
            </div>
            <div className="w-1/4 h-1/2 flex justify-start items-center gap-2 p-5 border border-[#E4E5EE]">
                <Image src="https://res.cloudinary.com/dghqvxueq/image/upload/v1756257569/product_14_kmscyz.png" alt="image-" width={80} height={50}/>
                {/*Content*/}
                <div className="flex flex-col justify-start items-start gap-1">
                    {/*Product Title*/}
                    <h3 className="text-[14px] text-[#202435] font-[600]" style={{lineHeight:'16.8px'}}>Grocery & Staples</h3>
                    {/*Product Quantity*/}
                    <span className="text-[12px] text-[#202435] font-[300]" style={{lineHeight:'18px',letterSpacing:'-0.1px'}}>7 Items</span>
                </div>
            </div>
            <div className="w-1/4 h-1/2 flex justify-start items-center gap-2 p-5 border border-[#E4E5EE]">
                <Image src="https://res.cloudinary.com/dghqvxueq/image/upload/v1756257570/product_13_slzaqw.png" alt="image-" width={80} height={50}/>
                {/*Content*/}
                <div className="flex flex-col justify-start items-start gap-1">
                    {/*Product Title*/}
                    <h3 className="text-[14px] text-[#202435] font-[600]" style={{lineHeight:'16.8px'}}>Household Needs</h3>
                    {/*Product Quantity*/}
                    <span className="text-[12px] text-[#202435] font-[300]" style={{lineHeight:'18px',letterSpacing:'-0.1px'}}>1 Item</span>
                </div>
            </div>
            <div className="w-1/4 h-1/2 flex justify-start items-center gap-2 p-5 border border-[#E4E5EE]">
                <Image src="https://res.cloudinary.com/dghqvxueq/image/upload/v1756265961/product_2_umoiz4.jpg" alt="image-" width={80} height={50}/>
                {/*Content*/}
                <div className="flex flex-col justify-start items-start gap-1">
                    {/*Product Title*/}
                    <h3 className="text-[14px] text-[#202435] font-[600]" style={{lineHeight:'16.8px'}}>Meats & Seafood</h3>
                    {/*Product Quantity*/}
                    <span className="text-[12px] text-[#202435] font-[300]" style={{lineHeight:'18px',letterSpacing:'-0.1px'}}>5 Items</span>
                </div>
            </div>
        </div>
    </div>
  )
}
