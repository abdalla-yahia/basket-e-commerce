import Aside_Continer from "@/Components/Shop/Aside_Filter/Aside_Continer";

export default function ShopLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

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
                    {children}
                </div>
            </div>
        </section>
    )

}