import Product_Card from "@/Components/Products/Product_Card";
import Search_Section from "./Search_Section";
import { RootState, useAppSelector } from "@/libs/store";
import { UpdateProduct } from "@/Interfaces/ProductInterface";
import Pagination from "@/Utils/Pagination";
import { Count_Of_Products } from "@/Utils/Constants";

export default function Products_Section({pageNumber, setPageNumber, setSearchText }: {pageNumber:number, setPageNumber: (arfg0: number) => void, setSearchText: (arfg0: string) => void }) {
  const { AllProducts } = useAppSelector((state: RootState) => state.product)
    
  //Get Count Of Pages From Server
  const pages = AllProducts?.pages;
  return (
    <>
      {/*Search Bar*/}
      <Search_Section setSearchText={setSearchText} />
      {/*Products*/}
      <div className="w-full  flex justify-between flex-wrap gap-0 items-start mt-3">
        {
          AllProducts?.products && AllProducts?.products?.map((product: UpdateProduct) =>
            <Product_Card key={product?.id} slug={product?.slug as string} img={product?.image || 'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={product?.offer as string} title={product?.title as string} rating={''} oldprice={product?.oldPrice as unknown as string} price={product?.price as unknown as string} quantity={product?.quantity as number} iscounter />
          )
        }
      </div>
      {/* <div className="w-full  flex justify-between flex-wrap gap-0 items-start mt-3">
        {
          ProductsBySearchText?.products?.length?
         ( 
          ProductsBySearchText?.products && ProductsBySearchText?.products?.map((product:UpdateProduct)=>
            <Product_Card key={product?.id} slug={product?.slug as string} img={product?.image || 'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={product?.offer as string} title={product?.title as string}  rating={''} oldprice={product?.oldPrice as unknown as string} price={product?.price as unknown as string} quantity={product?.quantity as number} iscounter/>
          )
        ):
        ProductsByFilter?.products?.length ?
        ( 
          ProductsByFilter?.products && ProductsByFilter?.products?.map((product:UpdateProduct)=>
            <Product_Card key={product?.id} slug={product?.slug as string} img={product?.image || 'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={product?.offer as string} title={product?.title as string}  rating={''} oldprice={product?.oldPrice as unknown as string} price={product?.price as unknown as string} quantity={product?.quantity as number} iscounter/>
          )
        ):
        ( 
          AllProducts?.products && AllProducts?.products?.map((product:UpdateProduct)=>
            <Product_Card key={product?.id} slug={product?.slug as string} img={product?.image || 'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={product?.offer as string} title={product?.title as string}  rating={''} oldprice={product?.oldPrice as unknown as string} price={product?.price as unknown as string} quantity={product?.quantity as number} iscounter/>
          )
        )
        }
      </div> */}

      {/*Pagination*/}
      {
        // AllProducts?.products?.length > Count_Of_Products &&
        <Pagination pagesCount={pages as number} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      }
    </>
  )
}
