import { useState } from "react"
import * as icon from '@/Utils/Icons/Icons';
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import { useRouter, useSearchParams } from "next/navigation";
import { updateCartItem } from "@/Feature/Actions/CartItemsActions";
import { UpdateProduct } from "@/Interfaces/ProductInterface";
import { createWishList } from "@/Feature/Actions/WishListActions";

export default function Product_Content() {
    const { product } = useAppSelector((state: RootState) => state.product)
    const { LogedUser } = useAppSelector((state: RootState) => state.auth)
    const quantity = useSearchParams().get('quantity')
    const [counter, setCounter] = useState(parseInt(quantity as string) || 1);
    const dispatch = useAppDispatch()
    const router = useRouter()
    //Increament Count OF Product
    const IncrementHandller = () => {
        setCounter(counter + 1)
    }
    //Decreament Count Of Product
    const DecrementHandller = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    // Data Will Puts In CartItems
    const data = {
        productId: product?.product?.id as string,
        product: product?.product as UpdateProduct,
        quantity: counter < 1 ? 1 : counter || 1
    }
    //Add To Cart
    const AddItemToCartHandler = () => {
        dispatch(updateCartItem(data))
        router.push('/products/shop')
    }
    const AddProductToWishData = {
        userId: LogedUser?.user?.id,
        productId: product?.product?.id
    }
    //Add To Wish List Handler
    const AddToWishListHandler = () => {
        dispatch(createWishList(AddProductToWishData as { userId: string, productId: string }))
    }
    return (
        <div className="w-[50%] overflow-hidden flex flex-col justify-between items-start gap-2 ">
            {/*Product Title*/}
            <h4 className="text-[#000000] text-[14px] font-[500] ">{product?.product?.title}</h4>
            {/*Product Price*/}
            <h4 className="text-[#000000] text-[12px] font-[700]">${product?.product?.price} - ${product?.product?.oldPrice}</h4>
            {/*Product Size*/}
            <div className="flex flex-col justify-start items-start gap-2">
                <span className="text-[#000000] opacity-70 text-[10px] font-[400] capitalize">available in:</span>
                <div className="flex justify-between items-start gap-2">
                    <span className="border border-[#E5E7EB] text-[#595959] p-1 cursor-pointer rounded">small</span>
                    <span className="border border-[#E5E7EB] text-[#595959] p-1 cursor-pointer rounded">medium</span>
                    <span className="border border-[#E5E7EB] text-[#595959] p-1 cursor-pointer rounded">large</span>
                </div>
            </div>
            {/*Product Count*/}
            <div className="w-full bg-[#F3F5F9] rounded flex justify-center items-center gap-10 p-1">
                {/*Decrement Button*/}
                <button title="Decrement Counter" onClick={() => DecrementHandller()} className={`${counter > 0 ? 'cursor-pointer' : 'cursor-not-allowed'} text-[15px] text-[#595959] `}>
                    <icon.FaMinus />
                </button>
                {/*Counter*/}
                <span className="text-[12px] text-[#595959]">{counter}</span>
                {/*Increment Button*/}
                <button title="Increment Counter" onClick={() => IncrementHandller()} className="text-[15px] text-[#595959] cursor-pointer">
                    <icon.FaPlus />
                </button>
            </div>
            {/*Add To Cart*/}
            <button onClick={() => AddItemToCartHandler()} title="Add To Cart" className="text-white cursor-pointer bg-primary w-full p-1 rounded flex justify-center items-center gap-3">
                <icon.BsHandbag />
                Add to Cart
            </button>
            {/*WishList And Share*/}
            <div className="w-full flex justify-between items-center gap-2">
                {/*Wishlist*/}
                <button onClick={() => AddToWishListHandler()} title="Add To Widhlist" className="rounded text-[10px] cursor-pointer font-[600] border w-1/2 flex justify-center items-center gap-3 border-[#DEE5EA] p-1 ">
                    <icon.CiHeart className="text-black text-[12px]" />
                    Wishlist
                </button>
                {/*Share*/}
                <button title="Share" className="rounded text-[10px] font-[600] cursor-pointer border w-1/2 flex justify-center items-center gap-3 border-[#DEE5EA] p-1 ">
                    <icon.PiShareFatThin className="text-black text-[12px]" />
                    Share
                </button>
            </div>
            {/*Tags*/}
            <div className="flex gap-2 justify-start items-start">
                <icon.SlTag className="text-[12px]" />
                <span className="text-[10px]">Tags:</span>
                {/*Tags*/}
                <div className="flex justify-start items-center gap-2 flex-wrap">
                    <span className="border border-[#E5E7EB] text-[#595959] text-[10px] p-1 rounded text-center">Fast Food</span>
                    <span className="border border-[#E5E7EB] text-[#595959] text-[10px] p-1 rounded text-center">Organic Corn</span>
                    <span className="border border-[#E5E7EB] text-[#595959] text-[10px] p-1 rounded text-center">Flavoured</span>
                    <span className="border border-[#E5E7EB] text-[#595959] text-[10px] p-1 rounded text-center">Dry Food</span>
                </div>
            </div>
            {/*Product Description*/}
            <div className="flex flex-col justify-between items-start">
                <h2 className="text-black text-[12px] font-[600] mb-1">Product Details:</h2>
                {/*Description*/}
                <h3 className="text-[#595959] text-[10px] font-[400]">{product?.product?.description}</h3>
            </div>
        </div>
    )
}
