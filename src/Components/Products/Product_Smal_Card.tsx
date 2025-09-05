import Image from 'next/image'
import Link from 'next/link'
import * as icon from '@/Utils/Icons/Icons';

export default function Product_Smal_Card({ slug, img, offer, title, oldprice, price }: {slug:string, img: string, offer: string, title: string, oldprice: string, price: string }) {
  return (
    <div className="flex flex-shrink-0 shadow w-[130px] min-h-[175] shadow-[rgb(237,238,245)] flex-col border border-[#EDEEF5] relative gap-2 bg-white px-2 py-3 justify-center items-center">
            <Link href={`/products/${slug}`}>
                {/*Span Offers*/}
                {offer && <span className="text-[8px] absolute bg-[#35AFA0] uppercase rounded-[4px] px-1 py-1 top-3 left-3 text-white">On Sale</span>}
                {/*Image Card*/}
                <Image className='w-full' src={img} alt={title} width={60} height={60} />
                {/*Card Content*/}
                <h1 className="font-[600] text-[#202435] text-[10px] " style={{ lineHeight: '19.6px', letterSpacing: '0%' }}>{title.split(' ').splice(0,3)}</h1>
            </Link>
            {/*Price*/}
            <div className="flex justify-between items-center gap-2">
                {/*Old Price*/}
                {oldprice && <p className="font-[600] text-[#C2C2D3] text-[12px] line-through" style={{ lineHeight: '22.95px', letterSpacing: '-0.1px', fontFamily: 'Dosis' }}>{oldprice}</p>}
                {/*Price*/}
                <p className="font-[600] text-[#270b12] text-[12px]" style={{ lineHeight: '27px', letterSpacing: '-0.1px', fontFamily: 'Dosis' }}>{price}</p>
                {/*Add Button*/}
                <icon.FaPlus className='text-[18px] text-white p-1 rounded-full bg-primary'/>
            </div>
            
        </div>
  )
}
