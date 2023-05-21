import React, { useContext, useState } from "react";
import { BsArrowBarRight, BsCartPlusFill } from "react-icons/bs";
import Feature from "../components/Features/Feature";

import { useParams } from "react-router-dom";
import { ChangeTitle } from "../hook/ChangeTitle";
import { ProductsContext } from "../hook/ProductsContext";
import Loading from "../layout/Loading";
import "./product-image-slider.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import FeatureList from "../components/Features/FeatureList";
import ProductSlide from "../components/Products/ProductSlide";
import { SlideContext } from "../hook/SlideContext";
import TextHeading from "../components/TextHeading";
import { IoChevronBackOutline } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { CartsContext } from "../hook/CartsContext";
const Detail = () => {
    const [activeThumb, setActiveThumb] = useState();

    const { id } = useParams();
    const { products,allImages } = useContext(ProductsContext);

    const findP = products.find(item => item.id == id);



  
    const {addToCart} = useContext(CartsContext);
    const { swiperRef1 } = useContext(SlideContext);
    if (!findP) {
        return <Loading />;
    } 

    return (
        <div className="cs-container mt-5 flex flex-col gap-16">
          
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                <div className="">
                    <Swiper
                        onSwiper={setActiveThumb}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        modules={[Thumbs]}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            "@1.0": {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            "@1.50": {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className="product-images-slider-thumbs  "
                    >
                        {allImages.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="product-images-slider-thumbs-wrapper">
                                    <img src={`${item.image}`} alt="" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        modules={[Thumbs]}
                        grabCursor={true}
                        thumbs={{ swiper: activeThumb }}
                        className="product-images-slider"
                    >
                        {allImages.map((item, index) => (
                            <SwiperSlide key={index}>
                                  <img src={`${item.image}`} alt="" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex flex-col gap-4 px-5">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[1.875rem] font-bold text-[#313131] uppercase ">
                            {findP.title}
                        </h1>
                        <div className="flex gap-3">
                        <h2 className="text-red-500  text-3xl font-bold">
                            {" "}
                            {new Intl.NumberFormat({
                                style: "currency",
                                currency: "JPY",
                            }).format(findP.price)}{" "}
                            đ
                        </h2>
                        <h2 className="text-gray-500 line-through text-3xl font-bold">
                            {" "}
                            {new Intl.NumberFormat({
                                style: "currency",
                                currency: "JPY",
                            }).format(findP.price  + (findP.rating.rate * findP.price / 100))}{" "}
                            đ
                        </h2>
                        </div>
                
                    </div>
                    <div className="flex items-center border-t border-b py-5">
                        <ul className="flex gap-3">
                            <li className="text-xl px-2 py-1 border-2 border-black cursor-pointer font-bold rounded-sm">
                                40
                            </li>
                            <li className="text-xl px-2 py-1 border-2 border-black cursor-pointer font-bold rounded-sm">
                                41
                            </li>
                            <li className="text-xl px-2 py-1 border-2 border-black cursor-pointer font-bold rounded-sm">
                                42
                            </li>
                            <li className="text-xl px-2 py-1 border-2 border-black cursor-pointer font-bold rounded-sm">
                                43
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center  py-5">
                        <div className="border">
                            <button className="w-[3.125rem] h-[3.75rem] text-center  outline-none bg-gray-200">
                                -
                            </button>
                            <input
                                className="w-[4rem]  text-center border-l border-r  outline-none text-gray-400 text-2xl"
                                type="number"
                                readOnly
                                value={"01"}
                            />
                            <button className="w-[3.125rem] h-[3.75rem] text-center  outline-none bg-gray-200">
                                +
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-3">
                            <button className="xl:w-72 flex justify-center items-center gap-3 py-4 px-7 text-xl border rounded-3xl bg-yellow-400 shadow-3xl hover:bg-gray-600 hover:text-yellow-400 transition-all duration-500">
                                <BsCartPlusFill />
                                <h1 className="uppercase font-bold" onClick={() => addToCart(findP,findP.id)}>
                                    Thêm vào giỏ
                                </h1>
                            </button>
                            <button className="xl:w-72 text-white flex justify-center items-center gap-3 py-4 px-7 text-xl border rounded-3xl bg-red-600 shadow-3xl hover:bg-gray-600 hover:text-yellow-400 transition-all duration-500">
                                <h1 className="uppercase font-bold">
                                    Mua ngay
                                </h1>
                                <BsArrowBarRight />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 py-5">
                        <div>
                            <h1 className="inline text-gray-700 text-xl">
                                Hoặc đặt mua:{" "}
                            </h1>
                            <span className="text-2xl text-red-600 font-bold">
                                0909300746
                            </span>{" "}
                            <h2 className="text-gray-700 text-xl inline">
                                ( Tư vấn miễn phí )
                            </h2>
                           
                        </div>
                        <div>
                        <h2 className="text-black text-2xl">
                                Mô tả
                            </h2>
                            {
                                findP.description
                            }
                        </div>
                    </div>
                    {/* <div>
            <FeatureList>
              <Feature />
              <Feature />
              <Feature />
            </FeatureList>
          </div> */}
                </div>
            </div>
            <div>
                <section className="flex flex-col gap-20 cs-container ">
                    <div className="flex justify-between items-center">
                        <TextHeading after="Product">
                            Sản phẩm liên quan
                        </TextHeading>
                        <div className="flex gap-4">
                            <div
                                onClick={() => swiperRef1.current?.slidePrev()}
                                className="cursor-pointer  w-[3.2rem] h-[3rem] bg-[rgba(0,0,0,0.3)] text-black hover:text-white hover:bg-black transition-all duration-300  flex items-center justify-center border-0"
                            >
                                <IoChevronBackOutline size={20} />
                            </div>
                            <button
                                onClick={() => swiperRef1.current?.slideNext()}
                                className="cursor-pointer  w-[3.2rem] h-[3rem] bg-[rgba(0,0,0,0.3)] text-black hover:text-white hover:bg-black transition-all duration-300  flex items-center justify-center border-0"
                            >
                                <MdNavigateNext size={30} />
                            </button>
                        </div>
                    </div>
                    <div>
                        <ProductSlide swiperRef={swiperRef1} data={products} />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Detail;
