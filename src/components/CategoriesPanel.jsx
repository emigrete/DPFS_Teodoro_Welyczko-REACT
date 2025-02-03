import { useEffect, useState } from "react";
import { getTotalProducts } from "../api";

const CategoriesPanel = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getTotalProducts().then(data => {
            setCategories(data.countByCategory);
        });
    }, []);

    return (
        <div className="card">
            <h2>📊 Productos por Categoría</h2>
            <div className="categories-grid">
                {categories && Object.keys(categories).map((category, index) => (
                    <div key={index} className="category-item">
                        {category}: {categories[category]}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesPanel;
