import { createContext, useState, useContext } from "react";
import shoes1 from "../views/assets/shoes/shoes1.jpg";
import shoes2 from "../views/assets/shoes/shoes2.jpg";
import shoes3 from "../views/assets/shoes/shoes3.jpg";
import shoes4 from "../views/assets/shoes/shoes4.jpg";
import shoes5 from "../views/assets/shoes/shoes5.jpg";
import shoes6 from "../views/assets/shoes/shoes6.jpg";
import shoes7 from "../views/assets/shoes/shoes7.jpg";
import shoes8 from "../views/assets/shoes/shoes8.jpg";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products] = useState([
        {
            name: "Nike Air Force 1 '07",
            description: "Soccer Shoes",
            price: "5,113",
            image: shoes1,
            dateReleased: "2023-09-10",
        },
        {
            name: "Nike Air Max 270",
            description: "Soccer Shoes",
            price: "3,432",
            image: shoes2,
            dateReleased: "2022-06-15",
        },
        {
            name: "Nike Dunk Low Retro",
            description: "Basketball Shoes",
            price: "2,322",
            image: shoes3,
            dateReleased: "2023-03-22",
        },
        {
            name: "Air Zoom Pegasus 40",
            description: "Running Shoes",
            price: "5,232",
            image: shoes4,
            dateReleased: "2024-01-05",
        },
        {
            name: "Blazer Mid '77 Vintage",
            description: "Basketball Shoes",
            price: "4,232",
            image: shoes5,
            dateReleased: "2022-11-18",
        },
        {
            name: "Infinity Run Flyknit 3",
            description: "Running Shoes",
            price: "2,232",
            image: shoes6,
            dateReleased: "2024-05-01",
        },
        {
            name: "Nike LeBron 21",
            description: "Basketball Shoes",
            price: "5,122",
            image: shoes7,
            dateReleased: "2023-10-12",
        },
        {
            name: "Nike Metcon 9",
            description: "Training Shoes",
            price: "3,422",
            image: shoes8,
            dateReleased: "2024-02-27",
        },
    ]);

    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <ProductContext.Provider
            value={{ products, selectedProduct, setSelectedProduct }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => useContext(ProductContext);
