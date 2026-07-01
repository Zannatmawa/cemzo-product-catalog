import NavbarSection from '../components/shared/NavbarSection'
import AllProductCard from '../components/Product/AllProductCard'
import Footer from '../components/shared/Footer'
import useProducts from '../hooks/useProduct'
import Loader from '../components/commonUi/Loader'
import ErrorMessage from '../components/commonUi/ErrorMessage'


const Home = () => {
    const { products, loading, error } = useProducts();

    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <>
            <NavbarSection />
            <AllProductCard allProducts={products} />
            <Footer />
        </>
    );
}



export default Home