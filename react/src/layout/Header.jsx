import React, { useContext, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import {
    AiOutlineBars,
    AiOutlineClose,
    AiOutlineSearch,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { MenusContext } from "../hook/MenusContext";
import { SidebarContext } from "../hook/SidebarContext";
import { Link } from "react-router-dom";
import CustomLink from "../routes/CustomLink";
import { CartsContext } from "../hook/CartsContext";
import { ProductsContext } from "../hook/ProductsContext";
import { useForm } from "react-hook-form";
const Header = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { searchOpen, Open } = useContext(MenusContext);
    const { isOpenSidebar, Handle } = useContext(SidebarContext);
    const { products, setProducts } = useContext(ProductsContext);

    const { cart } = useContext(CartsContext);

    const [allCart, setAllCart] = useState(0);
    console.log(products.length);

    const [searchKey, setSearchKey] = useState("");

    const aaa = (e) => {
        setSearchKey(e.target.value);
    };

    const searchItems = (search) => {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo purposes we filter at client side
        // event.preventDefault()
        // console.log(event);
        let _filteredItems = [];

        for (let i = 0; i < products.length; i++) {
            if (
                products[i].title.toLowerCase().includes(search.toLowerCase())
            ) {
                _filteredItems.push(products[i]);
            }
        }
        setProducts(_filteredItems);
    };

    function sumCart(cart) {
        let sum = 0;
        for (let i = 0; i < cart.length; i++) {
            sum += cart[i].amount;
        }
        return sum;
    }
    useEffect(() => {
        if (cart.length > 0) {
            const quantity = sumCart(cart);
            setAllCart(quantity);
        }
    });

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    });

    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector(".header-section");
        const scrollTop = window.scrollY;
        scrollTop >= 150
            ? header.classList.add("is-sticky")
            : header.classList.remove("is-sticky");
    };

    return (
        <header className="w-full">
            <div className="cs-container py-2 border-b">
                <ul className="flex justify-end items-center h-ful flex-wrap">
                    <li className="border-r border-gray-500">
                        <a
                            href="##"
                            className="text-sm  font-bold uppercase text-gray-500 px-2 cs-hover"
                        >
                            👑 King and Queen
                        </a>
                    </li>
                    <li className=" border-r border-gray-500">
                        <a
                            href="##"
                            className="text-sm font-bold uppercase text-gray-500 px-2 cs-hover"
                        >
                            <FaUser className="inline" />
                            <span className="ml-1">Check user</span>
                        </a>
                    </li>
                    <li className=" px-2">
                        <IoCall className="inline" />
                        <span className="ml-1">Hotline:</span>
                        <a
                            href="##"
                            className="font-bold text-lg ml-1 cs-hover"
                        >
                            0909300746
                        </a>
                    </li>
                </ul>
            </div>

            {/* <div className="hidden xl:flex justify-end items-center relative cs-container ">
        <ul className="flex items-center gap-5 py-6 ">
              <li className="flex gap-1 items-center cs-hover font-[500]"><AiFillStar /> Về chúng tôi</li>
              <li className="flex gap-1 items-center cs-hover font-[500]"><AiOutlineBarChart/> Giá vàng</li>
              <li className="flex gap-1 items-center cs-hover font-[500]"><AiOutlineContacts/> Liên hệ</li>
        </ul>
    </div> */}

            <div
                className={`flex justify-between items-center relative py-2 cs-container shadow header-section`}
            >
                <div className="h-14">
                    <Link to="/">
                        <img
                            className="h-full"
                            src="https://kingshoes.vn/data/upload/media/cu%CC%9B%CC%89a-ha%CC%80ng-gia%CC%80y-sneaker-chi%CC%81nh-ha%CC%80ng-uy-ti%CC%81n-nha%CC%82%CC%81t-de%CC%82%CC%81n-king-shoes-authenti-hcm-6.png"
                            alt="logo"
                        />
                    </Link>
                </div>

                {/* search search-active */}
                <div
                    className={`w-[100%] h-full left-0 absolute bg-white md:hidden z-50  items-center cs-container ${
                        searchOpen ? "flex animation" : "hidden"
                    }`}
                >
                    <form
                        className="w-full h-[50%]"
                        onSubmit={() => handleSubmit(searchItems(searchKey))}
                    >
                        <div className="border rounded-xl bg-gray-200 px-2 items-center flex left-0 w-full h-[100%] py-5 z-50">
                            <input
                                className="w-full bg-transparent outline-none border-none placeholder:text-black placeholder:text-xs "
                                type="text"
                                placeholder="Nhập từ cần tìm"
                                onChange={aaa}
                                value={searchKey}
                            />
                            <AiOutlineClose
                                className="block text-3xl cs-hover text-red-400"
                                onClick={Open}
                            />
                        </div>
                    </form>
                </div>
                <ul className=" xl:flex hidden items-center gap-5">
                    <CustomLink to="/">Trang chủ</CustomLink>
                    <CustomLink to="/introduce">Giới thiệu</CustomLink>
                    <CustomLink to="/adidas" className="relative group">
                     
                            Adidas
                      
                        <ul className="absolute z-20 top-[48px] hidden group-hover:block top-bottom w-[280px] bg-white shadow-xl transition-all duration-300">
                            <li className="sub-group h-[40px] border-b px-4 flex items-center font-[500] hover:text-white hover:bg-yellow-300 hover:cursor-pointer transition-all duration-100 ">
                                <Link
                                    to="nam"
                                    className="transition-all duration-300 sub-group-content"
                                >
                                    Nam
                                </Link>
                            </li>
                            <li className="sub-group h-[40px] border-b px-4 flex items-center font-[500] hover:text-white hover:bg-yellow-300 hover:cursor-pointer transition-all duration-100 ">
                                <Link
                                    to="nu"
                                    className="transition-all duration-300 sub-group-content"
                                    href="##"
                                >
                                    Nữ
                                </Link>
                            </li>
                        </ul>
                    </CustomLink>
                    <CustomLink to="/nike" className="relative group">
                      
                            Nike
                     
                        <ul className="absolute z-20 top-[48px] hidden group-hover:block top-bottom w-[280px] bg-white shadow-xl transition-all duration-300">
                            <li className="sub-group h-[40px] border-b px-4 flex items-center font-[500] hover:text-white hover:bg-yellow-300 hover:cursor-pointer transition-all duration-100 ">
                                <Link
                                    to="nam"
                                    className="transition-all duration-300 sub-group-content"
                                >
                                    Nam
                                </Link>
                            </li>
                            <li className="sub-group h-[40px] border-b px-4 flex items-center font-[500] hover:text-white hover:bg-yellow-300 hover:cursor-pointer transition-all duration-100 ">
                                <Link
                                    to="nu"
                                    className="transition-all duration-300 sub-group-content"
                                    href="##"
                                >
                                    Nữ
                                </Link>
                            </li>
                        </ul>
                    </CustomLink>

                    <CustomLink to="/yeezy" className="relative group">
                       
                            Yeezy
                     
                        <ul className="absolute z-20 top-[48px] hidden group-hover:block top-bottom w-[280px] bg-white shadow-xl transition-all duration-300">
                            <li className="sub-group h-[40px] border-b px-4 flex items-center font-[500] hover:text-white hover:bg-yellow-300 hover:cursor-pointer transition-all duration-100 ">
                                <Link
                                    to="nam"
                                    className="transition-all duration-300 sub-group-content"
                                >
                                    Yeezy Bosst 350
                                </Link>
                            </li>
                            <li className="sub-group h-[40px] border-b px-4 flex items-center font-[500] hover:text-white hover:bg-yellow-300 hover:cursor-pointer transition-all duration-100 ">
                                <Link
                                    to="nu"
                                    className="transition-all duration-300 sub-group-content"
                                    href="##"
                                >
                                    Yeezy Bosst 370
                                </Link>
                            </li>
                        </ul>
                    </CustomLink>
                    <CustomLink to="/spa">Spa Giày</CustomLink>

                    <CustomLink to="/contacs    ">Liên hệ</CustomLink>
                </ul>

                <div className="flex items-center gap-3">
                    <form onSubmit={() => handleSubmit(searchItems(searchKey))}>
                        <div className="border rounded-full bg-gray-200  py-2 px-4 items-center hidden md:flex">
                            <input
                                className="w-full bg-transparent outline-none border-none placeholder:text-black placeholder:text-xs "
                                type="text"
                                placeholder="Nhập từ cần tìm "
                                onChange={aaa}
                                value={searchKey}
                            />
                            <button type="button">
                                <AiOutlineSearch
                                    type="submit"
                                    className="block text-3xl cs-hover focus:bg-red-400"
                                />
                            </button>
                        </div>
                    </form>

                    <div className="p-2 md:hidden rounded-full bg-gray-200 text-yellow-400 flex justify-center items-center">
                        <AiOutlineSearch
                            className="block text-3xl cs-hover focus:bg-red-400 "
                            onClick={Open}
                        />
                    </div>

                    <Link
                        to="/shoppingCart"
                        className="bg-black w-12 h-12 rounded-full flex items-center justify-center relative hover:bg-yellow-400 transition-all duration-300 hover:cursor-pointer"
                        onClick={() => console.log("tui la shop")}
                    >
                        <AiOutlineShoppingCart className="text-white text-3xl" />
                        <span className="flex items-center justify-center w-6 h-6 bg-yellow-500 rounded-full absolute -top-2 -right-2 border-2 text-xs cursor-pointer">
                            {allCart}
                        </span>
                    </Link>
                    {isOpenSidebar ? (
                        <div
                            className="xl:hidden bg-red-500 w-12 h-12 rounded-full flex items-center justify-center relative hover:bg-yellow-400 transition-all duration-300 hover:cursor-pointer"
                            onClick={Handle}
                        >
                            <AiOutlineClose className="text-white text-3xl" />
                        </div>
                    ) : (
                        <div
                            className="xl:hidden bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center relative  transition-all duration-300 hover:cursor-pointer"
                            onClick={Handle}
                        >
                            <AiOutlineBars className="text-white text-3xl" />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
