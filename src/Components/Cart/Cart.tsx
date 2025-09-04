'use client'
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import Image from "next/image";
import Link from "next/link";
import * as icon from '@/Utils/Icons/Icons';
import swal from 'sweetalert';
import { deleteItemFromCart } from "@/Feature/Actions/CartItemsActions";

export default function Cart() {
  const {AllCarts} = useAppSelector((state:RootState)=>state.cart)
  const {productsCount,totalPrice} = useAppSelector((state:RootState)=>state.cart);
  const dispatch = useAppDispatch()

  //Delete Item From Cart Handler
  const DeleteItemFromCartHandler =(id:string)=>{
    swal({
            title: "Are you sure you want to delete this Item From Your Cart?",
            text: "Once you delete this item, it will be removed from your cart permanently",
            icon: "warning",
            dangerMode: true,
            buttons: ["Cancel", "Delete"]
        })
        .then((willDelete) => {
          dispatch(deleteItemFromCart(id as string));
          if (willDelete) {
            swal("Item deleted successfully!", {
              icon: "success",
            });
            window.location.reload();
          } else {
            swal("The Item is safe and was not deleted!");
          }
        });
  }
  return (
    <div className="w-full flex flex-col justify-start items-start">
        {/*Map Products*/}
        {
          AllCarts?.carts && AllCarts?.carts?.items.map((item)=>
          <div key={item?.product?.id} className="w-full flex justify-between items-center my-[8px]">
              <div className="flex justify-between items-center gap-2 rounded">
                <icon.FaTrash onClick={()=>DeleteItemFromCartHandler(item?.id as string)} className="text-red-500 text-xl cursor-pointer mr-2 hover:scale-110 duration-150"/>
                 <Link href={`/products/${item?.product?.slug}?quantity=${item?.quantity}`}>
                    <div className="border border-[#D6D6D6] relative">
                        <Image src={item?.product?.image || 'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} alt="product" width={50} height={50}/>
                        <span className=" absolute -top-1 -right-1 p-1 w-5 h-5 rounded-full bg-[#666666] text-white flex justify-center items-center">{item?.quantity}</span>
                    </div> 
                 </Link>
                  <h3 className="text-[14px] font-[400]">{item?.product?.title}</h3>
              </div>
              <span className="text-[14px] font-[400] text-black">${(+(item?.product?.price as number) * +(item?.quantity)).toFixed(2)}</span>
          </div>
          )
        }
        {/*Subtotal*/}
        <div className="w-full flex justify-between items-center mt-7">
          <h3 className="text-[14px] font-[400]">Subtotal <span className="text-xl font-bold text-primary">{productsCount}</span> items</h3>
          <span className="text-[14px] font-[400] text-black">${totalPrice.toFixed(2)}</span>
        </div>
        {/*Shipping*/}
        <div className="w-full flex justify-between items-center mt-5">
          <h3 className="text-[14px] font-[400]">Shipping</h3>
          <span className="text-[14px] font-[600] text-black uppercase">free</span>
        </div>
        {/*Total*/}
        <div className="w-full flex justify-between items-center mt-5">
          <h3 className="text-[19px] font-[700] text-black">Total</h3>
          <div>
            <span className="text-[#666666] text-[12px] font-[400] uppercase mx-1">usd</span>
          <span className="text-[19px] font-[700] text-black uppercase">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
        <span className="text-[#666666] text-[14px] font-[400] opacity-70">Including $2.46 in taxes</span>
    </div>
  )
}
