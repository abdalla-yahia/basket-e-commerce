import Products_Section from "./Products_Section";
import Banar_Section from "@/Utils/Banar_Section";

export default function Products_Container({pageNumber, setPageNumber, setSearchText}:{pageNumber:number, setPageNumber:(arg0:number)=>void, setSearchText:(arg0:string)=>void}) {


  return (
    <div className="flex flex-col justify-between items-center gap-5">
      {/*Section Baner*/}
      <Banar_Section img={`https://res.cloudinary.com/dghqvxueq/image/upload/v1756307430/shope_n9bjrk.png`} title={'Organic Meals Prepared'} header={'your Home'} paragraph={'Fully prepared & delivered nationwide.'} />
      {/*Products Section*/}
      <Products_Section pageNumber={pageNumber} setPageNumber={setPageNumber} setSearchText={setSearchText} />
    
    </div>
  )
}
