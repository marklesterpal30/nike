import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { ProductProvider } from "./context/ProductContext";

const App = () => {
    return (
        <BrowserRouter>
            <ProductProvider>
                <Routes />
            </ProductProvider>
        </BrowserRouter>
    );
};

export default App;
