import React from "react";
import featured1 from "../../../assets/featured1.jpg";
import featured2 from "../../../assets/featured2.jpg";
import featured3 from "../../../assets/featured3.jpg";

const Featured = () => {
    return (
        <div className="font-inter px-28 mt-32 text-black">
            <h2 className="text-2xl font-medium mb-2 ">Featured</h2>
            <div className="grid grid-cols-3 gap-x-3 ">
                <div className="space-y-8">
                    <img src={featured1} alt="" />
                    <a className="capitalize tracking-tight cursor-pointer font-medium text-black/90 text-xl">
                        Your one and only layer
                    </a>
                </div>
                <div className="space-y-8">
                    <img src={featured2} alt="" />
                    <a className="capitalize tracking-tight cursor-pointer font-medium text-black/90 text-xl">
                        Nike Killshot
                    </a>
                </div>
                <div className="space-y-8">
                    <img src={featured3} alt="" />
                    <a className="capitalize tracking-tight cursor-pointer font-medium text-black/90 text-xl">
                        Nike Sonic Fly
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Featured;
