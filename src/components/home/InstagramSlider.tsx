"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function InstagramSlider() {
    const images = [
        "/images/gallery/1.jpg",
        "/images/gallery/2.jpg",
        "/images/gallery/3.jpg",
    ];

    return (
        <section className="py-24">

            <h2 className="text-center text-4xl text-yellow-500 mb-10">
                Instagram Highlights
            </h2>

            <Swiper slidesPerView={1}>
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            className="w-full max-h-[500px] object-cover"
                            alt=""
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}