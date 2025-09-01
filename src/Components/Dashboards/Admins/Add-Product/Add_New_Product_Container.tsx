'use client'
import UploadImages from "@/Utils/UploadImage";
import { SetStateAction, useActionState, useEffect, useState } from "react";
import * as icon from '@/Utils/Icons/Icons';
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import { CreateProduct } from "@/Interfaces/ProductInterface";
import { CreateProductValidation } from "@/Validation/ProductValidation";
import { toast } from "react-toastify";
import { createProduct } from "@/Feature/Actions/ProductsActions";
import { getAllBrands } from "@/Feature/Actions/BrandsActions";
import { getAllCategories } from "@/Feature/Actions/CategoriesActions";
import { UpdateBrand } from "@/Interfaces/BrandInterface";
import { UpdateCategory } from "@/Interfaces/CategoryInterface";

export default function Add_New_Product_Container() {
  const [imageUrl, setImages] = useState<string[]>([]);
  const { product, error, loading } = useAppSelector((state: RootState) => state.product)
  const { AllBrands } = useAppSelector((state: RootState) => state.brand)
  const { AllCategories } = useAppSelector((state: RootState) => state.category)

  //Get All CategoryId And All BrandsId
  useEffect(() => {
    dispatch(getAllBrands())
    dispatch(getAllCategories())
  }, [])
  const dispatch = useAppDispatch()
  //Create Item Handler
  const CreateItem = (prevState: CreateProduct, formData: FormData): CreateProduct => {
    const formstate = {
      ...prevState,
      title: formData.get('ProductTitle') as string,
      description: formData.get('ProductDescription') as string,
      offer: formData.get('ProductOffer') as string,
      price: Number(formData.get('ProductPrice')),
      oldPrice: Number(formData.get('ProductOldPrice') || 0),
      quantity: Number(formData.get('ProductQuantity')),
      categoryId: formData.get('CategoryId') as string,
      brandId: formData.get('BrandId') as string,
      image: imageUrl && imageUrl[0],
      gallery: imageUrl as string[]
    }
    //Check Validation 
    const Validation = CreateProductValidation.safeParse(formstate)
    if (!Validation?.success) {
      toast.warning(Validation?.error?.issues?.map(e => e?.message)?.join(', '))
      return formstate;
    }
    //Send Data 
    dispatch(createProduct(Validation?.data))
    return formstate
  }
  //Initial State
  const InitialState = {
    title: '',
    description: '',
    offer: '',
    image: '',
    slug: "",
    price: 0,
    quantity: 0,
    oldPrice: 0,
    categoryId: '',
    brandId: '',
    gallery: []
  }

  const [, ActionStat] = useActionState(CreateItem, InitialState)
  //Rest Image Galary
  useEffect(() => {
  if (product?.status === 201) {
    setImages([]) 
  }
}, [product?.status])
console.log(product?.status)
  return (
    <div className="w-full flex flex-col justify-start items-center gap-5 p-8">
      {/*Section Title*/}
      <h1 className="text-2xl font-[600] gap-2 mb-5 text-primary mr-auto flex justify-center items center">
        {/* Icon */}
        <icon.IoPricetagsSharp />
        Create Anew Product
      </h1>
      {/*Form */}
      <form action={ActionStat} className="w-[70%]">
        {/*Product Image*/}
        <UploadImages images={imageUrl} setImages={setImages as (urls: string[]) => SetStateAction<string[]>} />
        {/*Product Image URL*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="ProductUrl">Product Image Url:</label>
          <input onChange={(e) => setImages([e.target.value])} type="text" name="ProductUrl" id="ProductUrl" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*Product Title*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="ProductTitle">Product Title:</label>
          <input type="text" name="ProductTitle" id="ProductTitle" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*Product Description*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="ProductDescription">Product Description:</label>
          <input type="text" name="ProductDescription" id="ProductDescription" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*Product Offer*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="ProductOffer">Product Offer:</label>
          <input type="text" name="ProductOffer" id="ProductOffer" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*Product Price*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="ProductPrice">Product Price:</label>
          <input type="text" min={0} name="ProductPrice" id="ProductPrice" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*Product OldPrice*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="ProductOldPrice">Product OldPrice:</label>
          <input type="text" min={0} name="ProductOldPrice" id="ProductOldPrice" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*Product Quantity*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="ProductQuantity">Product Quantity:</label>
          <input type="number" min={0} name="ProductQuantity" id="ProductQuantity" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*CategoryID*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="ProductQuantity">Product Category:</label>
          <select name="CategoryId" className=' bg-[#F3F4F7] w-full  p-2 rounded '>
            <option value="" disabled selected>Select Category Of Product</option>
            {
              AllCategories?.categories?.map((category: UpdateCategory) =>
                <option key={category?.id} value={category?.id}>{category?.title}</option>
              )
            }
          </select>
        </div>
        {/*BrandID*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="ProductQuantity">Product Brand:</label>
          <select name="BrandId" defaultValue="" className="bg-[#F3F4F7] w-full p-2 rounded">
            <option value="" disabled> Select Brand Of Product</option>

            {AllBrands?.brands && AllBrands.brands.length > 0 ? (
              AllBrands.brands.map((brand: UpdateBrand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.title}
                </option>
              ))
            ) : (
              <option disabled>No brands available</option>
            )}
          </select>

        </div>
        {/*Submit Button*/}
        {
          error && <p className="text-red-500">{error}</p>
        }
        {
          product?.product?.title && <p className="text-green-500">Created Product Successfully</p>
        }
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <button type="submit" id="ProductDescription" className='p-2 border border-[#F3F4F7] text-white cursor-pointer bg-primary rounded w-full'>
            {loading ? (
              <>
                <div className="w-full flex justify-center items-center gap-2">
                  <icon.LuLoader className="h-4 w-4 animate-spin" />
                  Saving...
                </div>
              </>
            )
              : 'Save'}
          </button>
        </div>
      </form>
    </div>
  )
}
