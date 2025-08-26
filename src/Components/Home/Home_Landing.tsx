import Aside_Container from "./Aside/Aside_Container";
import Landing_Containrt from "./Landing/Landing_Containrt";

export default function Home_Landing() {
  return (
    <section className="flex w-[90%] justify-between items-start mt-[36px]">
        {/*Aside Container*/}
        <Aside_Container />
         {/*Landing Container*/}
        <Landing_Containrt />
    </section>
  )
}
