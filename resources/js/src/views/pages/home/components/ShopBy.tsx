import React, { useRef } from "react";
import shoes1 from "../../../assets/shopby/shoes1.jpg";
import shoes2 from "../../../assets/shopby/shoes2.jpg";
import shoes3 from "../../../assets/shopby/shoes3.jpg";
import shoes4 from "../../../assets/shopby/shoes4.jpg";
import shoes5 from "../../../assets/shopby/shoes5.jpg";
import shoes6 from "../../../assets/shopby/shoes6.jpg";
import shoes7 from "../../../assets/shopby/shoes7.jpg";
import shoes8 from "../../../assets/shopby/shoes8.jpg";
import shoes9 from "../../../assets/shopby/shoes9.jpg";
import shoes10 from "../../../assets/shopby/shoes10.jpg";
import shoes11 from "../../../assets/shopby/shoes11.jpg";

const ShopBy = () => {
    const scrollRef = useRef(null);

    const shoeses = [
        shoes1,
        shoes2,
        shoes3,
        shoes4,
        shoes5,
        shoes6,
        shoes7,
        shoes8,
        shoes9,
        shoes10,
        shoes11,
    ];

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -1, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });
    };

    return (
        <div className="px-4 md:px-20 font-inter relative mt-28 md:mt-32">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-medium mb-4">Shop By Icons</h2>
                <div className="flex space-x-2">
                    <button onClick={scrollLeft}>
                        <i className="fa-solid fa-chevron-left px-5 md:px-6 py-4 md:py-5 rounded-full bg-gray-200 hover:bg-gray-300"></i>
                    </button>
                    <button onClick={scrollRight}>
                        <i className="fa-solid fa-chevron-right px-5 md:px-6 py-4 md:py-5 rounded-full bg-gray-200 hover:bg-gray-300"></i>
                    </button>
                </div>
            </div>
            {/* Scroll buttons */}

            {/* Scrollable Image List */}
            <div
                ref={scrollRef}
                className="flex space-x-2 md:space-x-3 py-4 md:py-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            >
                {shoeses.map((imgSrc, idx) => (
                    <img
                        key={idx}
                        src={imgSrc}
                        alt={`shoe-${idx + 1}`}
                        className="h-[333px] w-[311px] md:w-[430px] flex-shrink-0 snap-start"
                    />
                ))}
            </div>
        </div>
    );
};

export default ShopBy;
