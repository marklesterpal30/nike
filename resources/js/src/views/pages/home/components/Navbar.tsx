import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import nikeswoosh from "../../../assets/nikeswoosh.png";

const Navbar = () => {
    //HIDE AND SHOW NAVBAR
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setShowNavbar(false); // scrolling down
        } else {
            setShowNavbar(true); // scrolling up
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: showNavbar ? 0 : "-100%" }}
            transition={{ duration: 0.3 }}
            className="bg-white  sticky top-0 z-50"
        >
            <div className=" flex flex-wrap items-center justify-between md:px-14 w-full py-2 font-inter">
                {/* LOGO */}
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                        src={nikeswoosh}
                        alt=""
                        className="w-20  h-12 md:h-16"
                    />
                </a>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {/* PROFILE AVATAR */}
                    <button
                        type="button"
                        className="flex space-x-1.5 text-xl "
                        id="user-menu-button"
                        aria-expanded="false"
                        data-dropdown-toggle="user-dropdown"
                        data-dropdown-placement="bottom"
                    >
                        <i className="fa-regular fa-heart text-black"></i>
                        <i className="fa-solid fa-bag-shopping text-black"></i>
                    </button>
                    {/*PROFILE MENU */}
                    <div
                        className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm"
                        id="user-dropdown"
                    >
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900">
                                Bonnie Green
                            </span>
                            <span className="block text-sm text-gray-500 truncate">
                                name@flowbite.com
                            </span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Earnings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* PHONE HAMBURGER MENU */}
                    <button
                        data-collapse-toggle="navbar-user"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-user"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                {/* MENU LIST */}
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-user"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8  rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-white md:text-black bg-blue-700 rounded-sm md:bg-transparent md:p-0 "
                                aria-current="page"
                            >
                                News & Featured
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            >
                                Shoes
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            >
                                Clothing
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            >
                                Shop by Sport
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            >
                                Accessories
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
