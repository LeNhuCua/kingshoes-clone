import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { images } from "../../API";
const Product = (props) => {
    const { id, title, image, price, rating } = props.data;
    

    return (
        <div className="relative flex flex-col">
            <div className="absolute top-0 flex flex-col gap-1 text-[0.8125rem] text-white ">
                <div className="bg-red-400 w-[4.6rem] py-2 flex justify-center items-center ">
                    - {rating ? rating.rate : ""}%
                </div>

                <div className="bg-yellow-400 w-[4.6rem] py-2 flex justify-center items-center ">
                    HOT
                </div>
            </div>
            <Link
                className=" w-full h-full border border-transparent hover:border-gray-300 transition-all duration-500 flex flex-col text-[#5B5B5B]"
                to={`/productDetail/${id}`}
            >
                <div className="min-h-[21.5625rem] max-h-[21.5625rem] w-full flex-1">
                    <img
                        className="w-full h-full object-fill"
                        src={`${image}`}
                        alt={title}
                    />
                </div>
                <div className="flex flex-col gap-5 flex-1 px-3 mt-5">
                    <h1 className="cs-hover  break-all flex-1 text-lg font-bold text-inherit">
                        {title}
                    </h1>{" "}
                    <div className="mb-6 mt-auto">
                        <div className="flex text-yellow-500">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>

                        <span className="mt-2 inline-block text-inherit font-[600]">
                            {new Intl.NumberFormat({
                                style: "currency",
                                currency: "JPY",
                            }).format(price)}{" "}
                            đ
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Product;
