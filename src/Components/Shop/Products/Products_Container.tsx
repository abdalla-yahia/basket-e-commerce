import Pagination from "@/Utils/Pagination";
import Products_Section from "./Products_Section";
import Banar_Section from "@/Utils/Banar_Section";
import { RootState, useAppSelector } from "@/libs/store";

export default function Products_Container() {
  const { AllProducts } = useAppSelector((state: RootState) => state.product)

  //Get Count Of Pages From Server
  const pages = AllProducts?.pages;

  return (
    <div className="flex flex-col justify-between items-center gap-2 md:gap-5">
      {/*Section Baner*/}
      <Banar_Section img={`https://res.cloudinary.com/dghqvxueq/image/upload/v1756307430/shope_n9bjrk.png`} title={'Organic Meals Prepared'} header={'your Home'} paragraph={'Fully prepared & delivered nationwide.'} />
      {/*Products Section*/}
      <Products_Section  />
       {/*Pagination*/}
      {
        pages > 1 &&
        <Pagination pagesCount={pages as number} />
      }
    </div>
  )
}
