import React, { useContext, useMemo, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";

import Feature from "../components/Features/Feature";
import FeatureList from "../components/Features/FeatureList";
import Pagination from "../components/Panigation/Pagination";
import Product from "../components/Products/Product";
import ProductList from "../components/Products/ProductList";
import ProductSlide from "../components/Products/ProductSlide";

import Slides1 from "../components/Slides/Slides1";

import TextHeading from "../components/TextHeading";
import { ChangeTitle } from "../hook/ChangeTitle";
import { ProductsContext } from "../hook/ProductsContext";
import { SlideContext } from "../hook/SlideContext";

import { features } from "../data/data";

let PageSize = 10;

const Home = () => {
    const { products, productsHot } = useContext(ProductsContext);

    const { swiperRef, swiperRef1 } = useContext(SlideContext);

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return products.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, products]);

    return (
        <div className="flex flex-col gap-28">
            <div>
                <Slides1 />
                <FeatureList>
                    {features.map((feature) => (
                        <Feature key={feature.id} data={feature} />
                    ))}
                </FeatureList>
            </div>

            <div className="cs-container  ">
                <TextHeading after="Products">Sản phẩm mới</TextHeading>
            </div>

            <section className="cs-container">
                <ProductList>
                    {currentTableData.map((product) => (
                        <Product key={product.id} data={product} />
                    ))}
                </ProductList>
                <div className="flex justify-center mt-5">
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={products.length}
                        pageSize={PageSize}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </section>

            <section className="flex flex-col gap-20 cs-container ">
                <div className="flex justify-between items-center">
                    <TextHeading after="hot">Sản phẩm hot</TextHeading>
                    <div className="flex gap-4">
                        <div
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="cursor-pointer  w-[3.2rem] h-[3rem] bg-[rgba(0,0,0,0.3)] text-black hover:text-white hover:bg-black transition-all duration-300  flex items-center justify-center border-0"
                        >
                            <IoChevronBackOutline size={20} />
                        </div>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="cursor-pointer  w-[3.2rem] h-[3rem] bg-[rgba(0,0,0,0.3)] text-black hover:text-white hover:bg-black transition-all duration-300  flex items-center justify-center border-0"
                        >
                            <MdNavigateNext size={30} />
                        </button>
                    </div>
                </div>

                <ProductSlide swiperRef={swiperRef} data={productsHot} />
            </section>

            <section className="flex flex-col gap-20 cs-container ">
                <div className="flex justify-between items-center">
                    <TextHeading after="Discount">
                        Sản phẩm khuyến mãi
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

                <ProductSlide swiperRef={swiperRef1} data={productsHot} />
            </section>
        </div>
    );
};

export default Home;
