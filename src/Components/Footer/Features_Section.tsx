import * as icon from '@/Utils/Icons/Icons';

export default function Features_Section() {
  return (
    <div className="w-full flex justify-center items-center bg-[#F7F8FD]">
          <ul className="w-[90%] flex justify-between items-start py-5 border-b border-b-[#E4E5EE]">
            <li className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-1 md:gap-5 pr-[30px] border-r-2 border-r-[#E4E5EE]">
              <icon.SiCodefresh />
              <h2 className="text-[#202435] text-[9px] md:text-[13px] font-[500]" style={{lineHeight:"19.5px",letterSpacing:'-0.1px'}}>Everyday fresh products</h2>
            </li>
            <li className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-1 md:gap-5 pr-[30px] border-r-2 border-r-[#E4E5EE]">
              <icon.LiaShippingFastSolid />
              <h2 className="text-[#202435] text-[9px] md:text-[13px] font-[500]" style={{lineHeight:"19.5px",letterSpacing:'-0.1px'}}>Free delivery for order over $70</h2>
            </li>
            <li className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-1 md:gap-5 pr-[30px] border-r-2 border-r-[#E4E5EE]">
              <icon.RiDiscountPercentLine />
              <h2 className="text-[#202435] text-[9px] md:text-[13px] font-[500]" style={{lineHeight:"19.5px",letterSpacing:'-0.1px'}}>Daily Mega Discounts</h2>
            </li>
            <li className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-1 md:gap-5">
              <icon.MdOutlinePriceChange />
              <h2 className="text-[#202435] text-[9px] md:text-[13px] font-[500]" style={{lineHeight:"19.5px",letterSpacing:'-0.1px'}}>Best price on the market</h2>
            </li>
          </ul>
    </div>
  )
}
