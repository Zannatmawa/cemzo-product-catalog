import axios from "axios";
import { useEffect, useState } from "react";

const Button = ({ title, id }) => {
    const url = 'https://fakestoreapi.com/products'
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        const allProducts = axios.get(`${url}`)
            .then(res => setAllProducts(res.data))
    }, []);
    const inid = allProducts.map(product => product.id)
    const handleClick = () => {
        if (id === inid) {
            console.log('id is matched')
        }
    }
    return (
        <div>
            <button onClick={handleClick} className="btn btn-primary">{title}</button>
        </div>
    )
}

export default Button