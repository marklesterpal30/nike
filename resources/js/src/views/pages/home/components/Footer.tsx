import { div } from "framer-motion/client";
import React from "react";

const Footer = () => {
    return (
        <div className="px-12 py-12 mt-32 font-inter">
            <div className=" border-t-4 border-gray-200">
                <div className="flex justify-between mt-8">
                    <div className="flex space-x-40">
                        <div className="space-y-4">
                            <h2 className="text-black mb-8 font-semibold text-lg">
                                Resources
                            </h2>
                            <p className="footer-link">Find A Store</p>
                            <p className="footer-link">Become A Member</p>
                            <p className="footer-link">Running Shoe Finder</p>
                            <p className="footer-link">Product Advice</p>
                            <p className="footer-link">Eduction Discount</p>
                            <p className="footer-link">Send Us Feedback</p>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-black mb-8 font-semibold text-lg">
                                Help
                            </h2>
                            <p>Get Help</p>
                            <p>Order Status</p>
                            <p className="footer-link">Delivery</p>
                            <p className="footer-link">Returns</p>
                            <p className="footer-link">Payment Options</p>
                            <p className="footer-link">Contact Us</p>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-black mb-8 font-semibold text-lg">
                                Company
                            </h2>
                            <p className="footer-link">About Nike</p>
                            <p className="footer-link">News</p>
                            <p className="footer-link">Careers</p>
                            <p className="footer-link">Investors</p>
                            <p className="footer-link">Sustainability</p>
                            <p className="footer-link">Impact</p>
                            <p className="footer-link">Report a concern</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="footer-link">
                            <i className="fa-solid fa-globe mr-1 text-gray-600"></i>
                            Philippines
                        </h2>
                    </div>
                </div>
                <div className="bottom footer-link flex space-x-4 mt-28">
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
