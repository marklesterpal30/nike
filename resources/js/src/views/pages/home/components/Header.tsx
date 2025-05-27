import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    // remove all the logic and all framer motion here i will practice doing it my self
    // make an array of objects that is consits of id and title
    // use state index to to which slide will display
    // use a useEffect to add index by 1 every 3 seconds
    // then use variants object to make a display anitmation that will apply to each slides
    // use the variants object to the motion
    //essay
    // we cant animate element when its not on the dom
    // and this part we change the index every 3 seconds and since
    // and since after 3 seconds it will remove or exit on the dom we cant animate
    // thats why we are using AnimatePresence
    // we tell that before it remove on the dom  must finsish this animation
    const slides = [
        {
            id: 1,
            title: "Free Standard Delivery & 30 Day Free Return",
            button1: "Join Us",
            button2: "View Details",
        },
        {
            id: 2,
            title: "Enjoy 15% off on Nike App. Use App15",
            button1: "Donwload Now",
        },
        {
            id: 3,
            title: "Student and Teachers get 15% off",
            button1: "Learn More",
        },
    ];

    const [index, setIndex] = useState(0);
    const [goingLeft, setGoingLeft] = useState(false);

    useEffect(() => {
        setGoingLeft(true);

        const interval = setInterval(() => {
            setIndex((prev) => (prev === 2 ? 0 : prev + 1));
        }, 3000);

        // Cleanup
        return () => clearInterval(interval);
    }, []);

    const variants = {
        enter: (left) => ({
            x: left ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (left) => ({
            x: left ? "-100%" : "100%",
            opacity: 0,
        }),
    };

    return (
        <div className="relative w-full h-20 overflow-hidden bg-gray-100 font-inter">
            <AnimatePresence custom={goingLeft}>
                <motion.div
                    key={slides[index].id}
                    custom={goingLeft}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="absolute w-full h-full flex flex-col items-center justify-center"
                >
                    <div>
                        <h2 className="text-xl font-normal">
                            {slides[index].title}
                        </h2>
                    </div>
                    <div className="flex space-x-1">
                        <a className="underline text-sm font-semibold">
                            {slides[index].button1}
                        </a>
                        <a className="underline text-sm font-semibold">
                            {slides[index].button2}
                        </a>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Header;
