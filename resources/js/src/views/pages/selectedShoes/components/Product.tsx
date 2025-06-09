import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useProduct } from "../../../../context/ProductContext";

const ProductFooter = ({ title, items }) => {
    const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
    const [isOpen, setIsOpen] = useState(isDesktop);
    const [count, setcount] = useState(0);

    // Auto-open when switching to desktop
    useEffect(() => {
        if (isDesktop) {
            setIsOpen(true);
        }

        console.log(`count: ${count} for ${title}`);
    }, [isDesktop]);

    return (
        <div className="space-y-4 w-full md:w-auto">
            <h2
                onClick={() => {
                    if (!isDesktop) {
                        setIsOpen((prev) => !prev);
                    }
                }}
                className="text-black mb-2 font-semibold text-lg cursor-pointer flex justify-between items-center md:mb-8"
            >
                {title}
                {!isDesktop && <span>{isOpen ? "-" : "+"}</span>}
            </h2>

            <AnimatePresence initial={false}>
                {(isOpen || isDesktop) && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden md:block space-y-2"
                    >
                        {items.map((item, index) => (
                            <p key={index} className="footer-link">
                                {item}
                            </p>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Product = () => {
    const { selectedProduct } = useProduct();

    console.log(selectedProduct);

    return (
        <div className="font-inter px-2 md:px-24 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="block md:hidden information px-5 py-5 space-y-3 ">
                    <h2 className="text-red-600 font-medium text-lg">
                        Sustainable Materials
                    </h2>
                    <h2 className="text-black font-medium text-xl">
                        {selectedProduct.name}
                    </h2>
                    <p className="text-gray-500 font-medium">
                        {selectedProduct.description}
                    </p>
                    <h2 className="text-black font-medium">
                        ₱{selectedProduct.price}
                    </h2>
                </div>
                <div className="relative  picture  h-fit flex justify-end items-start">
                    <img
                        src={selectedProduct.image}
                        alt=""
                        className="w-auto  h-auto"
                    />
                    <button className="bg-white absolute top-4 left-4 text-black px-5 py-2.5 rounded-3xl">
                        <i className="fa-solid fa-star"></i> Highly Rated
                    </button>
                </div>

                <div className="  ">
                    <div className="hidden md:block information px-5 py-5 space-y-3">
                        <h2 className="text-red-600 font-medium text-lg">
                            Sustainable Materials
                        </h2>
                        <h2 className="text-black font-medium text-xl">
                            Nike Donwshifter 13
                        </h2>
                        <p className="text-gray-500 font-medium">
                            Men's Road Running Shoes
                        </p>
                        <h2 className="text-black font-medium">₱3,9245</h2>
                    </div>
                    <div className="sizing px-8 py-5">
                        <div className="flex justify-between font-semibold">
                            <h2 className="text-black">Select Size</h2>
                            <h2 className="sapce-x-1">
                                <i className="fa-solid fa-arrows-left-right-to-line mr-1"></i>
                                Size Guide
                            </h2>
                        </div>
                        <div className="grid grid-cols-3 mt-4 gap-3">
                            <button className="border-2 border-black/50 rounded-sm px-3 py-3">
                                Us 7
                            </button>
                            <button className="border-2 border-black/50 rounded-sm px-3 py-3">
                                Us 7.5
                            </button>
                            <button className="border-2 border-black/50 rounded-sm px-3 py-3">
                                Us 8
                            </button>
                            <button className="border-2 border-black/50 rounded-sm px-3 py-3">
                                Us 8.5
                            </button>
                            <button className="border-2 border-black/50 rounded-sm px-3 py-3">
                                Us 9
                            </button>
                            <button className="border-2 border-black/50 rounded-sm px-3 py-3">
                                Us 9.5
                            </button>
                            <button className="border-2 border-black/50 rounded-sm px-3 py-3">
                                Us 10
                            </button>
                        </div>
                        <div className="py-2">
                            <p className="text-gray-600 text-sm font-medium">
                                Fits small; we recommend ordering half size up.
                            </p>
                        </div>
                        <div className="py-4 space-y-2 font-medium">
                            <button className="py-4 w-full text-white bg-black rounded-3xl">
                                Add to Bag
                            </button>
                            <button className="py-4 w-full text-black bg-white border-2 border-black rounded-3xl">
                                Favourite{" "}
                                <i className="fa-regular fa-heart"></i>
                            </button>
                        </div>
                        <div>
                            <p className="bg-gray-100 p-4 py-8 text-black font-medium">
                                This product is made with a least 50% recycled
                                content by weight
                            </p>
                        </div>
                        <div className="py-4">
                            <p className="text-black leading-6 font-medium">
                                Whether you starting your running journey or an
                                expert eager to switch up your pace, The
                                Downshifter 13 is down for the ride. With
                                breathable mesh and can updated internal fit
                                brand, it helps you find that extra gear or take
                                that first stride towards chasing down your
                                goals.
                            </p>
                            <ul className="list-disc pl-5 py-5 space-y-2 text-black font-medium">
                                <li>Colour Shown: White/Wolf Grey</li>
                                <li>Style: FD6454-100</li>
                                <li>
                                    Country/Region of Origin: Indonesia, Vietnam
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="faqs flex flex-col md:flex-row md:space-x-40 space-y-6 md:space-y-0 overflow-auto px-5">
                <div className="-mb-1">
                    <ProductFooter
                        title="Resources"
                        items={[
                            "Find A Store",
                            "Become A Member",
                            "Running Shoe Finder",
                            "Product Advice",
                            "Education Discount",
                            "Send Us Feedback",
                        ]}
                    />
                </div>

                <ProductFooter
                    title="Help"
                    items={[
                        "Get Help",
                        "Order Status",
                        "Delivery",
                        "Returns",
                        "Payment Options",
                        "Contact Us",
                    ]}
                />
                <ProductFooter
                    title="Company"
                    items={[
                        "About Nike",
                        "News",
                        "Careers",
                        "Investors",
                        "Sustainability",
                        "Impact",
                        "Report a concern",
                    ]}
                />
            </div>
        </div>
    );
};

export default Product;
