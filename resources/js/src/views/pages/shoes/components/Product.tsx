import { useNavigate } from "react-router-dom";
import { useProduct } from "../../../../context/ProductContext";

const Product = () => {
    const { products, setSelectedProduct } = useProduct();
    const navigate = useNavigate();

    const goToSelectedProduct = (shoe) => {
        setSelectedProduct(shoe);
        navigate("/selectedShoes");
    };

    return (
        <div className="px-2 md:px-14 font-inter">
            <div className="grid grid-cols-2 gap-2 md:gap-4 gap-y-4 md:grid-cols-4">
                {products.map((shoe, index) => (
                    <div
                        key={index}
                        onClick={() => goToSelectedProduct(shoe)}
                        className="space-y-2 cursor-pointer"
                    >
                        <img src={shoe.image} alt={shoe.name} />
                        <div className="space-y-1.5">
                            <h2 className="font-semibold text-black">
                                {shoe.name}
                            </h2>
                            <p className="font-medium text-black/60">
                                {shoe.description}
                            </p>
                            <p className="text-black font-semibold">
                                ₱{shoe.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
