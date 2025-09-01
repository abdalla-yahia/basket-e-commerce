'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as icon from '@/Utils/Icons/Icons';

export default function Product_Card({ slug,img, offer, title, rating, oldprice, price,quantity, iscounter }: {slug:string, img: string, offer: string, title: string, rating: string, oldprice: string, price: string,quantity?:number, iscounter?: boolean }) {
    const [counter, setCounter] = useState(0);

    //Increament Count OF Product
    const IncreamentHandller = () =>{
        setCounter(counter + 1)
    } 
    //Decreament Count Of Product
    const DecreamentHandller = () =>{
        if(counter > 0){
        setCounter(counter - 1)
        }
    }

    return (
        <div className="flex min-h-[340px] shadow shadow-[rgb(237,238,245)] hover:scale-105 duration-500 hover:z-40 flex-col border border-[#EDEEF5] relative gap-3 bg-white px-6 py-5 justify-center items-start w-1/4">
            <Link href={`/products/${slug}`} >
                {/*Span Offers*/}
                {offer && <span className=" absolute bg-[#35AFA0] rounded-[4px] px-2 py-1 top-3 left-3 text-white">{offer}%</span>}
                {/*Image Card*/}
                <Image className="w-full" src={img} alt={title} width={100} height={150} />
                {/*Card Content*/}
                <h1 className="font-[400] text-[#202435] text-sm" style={{ lineHeight: '19.6px', letterSpacing: '0%' }}>Blue Diamond Almonds Lightly Salted</h1>
                {(quantity as number > 0) && <h2 className="font-[600] text-[#00B853]  uppercase text-[11px]" style={{ lineHeight: '16.5px', letterSpacing: '-0.1px', fontFamily: 'Dosis' }}>In stock</h2>}
                {/*Rating*/}
                <div className="flex justify-between items-center gap-2">
                    <div className="stars"><svg width="69" height="13" viewBox="0 0 69 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_316)">
                            <path d="M9.91 5.3155C9.91 5.17356 9.80032 5.08323 9.58096 5.04452L6.58086 4.59935L5.24533 1.88958C5.16791 1.73474 5.07113 1.65731 4.955 1.65731C4.83887 1.65731 4.74209 1.73474 4.66467 1.88958L3.32914 4.59935L0.329043 5.04452C0.109681 5.08323 0 5.17356 0 5.3155C0 5.40582 0.0516146 5.5026 0.154844 5.60583L2.32266 7.71558L1.80006 10.6963C1.80006 10.7479 1.80006 10.7866 1.80006 10.8125C1.80006 10.8899 1.81941 10.9576 1.85812 11.0157C1.89684 11.0738 1.96135 11.1028 2.05168 11.1028C2.1162 11.1028 2.19362 11.077 2.28395 11.0254L4.955 9.63177L7.62605 11.0254C7.71638 11.077 7.7938 11.1028 7.85832 11.1028C7.94865 11.1028 8.01316 11.0738 8.05188 11.0157C8.09059 10.9576 8.10994 10.8899 8.10994 10.8125C8.10994 10.7608 8.10994 10.7221 8.10994 10.6963L7.58734 7.71558L9.75516 5.60583C9.85839 5.5026 9.91 5.40582 9.91 5.3155Z" fill="#FFCD00" />
                        </g>
                        <g clipPath="url(#clip1_1_316)">
                            <path d="M23.81 5.3155C23.81 5.17356 23.7005 5.08323 23.4813 5.04452L20.4843 4.59935L19.1501 1.88958C19.0727 1.73474 18.976 1.65731 18.86 1.65731C18.744 1.65731 18.6473 1.73474 18.57 1.88958L17.2358 4.59935L14.2387 5.04452C14.0196 5.08323 13.91 5.17356 13.91 5.3155C13.91 5.40582 13.9616 5.5026 14.0647 5.60583L16.2303 7.71558L15.7083 10.6963C15.7083 10.7479 15.7083 10.7866 15.7083 10.8125C15.7083 10.8899 15.7276 10.9576 15.7663 11.0157C15.805 11.0738 15.8694 11.1028 15.9596 11.1028C16.0241 11.1028 16.1014 11.077 16.1917 11.0254L18.86 9.63177L21.5284 11.0254C21.6186 11.077 21.696 11.1028 21.7604 11.1028C21.8507 11.1028 21.9151 11.0738 21.9538 11.0157C21.9925 10.9576 22.0118 10.8899 22.0118 10.8125C22.0118 10.7608 22.0118 10.7221 22.0118 10.6963L21.4897 7.71558L23.6553 5.60583C23.7585 5.5026 23.81 5.40582 23.81 5.3155Z" fill="#FFCD00" />
                        </g>
                        <g clipPath="url(#clip2_1_316)">
                            <path d="M37.7201 5.3155C37.7201 5.17356 37.6104 5.08323 37.391 5.04452L34.3909 4.59935L33.0554 1.88958C32.978 1.73474 32.8812 1.65731 32.7651 1.65731C32.6489 1.65731 32.5521 1.73474 32.4747 1.88958L31.1392 4.59935L28.1391 5.04452C27.9197 5.08323 27.8101 5.17356 27.8101 5.3155C27.8101 5.40582 27.8617 5.5026 27.9649 5.60583L30.1327 7.71558L29.6101 10.6963C29.6101 10.7479 29.6101 10.7866 29.6101 10.8125C29.6101 10.8899 29.6295 10.9576 29.6682 11.0157C29.7069 11.0738 29.7714 11.1028 29.8617 11.1028C29.9263 11.1028 30.0037 11.077 30.094 11.0254L32.7651 9.63177L35.4361 11.0254C35.5264 11.077 35.6039 11.1028 35.6684 11.1028C35.7587 11.1028 35.8232 11.0738 35.8619 11.0157C35.9006 10.9576 35.92 10.8899 35.92 10.8125C35.92 10.7608 35.92 10.7221 35.92 10.6963L35.3974 7.71558L37.5652 5.60583C37.6684 5.5026 37.7201 5.40582 37.7201 5.3155Z" fill="#FFCD00" />
                        </g>
                        <g clipPath="url(#clip3_1_316)">
                            <path d="M51.63 5.3155C51.63 5.17356 51.5203 5.08323 51.3009 5.04452L48.3008 4.59935L46.9653 1.88958C46.8879 1.73474 46.7911 1.65731 46.675 1.65731C46.5588 1.65731 46.4621 1.73474 46.3846 1.88958L45.0491 4.59935L42.049 5.04452C41.8297 5.08323 41.72 5.17356 41.72 5.3155C41.72 5.40582 41.7716 5.5026 41.8748 5.60583L44.0426 7.71558L43.52 10.6963C43.52 10.7479 43.52 10.7866 43.52 10.8125C43.52 10.8899 43.5394 10.9576 43.5781 11.0157C43.6168 11.0738 43.6813 11.1028 43.7717 11.1028C43.8362 11.1028 43.9136 11.077 44.0039 11.0254L46.675 9.63177L49.346 11.0254C49.4364 11.077 49.5138 11.1028 49.5783 11.1028C49.6686 11.1028 49.7331 11.0738 49.7718 11.0157C49.8106 10.9576 49.8299 10.8899 49.8299 10.8125C49.8299 10.7608 49.8299 10.7221 49.8299 10.6963L49.3073 7.71558L51.4751 5.60583C51.5784 5.5026 51.63 5.40582 51.63 5.3155Z" fill="#FFCD00" />
                        </g>
                        <g clipPath="url(#clip4_1_316)">
                            <path d="M65.53 5.3155C65.53 5.17356 65.4204 5.08323 65.2013 5.04452L62.2042 4.59935L60.87 1.88958C60.7927 1.73474 60.696 1.65731 60.58 1.65731C60.464 1.65731 60.3673 1.73474 60.29 1.88958L58.9558 4.59935L55.9587 5.04452C55.7396 5.08323 55.63 5.17356 55.63 5.3155C55.63 5.40582 55.6816 5.5026 55.7847 5.60583L57.9503 7.71558L57.4282 10.6963C57.4282 10.7479 57.4282 10.7866 57.4282 10.8125C57.4282 10.8899 57.4476 10.9576 57.4863 11.0157C57.5249 11.0738 57.5894 11.1028 57.6796 11.1028C57.7441 11.1028 57.8214 11.077 57.9116 11.0254L60.58 9.63177L63.2484 11.0254C63.3386 11.077 63.4159 11.1028 63.4804 11.1028C63.648 11.1028 63.7318 11.006 63.7318 10.8125C63.7318 10.7608 63.7318 10.7221 63.7318 10.6963L63.2097 7.71558L65.3753 5.60583C65.4784 5.5026 65.53 5.40582 65.53 5.3155ZM62.3976 7.4446L62.823 9.94146L60.58 8.76077L58.337 9.94146L58.7624 7.4446L56.9448 5.68325L59.4585 5.29614L60.58 3.03155L61.7015 5.29614L64.2152 5.68325L62.3976 7.4446Z" fill="#FFCD00" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_316">
                                <rect width="9.91" height="10" fill="white" transform="matrix(1 0 0 -1 0 11.38)" />
                            </clipPath>
                            <clipPath id="clip1_1_316">
                                <rect width="9.9" height="10" fill="white" transform="matrix(1 0 0 -1 13.91 11.38)" />
                            </clipPath>
                            <clipPath id="clip2_1_316">
                                <rect width="9.91" height="10" fill="white" transform="matrix(1 0 0 -1 27.8101 11.38)" />
                            </clipPath>
                            <clipPath id="clip3_1_316">
                                <rect width="9.91" height="10" fill="white" transform="matrix(1 0 0 -1 41.72 11.38)" />
                            </clipPath>
                            <clipPath id="clip4_1_316">
                                <rect width="9.9" height="10" fill="white" transform="matrix(1 0 0 -1 55.63 11.38)" />
                            </clipPath>
                        </defs>
                    </svg>
                    </div>
                    <span className="font-[600] text-[#71778E] text-[13px]" style={{ lineHeight: '18.2px', letterSpacing: '-0.1%' }}>1 review</span>
                </div>
            </Link>
            {/*Price*/}
            <div className="flex justify-between items-center gap-2">
                {/*Old Price*/}
                {oldprice && <p className="font-[600] text-[#C2C2D3] text-[15.3px] line-through" style={{ lineHeight: '22.95px', letterSpacing: '-0.1px', fontFamily: 'Dosis' }}>${oldprice}</p>}
                {/*Price*/}
                <p className="font-[600] text-[#D51243] text-[18px]" style={{ lineHeight: '27px', letterSpacing: '-0.1px', fontFamily: 'Dosis' }}>${price}</p>
            </div>
            {/*Count*/}
            {iscounter && <div className="flex justify-between items-center w-full border overflow-hidden border-[#EDEEF5] rounded-[50px]">
                {/*Decrement Button*/}
                    <icon.FaMinus title="Decrement Counter" onClick={() =>DecreamentHandller() } className={`${counter === 0 ? 'cursor-not-allowed':'cursor-pointer'} flex justify-center items-center bg-[#EDEEF5] w-1/6 h-[30px] text-[10px] p-1`}/>
                {/*Counter*/}
                <span className="flex w-full justify-center items-center text-[20px]">{counter}</span>
                {/*Increment Button*/}
                    <icon.FaPlus title="Increment Counter" onClick={() =>IncreamentHandller() } className=" flex justify-center cursor-pointer items-center bg-[#FFCD00] w-1/6 h-[30px] text-[10px] p-1"/>
            </div>}
        </div>
    )
}
