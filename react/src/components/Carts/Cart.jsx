import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { images } from "../../API";
import { CartsContext } from "../../hook/CartsContext";

const Cart = ({ data }) => {
    const {increaseAmount,reduceAmount,removeFromCart} = useContext(CartsContext);
    return (
        <div className="border-b py-4">
            <div className="flex gap-3">
                <div className="h-[11.875rem] min-w-[11.875rem] ">
                    <Link to={`/productDetail/${data.alias}`}>
                        <img
                            className="h-full w-full object-cover"
                            src={`${images}/${data.image}.jpg`}
                            alt=""
                        />
                    </Link>
                </div>
                <div>
                    <Link to={`/productDetail/${data.alias}`} className="text-[1.375rem] font-bold text-[#313131] uppercase ">
                        {data.name}
                    </Link>

                    <span className="font-bold">Size giày: 36.5</span>
                    <div className="flex gap-1 items-center">
                        <div className="flex items-center  py-5">
                            <div className="border flex items-center justify-center">
                                <button onClick={() => reduceAmount(data.id)}  className="w-[2.125rem] h-[2.75rem] text-center  outline-none hover:bg-gray-200">
                                    -
                                </button>
                                <input
                                    className="w-[3rem] h-[2.75rem] text-center border-l border-r  outline-none text-gray-400 text-2xl"
                                    type="text"
                                    readOnly
                                    value={data.amount}
                                />
                                <button onClick={() => increaseAmount(data.id)} className="w-[2.125rem] h-[2.75rem] text-center  outline-none hover:bg-gray-200">
                                    +
                                </button>
                            </div>
                        </div>
                        <div>
                            <span>X</span>
                            <span className="text-red-500 ml-2 font-bold text-xl">
                                {new Intl.NumberFormat({
                                    style: "currency",
                                    currency: "JPY",
                                }).format(data.price)}{" "}
                                đ
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <h1 className="text-[#737373] font-semibold">
                            Thành tiền:
                            <span className="text-red-500 ml-2 font-bold text-xl">
                                {new Intl.NumberFormat({
                                    style: "currency",
                                    currency: "JPY",
                                }).format(data.price * data.amount)}{" "}
                                đ
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="ml-auto">
                    <div onClick={() => removeFromCart(data.id)} className="w-11 h-11 bg-red-600 rounded-full flex justify-center items-center">
                        <AiOutlineClose className="text-white" size={28} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
