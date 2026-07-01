import { useEffect, useState } from 'react'
import NavbarSection from '../components/shared/NavbarSection'
import AllProductCard from '../components/Product/AllProductCard'
import Footer from '../components/shared/Footer'
import axios from 'axios'


const Home = () => {
    const url = 'https://fakestoreapi.com/products'
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        const allProducts = axios.get(`${url}`)
            .then(res => setAllProducts(res.data))
    }, []);
    return (
        <>
            <NavbarSection />
            <AllProductCard allProducts={allProducts} />
            <Footer />
        </>
    )
}

export default Home