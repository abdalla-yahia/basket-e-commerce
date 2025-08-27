import Filter_Title from "./Filter_Title";

export default function Filter_By_Category() {
  return (
    <div className="flex flex-col justify-between items-start">
        {/*Filter Title*/}
        <Filter_Title title="Product Categories" />
        {/*Category Filter*/}
        <ul className="flex flex-col justify-start items-start gap-2 ">
            <li className="flex justify-start items-start gap-4"><input className=" appearance-none bg-white border border-[#D9D9E9]  p-2 hover:bg-primary/50 checked:bg-primary " type="checkbox" name="" id="" /><label className="text-[#71778E] text-[14px] font-[400]" htmlFor="">Beverages</label></li>
            <li className="flex justify-start items-start gap-4"><input className=" appearance-none bg-white border border-[#D9D9E9]  p-2 hover:bg-primary/50 checked:bg-primary " type="checkbox" name="" id="" /><label className="text-[#71778E] text-[14px] font-[400]" htmlFor="">Biscuits & Snacks</label></li>
            <li className="flex justify-start items-start gap-4"><input className=" appearance-none bg-white border border-[#D9D9E9]  p-2 hover:bg-primary/50 checked:bg-primary " type="checkbox" name="" id="" /><label className="text-[#71778E] text-[14px] font-[400]" htmlFor="">Breads & Bakery</label></li>
            <li className="flex justify-start items-start gap-4"><input className=" appearance-none bg-white border border-[#D9D9E9]  p-2 hover:bg-primary/50 checked:bg-primary " type="checkbox" name="" id="" /><label className="text-[#71778E] text-[14px] font-[400]" htmlFor="">Breakfast & Dairy</label></li>
            <li className="flex justify-start items-start gap-4"><input className=" appearance-none bg-white border border-[#D9D9E9]  p-2 hover:bg-primary/50 checked:bg-primary " type="checkbox" name="" id="" /><label className="text-[#71778E] text-[14px] font-[400]" htmlFor="">Frozen Foods</label></li>
            <li className="flex justify-start items-start gap-4"><input className=" appearance-none bg-white border border-[#D9D9E9]  p-2 hover:bg-primary/50 checked:bg-primary " type="checkbox" name="" id="" /><label className="text-[#71778E] text-[14px] font-[400]" htmlFor="">Fruits & Vegetables</label></li>
            <li className="flex justify-start items-start gap-4"><input className=" appearance-none bg-white border border-[#D9D9E9]  p-2 hover:bg-primary/50 checked:bg-primary " type="checkbox" name="" id="" /><label className="text-[#71778E] text-[14px] font-[400]" htmlFor="">Grocery & Staples</label></li>
            <li className="flex justify-start items-start gap-4"><input className=" appearance-none bg-white border border-[#D9D9E9]  p-2 hover:bg-primary/50 checked:bg-primary " type="checkbox" name="" id="" /><label className="text-[#71778E] text-[14px] font-[400]" htmlFor="">Household Needs</label></li>
            <li className="flex justify-start items-start gap-4"><input className=" appearance-none bg-white border border-[#D9D9E9]  p-2 hover:bg-primary/50 checked:bg-primary " type="checkbox" name="" id="" /><label className="text-[#71778E] text-[14px] font-[400]" htmlFor="">Meats & Seafood</label></li>
        </ul>
    </div>
  )
}
