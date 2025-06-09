import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "../home/components/Navbar";
import Header from "../home/components/Header";
import Product from "./components/Product";

const SelectedShoes = () => {
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
            <Product />
        </div>
    );
};

export default SelectedShoes;
