import { RootState, useAppSelector } from "@/libs/store";
import { UpdateProduct } from "@/Interfaces/ProductInterface";
import Product_Card from "@/Components/Products/Product_Card";
import Search_Section from "./Search_Section";
import Pagination from "@/Utils/Pagination";

export default function Products_Section() {
  const { AllProducts } = useAppSelector((state: RootState) => state.product)

  //Get Count Of Pages From Server
  const pages = AllProducts?.pages;
  return (
    <>
      {/*Search Bar*/}
      <Search_Section />
      {/*Products*/}
      <div className="w-full  flex justify-between flex-wrap gap-0 items-start mt-3">
        {
          AllProducts?.products && AllProducts?.products?.map((product: UpdateProduct) =>
            <Product_Card key={product?.id} slug={product?.slug as string} img={product?.image || 'https://res.cloudinary.com/dghqvxueq/image/upload/v1756233979/product_2_kmlstf.png'} offer={product?.offer as string} title={product?.title as string} rating={''} oldprice={product?.oldPrice as unknown as string} price={product?.price as unknown as string} quantity={product?.quantity as number} iscounter />
          )
        }
      </div>
      {/*Pagination*/}
      {
        pages > 1 &&
        <Pagination pagesCount={pages as number} />
      }
    </>
  )
}
