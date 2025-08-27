"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type Props = {
  images: string[];
};

export default function ProductGallery({ images }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <div className="w-[70%] max-w-lg text-center">
      {/* Main Gallery */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        // navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, Pagination, Navigation, Thumbs]}
        className="rounded-lg shadow mb-2"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <Image
              src={src}
              alt={`Product ${i}`}
              width={300}
              height={300}
              className="object-contain w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        freeMode
        watchSlidesProgress
        modules={[Thumbs]}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <Image
              src={src}
              alt={`Thumbnail ${i}`}
              width={100}
              height={80}
              className="cursor-pointer object-contain w-full h-auto border rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
