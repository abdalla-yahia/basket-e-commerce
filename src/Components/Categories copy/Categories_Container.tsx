import Aside_Continer from "./Aside_Filter/Aside_Continer";
import Products_Container from "./Products/Products_Container";

export default function Categories_Container({id}:{id:string}) {
  return (
        <section className="w-full flex justify-center items-center mt-[40px]">
            {/*Container*/}
            <div className="w-[90%] flex justify-between items center gap-5">
                {/*Aside Filter*/}
                <aside className="w-[20%]">
                    <Aside_Continer />
                </aside>
                {/*Section Body*/}
                <div className="w-[75%]">
                    <Products_Container id={id}/>
                </div>
            </div>
        </section>
  )
}
