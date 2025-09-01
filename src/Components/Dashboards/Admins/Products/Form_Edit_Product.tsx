'use client'
import UploadImages from "@/Utils/UploadImage";
import { SetStateAction, useActionState, useEffect, useState } from "react";
import * as icon from '@/Utils/Icons/Icons';
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store";
import { UpdateProduct } from "@/Interfaces/ProductInterface";
import { UpdataProductValidation } from "@/Validation/ProductValidation";
import { toast } from "react-toastify";
import { updateProduct } from "@/Feature/Actions/ProductsActions";
import { getAllBrands } from "@/Feature/Actions/BrandsActions";
import { getAllCategories } from "@/Feature/Actions/CategoriesActions";
import { UpdateBrand } from "@/Interfaces/BrandInterface";
import { UpdateCategory } from "@/Interfaces/CategoryInterface";

export default function Edit_Product_Form({ product, setIsToggle }: { product: UpdateProduct, setIsToggle: (arg0: boolean) => void }) {
  const [imageUrl, setImages] = useState<string[]>(product?.gallery || []);
  const { product: EditProduct, error, loading } = useAppSelector((state: RootState) => state.product)
  const { AllBrands } = useAppSelector((state: RootState) => state.brand)
  const { AllCategories } = useAppSelector((state: RootState) => state.category)

  const dispatch = useAppDispatch()
  //Get All CategoryId And All BrandsId
  useEffect(() => {
    dispatch(getAllBrands())
    dispatch(getAllCategories())
  }, [dispatch])
  //Create Item Handler
  const UpdateItem = (prevState: UpdateProduct, formData: FormData): UpdateProduct => {
    const formstate = {
      ...prevState,
      slig: product?.slug,
      title: formData.get('ProductTitle') as string || product?.title,
      description: formData.get('ProductDescription') as string || product?.description,
      offer: formData.get('ProductOffer') as string || product?.offer,
      price: Number(formData.get('ProductPrice')) || product?.price,
      oldPrice: Number(formData.get('ProductOldPrice')),
      quantity: Number(formData.get('ProductQuantity')),
      categoryId: formData.get('CategoryId') as string,
      brandId: formData.get('BrandId') as string,
      image: imageUrl && imageUrl[0],
      gallery: imageUrl as string[]
    }
    //Check Validation 
    const Validation = UpdataProductValidation.safeParse(formstate)
    if (!Validation?.success) {
      toast.warning(Validation?.error?.issues?.map(e => e?.message)?.join(', '))
      return formstate;
    }
    //Send Data 
    dispatch(updateProduct(Validation?.data))
    return formstate
  }
  //Initial State
  const InitialState = {
    slug: product?.slug,
    title: product?.title,
    description: product?.description,
    offer: product?.offer,
    image: product?.image,
    price: product?.price,
    quantity: product?.quantity,
    oldPrice: product?.oldPrice,
    categoryId: product?.categoryId,
    brandId: product?.brandId,
    gallery: product?.gallery
  }

  const [, ActionStat] = useActionState(UpdateItem, InitialState)
  //Close Window After Update Success
  if (EditProduct?.status === 201) {
    setIsToggle(false)
  }
  return (
    <div className="w-[50%] absolute top-0 bg-[#ddd] rounded left-0 flex flex-col justify-start items-center gap-5 p-8">
      {/*Close Form*/}
      <icon.IoClose onClick={() => setIsToggle(false)} className="text-xl absolute top-3 right-3 cursor-pointer" />
      {/*Section Title*/}
      <h1 className="text-2xl font-[600] gap-2 mb-5 text-primary mr-auto flex justify-center items center">
        {/* Icon */}
        <icon.GrDocumentUpdate />
        Update Product
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
          <input placeholder={product?.title} type="text" name="ProductTitle" id="ProductTitle" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*Product Description*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="ProductDescription">Product Description:</label>
          <input placeholder={product?.description} type="text" name="ProductDescription" id="ProductDescription" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*Product Offer*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="ProductOffer">Product Offer:</label>
          <input placeholder={product?.offer} type="text" name="ProductOffer" id="ProductOffer" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*Product Price*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="ProductPrice">Product Price:</label>
          <input placeholder={product?.price?.toString() || '0'} type="text" min={0} name="ProductPrice" id="ProductPrice" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*Product OldPrice*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="ProductOldPrice">Product OldPrice:</label>
          <input placeholder={product?.oldPrice?.toString() || '0'} type="text" min={0} name="ProductOldPrice" id="ProductOldPrice" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*Product Quantity*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="ProductQuantity">Product Quantity:</label>
          <input placeholder={product?.quantity?.toString() || '0'} type="number" min={0} name="ProductQuantity" id="ProductQuantity" className='p-2 bg-[#F3F4F7] rounded w-full' />
        </div>
        {/*CategoryID*/}
        <div className='flex flex-col justify-start items-start w-full gap-3 py-4'>
          <label htmlFor="ProductQuantity">Product Category:</label>
          <select name="CategoryId" defaultValue={product?.categoryId} className=' bg-[#F3F4F7] w-full  p-2 rounded '>
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
          <select name="BrandId" defaultValue={product?.brandId} className="bg-[#F3F4F7] w-full p-2 rounded">
            {
              AllBrands?.brands?.map((brand: UpdateBrand) => (
                <option key={brand?.id} value={brand?.id}>{brand?.title} </option>
              ))

            }
          </select>

        </div>
        {/*Submit Button*/}
        {
          error && <p className="text-red-500">{error}</p>
        }
        {
          EditProduct?.product?.title && <p className="text-green-500">Created Product Successfully</p>
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
