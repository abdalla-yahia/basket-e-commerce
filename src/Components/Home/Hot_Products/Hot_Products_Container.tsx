import Image_Section from "@/Components/Image_Section/Image_Section";
import Hot_Products_Section from "./Hot_Product_Section";
import Image from "next/image";

export default function Hot_Products_Container() {
  return (
    <section className="w-[90%] flex justify-between items-start mt-5 gap-5">
            {/*Aside Advertice Section*/}
            <Image_Section img={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756217693/Home-1-Aside-2_ouxjgp.png'} header={'Best bakery products'} title={'Freshest products'} description={'every hour.'} text={'only-from'} price={'$14.99'} href="/"/>
        <section className="w-[75%] flex flex-col justify-between items-start gap-5">
            {/*Head Image*/}
            <div className="w-full bg-top-right bg-no-repeat h-[125px] overflow-hidden rounded-2xl bg-[#F8EFEA] flex justify-between items-center">
                {/*Content*/}
                <div className="w-[60%] pl-8 py-3">
                    <p className="font-[400] text-[14px] text-[#9B9BB4]" style={{lineHeight:'16.8px',letterSpacing:'0%'}}>Always Taking Care</p>    
                    <h1 className="font-[600] text-[18px] text-[#71778E]" style={{lineHeight:'21.6px',letterSpacing:'-0.8%'}}>In store or online your health & safety is our top priority.</h1>
                </div>
                {/*Image*/}
                <Image className="w-[40%]" src={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756217692/Home-1-Best-Seller_tcl4zg.png'} alt="" width={200} height={100} />
            </div>
            {/*Hot Porducts Container*/}
            <Hot_Products_Section />
        </section>
    </section>
  )
}