import React from "react";

const ShoesNavbar = ({ sidebarOpen }) => {
    return (
        <div
            className={`${
                sidebarOpen ? "z-0" : "z-50"
            } flex items-center justify-between px-4 bg-white sticky top-0 md:z-50 font-inter py-3 md:px-12`}
        >
            <h2 className="text-xl md:text-2xl font-semibold text-black">
                Nike's Shoes
            </h2>
            <div className="flex space-x-3 items-center">
                <h2 className="text-xl space-x-1 text-black">
                    Sort By <i className="fa-solid fa-angle-down"></i>
                </h2>
            </div>
        </div>
    );
};

export default ShoesNavbar;
