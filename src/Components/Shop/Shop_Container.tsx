import Aside_Continer from "./Aside_Filter/Aside_Continer";
import Products_Container from "./Products/Products_Container";

export default function Shop_Container() {
  return (
    <section className="w-full flex justify-center items-center mt-[40px]">
        {/*Container*/}
        <div className="w-[90%] flex justify-between items center gap-5">
            {/*Aside Filter*/}
            <div className="w-[20%]">
                <Aside_Continer />
            </div>
            {/*Section Body*/}
            <div className="w-[75%]">
                <Products_Container />
            </div>
        </div>
    </section>
  )
}
