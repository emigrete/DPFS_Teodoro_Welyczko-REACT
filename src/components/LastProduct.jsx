import { useEffect, useState } from "react";
import { getLastProduct } from "../api";

const LastProduct = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getLastProduct()
            .then((data) => {
                console.log("✅ Producto recibido en frontend:", data); // 🔍 Verificar datos recibidos
                setProduct({
                    id: data.id,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    category: data.category,
                    createdAt: data.createdAt
                }); // ❌ No incluimos 'image' en el estado
            })
            .catch(err => console.error("❌ Error al obtener el producto:", err));
    }, []);

    return (
        <div className="card">
            <h2>Último Producto Creado</h2>
            {product ? (
                <>
                    <p><strong>{product.name}</strong></p>
                    <p>{product.description?.length > 50
                        ? product.description.substring(0, 50) + "..."
                        : product.description}
                    </p>
                    <p><strong>Precio:</strong> ${product.price}</p>
                    <p><strong>Categoría:</strong> {product.category}</p>
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default LastProduct;


