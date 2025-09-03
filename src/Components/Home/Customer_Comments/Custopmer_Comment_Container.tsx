import Porduct_Advertising from "@/Components/Products/Porduct_Advertising";

export default function Customer_Comments_Container() {
  return (
    <section className="w-[90%]  flex justify-between items-start mt-5 gap-5">
        {/*Aside Comment Section*/}
        <aside className="w-[20%] hidden md:block">
            {/*Section Title*/}
           <h2 className="max-w-full uppercase font-[600] text-[15px] text-[#202435]">Customer Comment</h2>
            {/*Content*/}
            <div className="py-5 px-4 bg-[#FFFBEC] mt-5  rounded-[15px]">
                <h3 className="font-[600] text-[14px]">The Best Marketplace</h3>
                <p className="text-[#71778E] font-[400] text-[13px]">Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed doeiusmod tempor incididunt ut.</p>
                {/*Custommer Information*/}
                <div className="flex gap-2 justify-start items-center mt-[25px]">
                    <img className="rounded-full" src="https://i.pravatar.cc/150?img=3" alt="user" width={50} height={50}/>
                    <div className="details flex flex-col justify-start items-center">
                        <h4 className="text-[#202435] text-[14px] font-[600]">Tina Mcdonnell</h4>
                        <span className="text-[#202435] text-[12px] font-[400] opacity-50">Sales Manager</span>
                    </div>
                </div>
            </div>
        </aside> 
        {/*Products Advertising*/}
        <div className="w-full md:w-[75%] flex justify-between items-end h-full gap-5 pt-[27px]">
            {/*Advertising Product Card*/}
            <Porduct_Advertising img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756217706/Home-1-Newproduct-1_fs9art.png'} header={'Weekend Discount 40%'} title={'Legumes & Cereals'} description={'Feed your family the best'} href={'/'} />
            <Porduct_Advertising img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756217717/Home-1-Newproduct-2_swn7pv.png'} header={'Weekend Discount 40%'} title={'Dairy & Eggs'} description={'A different kind of grocery store'} href={'/'} />
        </div>
    </section>
  )
}

