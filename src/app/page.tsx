import Best_Seller_Container from "@/Components/Home/Best_Sallers/Best_Seller_Container";
import Home_Landing from "@/Components/Home/Landing_Aside/Home_Landing";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-start items-center">
      {/*Landing Section*/}
      <Home_Landing />
      {/*Best Sellers*/}
      <Best_Seller_Container />
    </main>
  );
}
