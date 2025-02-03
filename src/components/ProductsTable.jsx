import { useEffect, useState } from "react";
import { getTotalProducts } from "../api";

const ProductsTable = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getTotalProducts().then(data => setProducts(data.products));
    }, []);

    return (
        <div className="card table-container">
            <h2>📦 Tabla de Productos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Detalle</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td><a href={`http://localhost:3000${product.detail}`} target="_blank">Ver</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsTable;
