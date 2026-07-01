import { useState } from "react";
import NavbarSection from "../components/shared/NavbarSection";
import Footer from "../components/shared/Footer";
import AllProductCard from "../components/Product/AllProductCard";
import ProductSearch from "../components/Product/ProductSearch";
import SearchByCategory from "../components/Product/SearchByCategory";
import Loader from "../components/commonUi/Loader";
import ErrorMessage from "../components/commonUi/ErrorMessage";
import useProducts from "../hooks/useProduct";
import ProductDetails from "../components/Product/ProductDetails";

const Home = () => {
    const { allProducts, loading, error } = useProducts();

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);

    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;

    const filteredProducts = allProducts.filter((product) => {
        const matchesSearch = product.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || product.category === category;

        return matchesSearch && matchesCategory;
    });


    return (
        <>
            <NavbarSection />

            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-8">
                    <ProductSearch
                        search={search}
                        setSearch={setSearch}
                    />

                    <SearchByCategory
                        category={category}
                        setCategory={setCategory}
                    />
                </div>

                <div id="products">
                    <AllProductCard
                        filteredProducts={filteredProducts}
                        setSelectedProduct={setSelectedProduct}
                    />
                </div>

                <ProductDetails
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                />
            </div>

            <Footer />
        </>
    );
};

export default Home;

// git add .
// git commit -m "Update project"
// git push origin main