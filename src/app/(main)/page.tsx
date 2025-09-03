import Best_Seller_Container from "@/Components/Home/Best_Sallers/Best_Seller_Container";
import Brands_Carsoul_Container from "@/Components/Home/Brands_Carsoul/Brands_Carsoul_Container";
import Customer_Comments_Container from "@/Components/Home/Customer_Comments/Custopmer_Comment_Container";
import Hot_Products_Container from "@/Components/Home/Hot_Products/Hot_Products_Container";
import Home_Landing_Container from "@/Components/Home/Landing_Aside/Home_Landing_Container";
import New_Products_Container from "@/Components/Home/New_Products/New_Products_Container";
import Stok_Products_Container from "@/Components/Home/Stok_Product/Stok_Products_Container";

export default function Home() {

  return (
    <main className="min-h-screen w-full flex flex-col justify-start items-center">
      {/*Landing Section*/}
      <Home_Landing_Container />
      {/*Best Sellers*/}
      <Best_Seller_Container />
      {/*Hot Products Container*/}
      <Hot_Products_Container />
      {/*New Products Container*/}
      <New_Products_Container />
      {/*Customer Comment Container*/}
      <Customer_Comments_Container />
      {/*Brands Carsoul Container*/}
      <Brands_Carsoul_Container />
      {/*Stoke Products Container*/}
      <Stok_Products_Container />
    </main>
  );
}
