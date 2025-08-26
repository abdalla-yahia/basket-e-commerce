import Contact from "./Contact";
import Currency_Language from "./Currency_Language";
import NavList from "./NavList";

export default function Nav_Page() {
  return (
    <nav className="h-[40px] w-full flex justify-center items-center border-b-[0.5px] border-[#E3E4E6]">
             <div className="w-[90%] flex justify-between items-center">
                {/*Nav List*/}
                <NavList />
                {/*Contact Us*/}
                <Contact />
                {/*Cruancy & Language*/}
                <Currency_Language />
            </div>
    </nav>
  )
}
