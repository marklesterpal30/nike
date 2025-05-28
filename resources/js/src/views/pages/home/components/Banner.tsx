import React from "react";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
    return (
        <div className="px-12 font-inter">
            <img src={banner} alt="" />
            <div className="flex items-center justify-center">
                <div className="text-center mt-6">
                    <h2 className="font-extrabold text-7xl tracking-tight text-black">
                        ELEVATE YOUR LOOK
                    </h2>
                    <p className="text-black ">
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
