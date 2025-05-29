import React from "react";
import featured1 from "../../../assets/featured1.jpg";
import featured2 from "../../../assets/featured2.jpg";
import featured3 from "../../../assets/featured3.jpg";

const Featured = () => {
    return (
        <div className="font-inter px-4 md:px-28 mt-24 md:mt-32 text-black">
            <h2 className="text-2xl font-medium  ">Featured</h2>
            <div className="flex space-x-1 py-4 overflow-auto md:grid md:grid-cols-3 md:gap-x-3 md:space-x-0">
                <div className="space-y-8 flex-shrink-0 ">
                    <img
                        src={featured1}
                        className="h-[388px] md:h-fit w-full"
                        alt=""
                    />
                    <a className="capitalize tracking-tight cursor-pointer font-medium text-black/90 text-xl">
                        Your one and only layer
                    </a>
                </div>
                <div className="space-y-8 flex-shrink-0">
                    <img
                        src={featured2}
                        className="h-[388px] md:h-fit w-full"
                        alt=""
                    />
                    <a className="capitalize tracking-tight cursor-pointer font-medium text-black/90 text-xl">
                        Nike Killshot
                    </a>
                </div>
                <div className="space-y-8 flex-shrink-0">
                    <img
                        src={featured3}
                        className="h-[388px] md:h-fit w-full"
                        alt=""
                    />
                    <a className="capitalize tracking-tight cursor-pointer font-medium text-black/90 text-xl">
                        Nike Sonic Fly
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Featured;
