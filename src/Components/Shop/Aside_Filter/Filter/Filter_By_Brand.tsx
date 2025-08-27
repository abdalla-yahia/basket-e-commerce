import Filter_Title from "./Filter_Title";

export default function Filter_By_Brand() {
  return (
    <div className="flex flex-col justify-between items-start my-[20px]">
        {/*Filter Title*/}
        <Filter_Title title="Brands" />
        {/*Brand Filter*/}
        <ul className="flex flex-col justify-start items-start gap-2 ">
            <li className="flex justify-start items-start gap-4"><input type="checkbox" name="" id="" /><label className="text-[#71778E] text-[14px] font-[400]" htmlFor="">Beverages</label></li>
            <li className="flex justify-start items-start gap-4"><input type="checkbox" name="" id="" /><label className="text-[#71778E] text-[14px] font-[400]" htmlFor="">Biscuits & Snacks</label></li>
            <li className="flex justify-start items-start gap-4"><input type="checkbox" name="" id="" /><label className="text-[#71778E] text-[14px] font-[400]" htmlFor="">Breads & Bakery</label></li>
            <li className="flex justify-start items-start gap-4"><input type="checkbox" name="" id="" /><label className="text-[#71778E] text-[14px] font-[400]" htmlFor="">Breakfast & Dairy</label></li>
            <li className="flex justify-start items-start gap-4"><input type="checkbox" name="" id="" /><label className="text-[#71778E] text-[14px] font-[400]" htmlFor="">Frozen Foods</label></li>
            <li className="flex justify-start items-start gap-4"><input type="checkbox" name="" id="" /><label className="text-[#71778E] text-[14px] font-[400]" htmlFor="">Fruits & Vegetables</label></li>
            <li className="flex justify-start items-start gap-4"><input type="checkbox" name="" id="" /><label className="text-[#71778E] text-[14px] font-[400]" htmlFor="">Grocery & Staples</label></li>
            <li className="flex justify-start items-start gap-4"><input type="checkbox" name="" id="" /><label className="text-[#71778E] text-[14px] font-[400]" htmlFor="">Household Needs</label></li>
            <li className="flex justify-start items-start gap-4"><input type="checkbox" name="" id="" /><label className="text-[#71778E] text-[14px] font-[400]" htmlFor="">Meats & Seafood</label></li>
        </ul>
    </div>
  )
}
