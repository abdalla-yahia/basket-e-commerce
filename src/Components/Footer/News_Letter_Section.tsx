'use client'
import useSvgColor from '@/Utils/Icons/SVG-Color'
import Image from 'next/image'
import React from 'react'

export default function News_Letter_Section() {
  return (
    <div className="w-full h-[400px] flex justify-center items-end bg-primary pt-[20px]  md:pt-[40px]" style={{backgroundImage:`url('')`}}>
          <div className='w-[90%] flex flex-col md:flex-row justify-between items-center '>
          {/*News Letter Contact*/}
          <div className="flex w-full md:w-1/2 flex-col justify-start items-start gap-2">
            <p className="font-[300] text-[16px] text-white">
              <span className=" underline mr-2">$20 discount</span> 
              for your first order
            </p>
            {/*Title*/}
            <h3 className="font-[600] text-[26px] text-white ">Join our newsletter and get...</h3>
            {/*Description*/}
            <p className="font-[400] w-[80%] md:w-[50%] mb-[20px] text-[13px] text-white opacity-50">Join our email subscription now to get updates on promotions and coupons.</p>
            {/*Email Input */}
            <div className="flex justify-between w-full md:w-[75%] items-center rounded px-1 py-1 pl-4 gap-4 bg-[#E4E5EE]">
              {/*Icon*/}
              <div className="icon">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_726)">
                  <path d="M16.722 15.972V8.26804C16.506 8.50804 16.272 8.72404 16.02 8.91604C14.232 10.296 12.804 11.43 11.736 12.318C11.4 12.606 11.124 12.828 10.908 12.984C10.692 13.14 10.404 13.308 10.044 13.488C9.684 13.668 9.342 13.746 9.018 13.722H8.982C8.67 13.722 8.328 13.644 7.956 13.488C7.584 13.332 7.296 13.164 7.092 12.984C6.888 12.804 6.612 12.582 6.264 12.318C5.208 11.43 3.78 10.296 1.98 8.91604C1.728 8.72404 1.494 8.50804 1.278 8.26804V15.972C1.278 16.056 1.314 16.134 1.386 16.206C1.458 16.278 1.53 16.308 1.602 16.296H16.398C16.482 16.296 16.554 16.266 16.614 16.206C16.674 16.146 16.71 16.068 16.722 15.972ZM16.722 5.42404V5.17204L16.686 4.92004L16.632 4.83004C16.596 4.77004 16.566 4.74604 16.542 4.75804C16.518 4.77004 16.47 4.75804 16.398 4.72204H1.602C1.518 4.72204 1.446 4.75804 1.386 4.83004C1.326 4.90204 1.29 4.97404 1.278 5.04604C1.278 6.17404 1.776 7.12804 2.772 7.90804C4.056 8.91604 5.394 9.97204 6.786 11.076C6.834 11.112 6.954 11.214 7.146 11.382C7.338 11.55 7.488 11.676 7.596 11.76C7.704 11.844 7.854 11.946 8.046 12.066C8.238 12.186 8.406 12.282 8.55 12.354C8.694 12.426 8.838 12.456 8.982 12.444H9.018C9.15 12.444 9.294 12.414 9.45 12.354C9.606 12.294 9.774 12.198 9.954 12.066C10.134 11.934 10.284 11.832 10.404 11.76C10.524 11.688 10.674 11.562 10.854 11.382C11.034 11.202 11.154 11.1 11.214 11.076C12.606 9.97204 13.95 8.91604 15.246 7.90804C15.606 7.62004 15.942 7.23004 16.254 6.73804C16.566 6.24604 16.722 5.80804 16.722 5.42404ZM18 5.04604V15.972C18 16.416 17.844 16.794 17.532 17.106C17.22 17.418 16.842 17.58 16.398 17.592H1.602C1.17 17.592 0.792002 17.43 0.468002 17.106C0.144002 16.782 -0.011998 16.404 1.98802e-06 15.972V5.04604C1.98802e-06 4.60204 0.156002 4.22404 0.468002 3.91204C0.780002 3.60004 1.158 3.44404 1.602 3.44404H16.398C16.842 3.44404 17.22 3.60004 17.532 3.91204C17.844 4.22404 18 4.60204 18 5.04604Z" 
                  fill={useSvgColor()}/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1_726">
                  <rect width="18" height="18" fill="white" transform="matrix(1 0 0 -1 0 18.8701)"/>
                  </clipPath>
                  </defs>
                  </svg>
              </div>
                {/*Input*/}
                <input className="border-none outline-none h-full w-full" type="email" name="" id="" placeholder="Your email address"/>
                {/*Subscribe Button*/}
                <button className="bg-primary cursor-pointer text-white rounded px-5 py-3">Subscribe</button>
            </div>
          </div>
          <Image className='w-1/2' src={'https://res.cloudinary.com/dghqvxueq/image/upload/v1756217690/Footer_whypmq.png'} alt='Footer-image' width={500} height={500} />
          </div>
    </div>
  )
}
