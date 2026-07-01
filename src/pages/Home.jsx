import { useEffect } from 'react'
import NavbarSection from '../components/shared/NavbarSection'
import AllProductCard from '../components/Product/AllProductCard'
import Footer from '../components/shared/Footer'
import axios from 'axios'


const Home = () => {
    useEffect(() => {
        const data = axios.get('https://fakestoreapi.com/products')
        console.log(data)
    }, []);
    return (
        <>
            <NavbarSection />
            <AllProductCard />
            <Footer />
        </>
    )
}

export default Home