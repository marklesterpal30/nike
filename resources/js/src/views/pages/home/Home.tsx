import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="h-screen bg-gray-50"></div>
            <div className="h-screen bg-gray-50"></div>
        </div>
    );
};

export default Home;
