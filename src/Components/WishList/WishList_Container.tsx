"use client";
import { updateCartItem } from '@/Feature/Actions/CartItemsActions';
import { updateWishList } from '@/Feature/Actions/WishListActions';
import { UpdateProduct } from '@/Interfaces/ProductInterface';
import { RootState, useAppDispatch, useAppSelector } from '@/libs/store';
import * as icon from '@/Utils/Icons/Icons'
import Image from "next/image";



export default function Wishlist_Container() {
  const {productsInWish} = useAppSelector((state:RootState)=>state.wishlist)
  const dispatch = useAppDispatch()

  //Remove From WishList Handler
  const RemoveFromWishListHandler =(item:UpdateProduct)=>{
    dispatch(updateWishList({productId:item?.id as string}))
  }

    //Add To Product Cart Handeler
    const AddItemToCartHandler =(item:UpdateProduct)=>{
        dispatch(updateCartItem({
          productId:item?.id as string,
          product:item,
          quantity:1
        }))
    }
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center flex justify-center items-center gap-2">
        <icon.RiUserHeartLine className='text-4xl '/>
        My Wishlist
      </h1>

      {productsInWish?.wishlist?.products?.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty !!</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productsInWish?.wishlist?.products?.map((item:UpdateProduct) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
            >
              <div className="relative w-full h-48 rounded-xl overflow-hidden">
                <Image
                  src={item.image as string}
                  alt={item.title as string}
                  fill
                  className="object-cover"
                />
                <button className="absolute cursor-pointer top-3 right-3 bg-white/80 rounded-full p-2 hover:bg-red-100">
                  <icon.FaHeart onClick={()=>RemoveFromWishListHandler(item)} className="w-5 h-5 text-primary hover:text-red-500 duration-100" />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-between mt-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item?.title}
                  </h2>
                  <p className="text-gray-500">${item?.price}</p>
                </div>

                <button className="mt-4 flex items-center cursor-pointer justify-center gap-2 bg-primary text-white rounded-xl py-2 px-4 hover:bg-primary/50 transition">
                  <icon.FaShoppingCart onClick={()=>AddItemToCartHandler(item)} className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
