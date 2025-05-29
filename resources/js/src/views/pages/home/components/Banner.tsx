import React from "react";
import banner from "../../../assets/banner.jpg";
import smbanner from "../../../assets/smbanner.jpg";

const Banner = () => {
    return (
        <div className="px-4 md:px-12 font-inter">
            <img src={banner} className="hidden md:flex" alt="" />
            <img src={smbanner} className="flex md:hidden" alt="" />
            <div className="flex items-center justify-center">
                <div className="text-left md:text-center mt-6">
                    <h2 className="font-extrabold text-4xl md:text-7xl tracking-tight text-black">
                        ELEVATE YOUR LOOK
                    </h2>
                    <p className="text-black mt-4 text-lg md:mt-0">
                        Be ready for anything with the season's newest styles.
                    </p>
                    <button className="px-4 py-2 border-2 rounded-3xl text-white bg-black mt-4 font-medium hover:bg-white hover:text-black hover:border-black hover:border-2">
                        Shop Sandals
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
