import React from "react";
import latest1 from "../../../assets/latest1.png";
import latestvid from "../../../assets/latestvid.mp4";

const Latest = () => {
    return (
        <div className="px-4  overflow-hidden md:px-20 mt-24 md:mt-32 font-inter">
            <h2 className="text-2xl font-medium text-black/90 mb-3 ">
                The Latest{" "}
            </h2>
            <div className="grid grid-cols-1 h-[455px] md:grid md:grid-cols-2 md:h-96 bg-slate-500">
                <img
                    src={latest1}
                    alt=""
                    className="h-full w-full hidden md:flex"
                />
                <video
                    src={latestvid}
                    loop
                    autoPlay
                    muted
                    className="h-full w-full object-cover"
                ></video>
            </div>

            <div className="flex items-center justify-center md:mt-20">
                <div className="text-left md:text-center mt-6">
                    <h2 className="font-extrabold text-4xl md:text-7xl tracking-tight text-black">
                        FLY VINI
                    </h2>
                    <p className="text-black text-lg">
                        Welcome aboard supersonic speed in the first Vini Jr.
                        Mercurial Vapor.
                    </p>
                    <button className="px-4 py-2 border-2 rounded-3xl text-white bg-black mt-4 font-medium hover:bg-white hover:text-black hover:border-black hover:border-2">
                        Shop Mercurial
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Latest;
