import { useEffect, useState } from 'react'
import NavbarSection from '../components/shared/NavbarSection'
import AllProductCard from '../components/Product/AllProductCard'
import Footer from '../components/shared/Footer'
import axios from 'axios'
import useProducts from '../hooks/useProduct'


const Home = () => {
    const { products, loading, error } = useProducts();

    // if (loading) return <Loader />;
    // if (error) return <ErrorMessage message={error} />;

    return (
        <>
            <NavbarSection />
            <AllProductCard allProducts={products} />
            <Footer />
        </>
    );
}



export default Home