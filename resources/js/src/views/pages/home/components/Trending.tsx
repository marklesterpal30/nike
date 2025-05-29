import React, { useRef } from "react";
import trending1 from "../../../assets/trending/trending1.jpg";
import trending2 from "../../../assets/trending/trending2.jpg";
import trending3 from "../../../assets/trending/trending3.jpg";
import trending4 from "../../../assets/trending/trending4.jpg";
import trending5 from "../../../assets/trending/trending5.jpg";
import trending6 from "../../../assets/trending/trending6.jpg";
import trending7 from "../../../assets/trending/trending7.jpg";
import trending8 from "../../../assets/trending/trending8.jpg";
import trending9 from "../../../assets/trending/trending9.jpg";
import trending10 from "../../../assets/trending/trending10.jpg";

const Trending = () => {
    const trendings = [
        {
            image: trending1,
            name: "Nike Pegasus 41 'Jakob Ingebrigtsen'",
            description: "Men's Road Running Shoes",
            price: "₱7,895",
        },
        {
            image: trending2,
            name: "A'One 'OG Pearls' EP",
            description: "A'ja Wilson Basketball  Shoes",
            price: "₱6,295",
        },
        {
            image: trending3,
            name: "A' One 'OG Pearl'",
            description: "A'ja Wilson Older Kid's Basketball Shoes",
            price: "₱5,195",
        },
        {
            image: trending4,
            name: "Nike Clogpsoite",
            description: "Men's Shoes",
            price: "₱8,095",
        },
        {
            image: trending5,
            name: "Nike Pegasus 41 PRM",
            description: "Men's Road Running Shoes",
            price: "₱7,895",
        },
        {
            image: trending6,
            name: "Nike Pegasus 41",
            description: "Men's Road Running Shoes",
            price: "₱7,395",
        },
        {
            image: trending7,
            name: "Nike Pegasus 41",
            description: "Men's Road Running Shoes",
            price: "₱7,395",
        },
        {
            image: trending8,
            name: "Nike Pegasus 41",
            description: "Men's Road Running Shoes",
            price: "₱7,395",
        },
        {
            image: trending9,
            name: "Nike Pegasus 41",
            description: "Men's Road Running Shoes",
            price: "₱7,395",
        },
        {
            image: trending10,
            name: "Nike Pegasus 41",
            description: "Men's Road Running Shoes",
            price: "₱7,395",
        },
    ];

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -1, behavior: "smooth" });
    };
    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });
    };

    return (
        <div className="px-4 md:px-20 mt-32 font-inter">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-medium md:mb-4">Trending Now</h2>
                <div className=" items-center hidden md:flex">
                    <div className="flex items-center space-x-8 ">
                        <h2 className="text-lg font-medium text-black">Shop</h2>
                        <div className="space-x-3 ">
                            <button onClick={scrollLeft}>
                                <i className="fa-solid fa-chevron-left px-6 py-5 rounded-full bg-gray-200 hover:bg-gray-300"></i>
                            </button>
                            <button onClick={scrollRight}>
                                <i className="fa-solid fa-chevron-right px-6 py-5 rounded-full bg-gray-200 hover:bg-gray-300"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                ref={scrollRef}
                className="flex space-x-1 md:space-x-3 snap-x snap-mandatory scrollbar-hide overflow-x-auto"
            >
                {trendings.map((trending, index) => (
                    <div className="py-4 md:py-10">
                        <div className="flex">
                            <img
                                src={trending.image}
                                alt=""
                                className="md:h-[333px] w-[333px] md:w-[430px] flex-shrink-0 snap-start"
                            />
                        </div>
                        <div className="mt-4 space-y-2">
                            <h2 className="text-black font-medium">
                                {trending.name}
                            </h2>
                            <p className="text-black/70">
                                {trending.description}
                            </p>
                            <h2 className="text-black font-semibold mt-4 text-lg">
                                {trending.price}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trending;
