import React, { useContext, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

import { Pagination, Navigation, Autoplay } from "swiper";
import { IoChevronBackOutline } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { ProductsContext } from "../../hook/ProductsContext";

export default function Slides1() {
    const swiperRef = useRef();
    const { allslides } = useContext(ProductsContext);

    return (
        <div className="relative">
            <Swiper
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {allslides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <a href="###">
                            <div
                                className="flex items-center justify-center bg-cover bg-center bg-no-repeat h-[200px] md:h-[300px] xl:h-[700px]"
                                style={{ backgroundImage: `url(http://127.0.0.1:8000/uploads/images/${slide.image}.jpg)` }}
                            ></div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-1 top-1/2 z-10 w-[3.125rem] h-[3.125rem] bg-[rgba(0,0,0,0.3)] text-gray-400 hover:text-white rounded-full flex items-center justify-center border-0"
            >
                <IoChevronBackOutline size={20} />
            </button>
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute   top-1/2 z-10 right-1 w-[3.125rem] h-[3.125rem] bg-[rgba(0,0,0,0.3)] text-gray-400 hover:text-white rounded-full flex items-center justify-center border-0"
            >
                <MdNavigateNext size={30} />
            </button>
        </div>
    );
}
