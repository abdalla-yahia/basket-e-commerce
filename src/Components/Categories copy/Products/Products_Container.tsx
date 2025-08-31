import Search_Section from "./Search/Search_Section";
import Products_Section from "./Products_Section";
import Pagination from "../../../Utils/Pagination";
import Banar_Section from "./Banar_Section";

export default function Products_Container({id}:{id:string}) {
  return (
    <div className="flex flex-col justify-between items-center gap-5">
        {/*Section Baner*/}
        <Banar_Section />
        {/*Search Bar*/}
        <Search_Section />
        {/*Products Section*/}
        <Products_Section id={id}/>
        {/*Pagination*/}
        <Pagination />
    </div>
  )
}
