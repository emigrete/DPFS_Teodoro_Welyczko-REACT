import { useEffect, useState } from "react";
import { getTotalProducts } from "../api";

const TotalProducts = () => {
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        getTotalProducts().then(data => setTotalProducts(data.count));
    }, []);

    return (
        <div className="card">
            <h2>📦 Productos en Base</h2>
            <p>{totalProducts}</p>
        </div>
    );
};

export default TotalProducts;
