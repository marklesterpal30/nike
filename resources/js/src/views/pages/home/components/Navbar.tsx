import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import nikeswoosh from "../../../assets/nikeswoosh.png";
import jordanlogo from "../../../assets/jordanlogo.png";

import { useMediaQuery } from "react-responsive";

const Navbar = () => {
    // Hide/show navbar on scroll
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Sidebar open state
    const [sidebarOpen, setSidebarOpen] = useState(isMobile);

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
        if (isMobile) {
            setSidebarOpen(false);
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isMobile]);

    // Sidebar animation variants
    const sidebarVariants = {
        open: {
            x: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 },
        },
        closed: {
            x: "-100%",
            transition: { type: "spring", stiffness: 300, damping: 30 },
        },
    };

    return (
        <>
            <motion.nav
                initial={{ y: 0 }}
                animate={{ y: showNavbar ? 0 : "-100%" }}
                transition={{ duration: 0.3 }}
                className="bg-white sticky top-0 z-50"
            >
                <div className="flex flex-wrap items-center justify-between md:px-14 w-full py-2 font-inter">
                    {/* LOGO */}
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src={nikeswoosh}
                            alt=""
                            className="w-20 h-12 md:h-16"
                        />
                    </a>

                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        {/* PROFILE AVATAR */}
                        <button
                            type="button"
                            className="flex space-x-1.5 text-xl"
                            id="user-menu-button"
                            aria-expanded="false"
                            data-dropdown-toggle="user-dropdown"
                            data-dropdown-placement="bottom"
                        >
                            <i className="fa-regular fa-heart text-black"></i>
                            <i className="fa-solid fa-bag-shopping text-black"></i>
                        </button>

                        {/* PHONE HAMBURGER MENU */}
                        <button
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-user"
                            aria-expanded={sidebarOpen}
                            onClick={() => setSidebarOpen(!sidebarOpen)}
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

                    {/* MENU LIST - Hidden on small screens */}
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-user"
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-white md:text-black bg-blue-700 rounded-sm md:bg-transparent md:p-0"
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

            {/* Sidebar for small screens */}
            <AnimatePresence>
                {sidebarOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSidebarOpen(false)}
                            className="fixed inset-0 bg-black z-40 font-inter"
                        />
                        {/* Sidebar */}
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sidebarVariants}
                            className="fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-50 p-6"
                        >
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="mb-8 text-gray-600 hover:text-black"
                                aria-label="Close sidebar"
                            >
                                <i className="fa-solid fa-xmark text-2xl"></i>
                            </button>
                            <ul className="flex flex-col space-y-4 font-medium font-inter">
                                <li className=" -mb-0.5">
                                    <a
                                        href="#"
                                        className="text-black text-2xl font-medium hover:text-blue-700"
                                    >
                                        News & Featured
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="#"
                                        className="text-black text-2xl font-medium hover:text-blue-700"
                                    >
                                        Shoes
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="#"
                                        className="text-black text-2xl font-medium hover:text-blue-700"
                                    >
                                        Clothing
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="#"
                                        className="text-black text-2xl font-medium hover:text-blue-700"
                                    >
                                        Shop by Sport
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="#"
                                        className="text-black text-2xl font-medium hover:text-blue-700"
                                    >
                                        Accessories
                                    </a>
                                </li>
                            </ul>
                            <div className="flex items-center space-x-1 mt-20">
                                <img src={jordanlogo} className="w-8" alt="" />
                                <h2 className="text-2xl font-medium">Jordan</h2>
                            </div>
                            <div className="mt-12 text-left">
                                <h2 className="text-black/70 font-medium text-xl font-inter">
                                    Become a Nike Member for the best products,
                                    insipiration and stories in sport{" "}
                                    <span className="text-blac font-semibold">
                                        Learn more
                                    </span>
                                </h2>
                                <div className="flex space-x-2 mt-3 font-inter">
                                    <button className="px-6 py-2 font-medium rounded-2xl  bg-black text-white">
                                        Join us
                                    </button>
                                    <button className="px-6 py-2 font-medium rounded-2xl border-2 border-black/40  bg-white text-black">
                                        Sign in
                                    </button>
                                </div>
                            </div>
                            <div className="text-black font-inter space-y-1 -ml-2   mt-12 ">
                                <div className="flex items-center   space-x-2">
                                    <i className="fa-solid fa-circle-question  text-2xl px-2 ml-0.5"></i>
                                    <h2 className="text-xl">Help</h2>
                                </div>
                                <div className="flex items-center   space-x-2">
                                    <i className="fa-solid fa-bag-shopping  text-2xl px-2 ml-0.5"></i>
                                    <h2 className="text-xl">Bag</h2>
                                </div>
                                <div className="flex items-center   space-x-2">
                                    <i className="fa-solid fa-cart-shopping  text-2xl px-2 -ml-0.5"></i>
                                    <h2 className="text-xl">Orders</h2>
                                </div>
                                <div className="flex items-center   space-x-2">
                                    <i className="fa-solid fa-store  text-2xl px-2 ml-0.5"></i>
                                    <h2 className="text-xl">Find a store</h2>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
