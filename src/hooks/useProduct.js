import { useEffect, useState } from "react";
import { getProducts } from "../services/fetchApi";

const useProducts = () => {
    const [allProducts, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { allProducts, loading, error };
};

export default useProducts;