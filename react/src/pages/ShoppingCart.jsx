import React, { useContext, useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BsArrowBarRight, BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Cart from "../components/Carts/Cart";
import CartList from "../components/Carts/CartList";
import { CartsContext } from "../hook/CartsContext";
import { ChangeTitle } from "../hook/ChangeTitle";

const ShoppingCart = () => {
    ChangeTitle("Giỏ hàng");
    const { cart } = useContext(CartsContext);
    let cartIsEmpty = null;
    let Carts = null;
    if (cart.length === 0) {
        cartIsEmpty = (
            <div className="text-center">
                <img
                    src="https://khaledpastry.com/waly_website_sale/static/src/img/empty-cart.png"
                    alt="giohangrong"
                />
                <h2>Không có sản phẩm nào trong giỏ hàng</h2>
                <Link className="uppercase text-xl font-semibold" to="/">
                    Về trang chủ
                </Link>
            </div>
        );
    } else {
        Carts = cart.map((item) => <Cart key={item.id} data={item} />);
    }

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total1 = cart.reduce((a, c) => {
            return a + c.price * c.amount;
        }, 0);

        setTotal(total1);
    });

    return (
        <div className="">
            <div className="cs-container">
                <div className="w-full xl:m-auto  p-6 xl:p-9 xl:w-1/2">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h1 className="text-3xl text-[#737373] border-b pb-3 font-semibold uppercase">
                                Giỏ hàng
                            </h1>
                            {cartIsEmpty}
                            <CartList>{Carts}</CartList>
                            {cart.length > 0 ? (
                                <div>
                                    <div className="border-b p-3  uppercase">
                                        <div className="flex gap-3 justify-end">
                                            <h1 className="text-[#737373] font-semibold">
                                                Tổng tiền:
                                                <span className="text-red-500 ml-2 font-bold text-xl">
                                                    {new Intl.NumberFormat({
                                                        style: "currency",
                                                        currency: "JPY",
                                                    }).format(total)}{" "}
                                                    đ
                                                </span>
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-3">
                                        <button className="xl:w-72 flex justify-center items-center gap-3 py-4 px-7 text-xl border rounded-3xl bg-yellow-400 shadow-3xl hover:bg-gray-600 hover:text-yellow-400 transition-all duration-500">
                                           
                                            <h1
                                                className="uppercase font-bold"
                                
                                            >
                                                Mua tiếp
                                            </h1>
                                            <AiOutlineRight />
                                        </button>
                                        <button className="xl:w-72 text-white flex justify-center items-center gap-3 py-4 px-7 text-xl border rounded-3xl bg-red-600 shadow-3xl hover:bg-gray-600 hover:text-yellow-400 transition-all duration-500">
                                            <h1 className="uppercase font-bold">
                                               Đặt hàng
                                            </h1>
                                            <AiOutlineRight />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        <img
                            src="https://kingshoes.vn/data/upload/media/king-shoes-thanh-toan.png"
                            alt=""
                        />
                        <div className="flex flex-col gap-5 bg-gray-600 p-5">
                            <p className="text-white">
                                KINGSHOES.VN Trang Thông Tin Chính Thức.
                            </p>
                            <p className="text-white">
                                ⛪ Địa chỉ: 192/2 Nguyễn Thái Bình, Phường 12,
                                Quận Tân Bình, Thành phố Hồ Chí Minh
                            </p>
                            <p className="text-white">
                                Email : cskh.kingshoes.vn@gmail.com
                            </p>
                            <p className="cs-hover text-white">
                                https://kingshoes.vn/
                            </p>
                            <p className="cs-hover text-white">
                                https://twitter.com/KingShoes_vn
                            </p>
                            <p className="cs-hover text-white">
                                https://instagram.com/KingShoes.vn
                            </p>
                            <p className="cs-hover text-white">
                                https://facebook.com/pg/www.KingShoes.vn
                            </p>
                            <p className="cs-hover text-white">
                                https://www.youtube.com/www.KingShoes.vn
                            </p>
                            <p className="cs-hover text-white">
                                http://bit.ly/KINGSHOES_map
                            </p>

                            <iframe
                                width="100%"
                                height="254"
                                src="https://www.youtube.com/embed/epcfWIT_Ais"
                                title="Check-in Kingshoes.vn cửa hàng Sneaker chính hãng uy tín nhất tại HCM"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
