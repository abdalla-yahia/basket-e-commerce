import New_Products_Section from "./New_Products_Section";
import Trending_Section from "./Trending_Section";

export default function New_Products_Container() {
  return (
    <section className="w-[90%] flex justify-between items-start mt-5 gap-5">
      {/*Aside Advertice Section*/}
      <Trending_Section />
      {/*Porducts Container*/}
      <New_Products_Section />
    </section>
  )
}
