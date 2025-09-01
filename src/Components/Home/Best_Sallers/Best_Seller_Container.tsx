import dynamic from "next/dynamic";
import Image_Section from "../../Image_Section/Image_Section";
const Best_Seller_Section = dynamic(()=> import("./Best_Seller_Section"),{
   loading: () => (
    <div className="flex items-center justify-center h-40">
      <span className="animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></span>
      <p className="text-muted animate-pulse font-bold text-3xl">Loading...</p>
    </div>
  ),
});

export default function Best_Seller_Container() {
  return (
    <section className="w-[90%] flex justify-between items-start mt-5 gap-5">
        {/*Aside Advertice Section*/}
        <Image_Section img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756217692/Home-1-Aside_mfktve.png'} header={'Bacola Natural Foods'} title={'Special Organic'} description={'Roats Burger'} text={'only-from'} price={'$14.99'}/>
        {/*Porducts Container*/}
        <Best_Seller_Section />
    </section>
  )
}

