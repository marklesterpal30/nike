import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import Latest from "./components/Latest";
import ShopBy from "./components/ShopBy";
import Dontmiss from "./components/Dontmiss";
import Trending from "./components/Trending";
import BySport from "./components/BySport";
import Footer from "./components/Footer";
import YouTubePlaylistUI from "./components/YouTubePlaylistUI";

const Home = () => {
    return (
        <div className="w-screen overflow-hidden">
            <Navbar />
            <Header />
            <Banner />
            <Featured />
            <Latest />
            <ShopBy />
            <Dontmiss />
            <Trending />
            <BySport />
            <Footer />
            <div className="h-screen bg-gray-50"></div>
            <div className="h-screen bg-gray-50"></div>
        </div>
    );
};

export default Home;
