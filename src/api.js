import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getTotalUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};

export const getTotalProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};

export const getLastProduct = async () => {
    try {
        const response = await axios.get(`${API_URL}/products/last`); // Asegúrate de que este endpoint existe
        console.log("✅ Último producto recibido:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Error al obtener el último producto:", error);
        return null;
    }
};
