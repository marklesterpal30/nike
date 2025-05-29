import React, { useRef } from "react";

import sport1 from "../../../assets/sports/sport1.jpg";
import sport2 from "../../../assets/sports/sport2.jpg";
import sport3 from "../../../assets/sports/sport3.jpg";
import sport4 from "../../../assets/sports/sport4.jpg";
import sport5 from "../../../assets/sports/sport5.jpg";
import sport6 from "../../../assets/sports/sport6.jpg";
import sport7 from "../../../assets/sports/sport7.jpg";
import sport8 from "../../../assets/sports/sport8.jpg";

const BySport = () => {
    const sports = [
        { image: sport1, name: "Running" },
        { image: sport2, name: "Football" },
        { image: sport3, name: "Basketball" },
        { image: sport4, name: "Training and Gym" },
        { image: sport5, name: "Tennis" },
        { image: sport6, name: "Yoga" },
        { image: sport7, name: "Skateboarding" },
        { image: sport8, name: "Dance" },
    ];

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -1, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });
    };

    return (
        <div className="px-4 md:px-20 mt-32">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-medium md:mb-4">Shop By Sports</h2>
                <div className="md:flex space-x-2 hidden">
                    <button onClick={scrollLeft}>
                        <i className="fa-solid fa-chevron-left px-6 py-5 rounded-full bg-gray-200 hover:bg-gray-300"></i>
                    </button>
                    <button onClick={scrollRight}>
                        <i className="fa-solid fa-chevron-right px-6 py-5 rounded-full bg-gray-200 hover:bg-gray-300"></i>
                    </button>
                </div>
            </div>
            <div
                ref={scrollRef}
                className="flex  space-x-1 md:space-x-4 snap-x snap-mandatory overflow-x-auto scrollbar-hide py-6"
            >
                {sports.map((sport, index) => (
                    <div className="flex relative">
                        <img
                            src={sport.image}
                            className="flex-shrink-0 h-[333px] w-[333px] md:w-[424px] md:h-[300pxpx] snap-start"
                            alt=""
                        />
                        <button className="absolute bottom-10 font-semibold text-black left-12 bg-white px-4 py-2 rounded-2xl">
                            {sport.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BySport;
