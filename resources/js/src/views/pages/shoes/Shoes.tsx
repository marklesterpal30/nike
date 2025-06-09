import React, { useState } from "react";
import Navbar from "../home/components/Navbar";
import Header from "../home/components/Header";
import ShoesNavbar from "./components/ShoesNavbar";
import { useMediaQuery } from "react-responsive";
import Product from "./components/Product";

const Shoes = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const [sidebarOpen, setSidebarOpen] = useState(isMobile);

    return (
        <div>
            <Navbar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                isMobile={isMobile}
            />
            <Header />
            <ShoesNavbar sidebarOpen={sidebarOpen} />
            <Product />
            <div className="h-screen bg-green-50"></div>
        </div>
    );
};

export default Shoes;
