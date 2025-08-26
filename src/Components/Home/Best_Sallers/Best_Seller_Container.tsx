import Best_Seller from "./Best_Seller";
import Image_Section from "../../Image_Section/Image_Section";

export default function Best_Seller_Container() {
  return (
    <section className="w-[90%] flex justify-between items-start mt-5 gap-5">
        {/*Image*/}
        <Image_Section img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756217692/Home-1-Aside_mfktve.png'} header={'Bacola Natural Foods'} title={'Special Organic'} description={'Roats Burger'} text={'only-from'} price={'$14.99'}/>
        {/*Porducts Container*/}
        <Best_Seller />
    </section>
  )
}

