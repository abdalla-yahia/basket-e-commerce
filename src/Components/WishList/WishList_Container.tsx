"use client";
import { getWishlist } from '@/Feature/Actions/WishListActions';
import { RootState, useAppDispatch, useAppSelector } from '@/libs/store';
import * as icon from '@/Utils/Icons/Icons'
import Image from "next/image";
import { useEffect } from 'react';

const wishlistItems = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 120,
    image:
      "https://res.cloudinary.com/dghqvxueq/image/upload/v1756715197/cmndokxnf8lmq7utelcu.png",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 95,
    image:
      "https://res.cloudinary.com/dghqvxueq/image/upload/v1756714405/ppzrya9hk842mlvsrdkx.png",
  },
  {
    id: 3,
    title: "Modern Chair",
    price: 180,
    image:
      "https://res.cloudinary.com/dghqvxueq/image/upload/v1756714795/poj4ifkwch4teibnxjcr.png",
  },
];

export default function Wishlist_Container() {
  const {products} = useAppSelector((state:RootState)=>state.wishlist)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    getWishlist()
  },[dispatch])
  console.log(products)
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        My Wishlist
      </h1>

      {wishlistItems.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty ✨</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
            >
              <div className="relative w-full h-48 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <button className="absolute top-3 right-3 bg-white/80 rounded-full p-2 hover:bg-red-100">
                  <icon.CiHeart className="w-5 h-5 text-red-500" />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-between mt-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-500">${item.price}</p>
                </div>

                <button className="mt-4 flex items-center justify-center gap-2 bg-gray-900 text-white rounded-xl py-2 px-4 hover:bg-gray-700 transition">
                  <icon.FaShoppingCart className="w-5 h-5" />
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
