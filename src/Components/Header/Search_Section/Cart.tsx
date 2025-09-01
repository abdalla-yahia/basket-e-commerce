import { RootState, useAppSelector } from '@/libs/store';
import * as icon from '@/Utils/Icons/Icons';
import Link from 'next/link';

export default function Cart() {
    const {productsCount,totalPrice} = useAppSelector((state:RootState)=>state.cart)
    
    return (
        <div className="flex justify-center items-center gap-2">
            {/*Total Price*/}
            <p>${totalPrice.toFixed(2)}</p>
            {/*Cart Icon*/}
            <Link href={'/cart'} >
                <div className="cart-icon  relative ">
                    <div className={`${productsCount ? 'bg-green-200' :'bg-red-200' } animate-ping p-2 rounded-full absolute w-full h-full`}></div>
                    <div className={`icon ${productsCount ? 'bg-green-200' :'bg-red-200' } p-2 rounded-full `}>
                        <icon.PiHandbag className={`${productsCount ? 'text-green-600' :'text-red-600' } text-xl`}/>
                    </div>
                    {/*Items Count */}
                    <span className={`${productsCount ? 'bg-primary' :'bg-red-700' } z-30 absolute -right-1 -top-2 w-5 h-5 flex justify-center items-center text-white  p-1 rounded-full `}>{productsCount || 0}</span>
                </div>
            </Link>
        </div>
    )
}
