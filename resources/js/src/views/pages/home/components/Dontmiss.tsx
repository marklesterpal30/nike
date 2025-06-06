import React from "react";
import dontmiss1 from "../../../assets/dontmiss1.jpg";
import dontmiss2 from "../../../assets/dontmiss3.jpg";

const Dontmiss = () => {
    return (
        <div className="px-4 md:px-20 mt-32 font-inter">
            <h2 className="text-2xl font-medium mb-4">Don't Miss</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-x-4">
                <div className="relative h-[555px] md:h-full">
                    <img
                        src={dontmiss1}
                        alt=""
                        className="object-cover h-full w-full"
                    />
                    <div className="absolute bottom-12 left-8 space-y-4">
                        <h2 className="text-white font-semibold text-2xl">
                            Luka.77 'Space Navigator'
                        </h2>
                        <button className="px-5 py-2 rounded-2xl bg-white text-black font-medium hover:bg-white/90">
                            Shop
                        </button>
                    </div>
                </div>
                <div className="relative h-[555px] md:h-full">
                    <img
                        src={dontmiss2}
                        alt=""
                        className="object-cover h-full w-full"
                    />
                    <div className="absolute bottom-12 left-8 space-y-4">
                        <h2 className="text-white font-semibold text-2xl">
                            Luka.77 'Space Navigator'
                        </h2>
                        <button className="px-5 py-2 rounded-2xl bg-white text-black font-medium hover:bg-white/90">
                            Shop
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dontmiss;
