import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const FooterSection = ({ title, items }) => {
    const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
    const [isOpen, setIsOpen] = useState(isDesktop);

    // Auto-open when switching to desktop
    useEffect(() => {
        if (isDesktop) {
            setIsOpen(true);
        }
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

const Footer = () => {
    return (
        <div className="px-6 md:px-12 py-12 mt-24 md:mt-32 font-inter">
            <div className="border-t-4 border-gray-200">
                <div className="flex justify-between mt-8 flex-col md:flex-row">
                    <div className="flex flex-col md:flex-row md:space-x-40 space-y-6 md:space-y-0 overflow-auto">
                        <FooterSection
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
                        <FooterSection
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
                        <FooterSection
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
                    <div className="mt-8 md:mt-0">
                        <h2 className="footer-link">
                            <i className="fa-solid fa-globe mr-1 text-gray-600"></i>
                            Philippines
                        </h2>
                    </div>
                </div>
                <div className="bottom footer-link flex flex-col md:flex-row  gap-8 md:gap-4 mt-28">
                    <p>© 2025 Nike, Inc. All rights reserved</p>
                    <p>
                        Guides<i className="fa-solid fa-angle-down ml-2"></i>
                    </p>
                    <p>Terms of Sale</p>
                    <p>Terms of Use</p>
                    <p>Nike Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
