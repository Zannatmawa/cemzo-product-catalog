import { useState } from "react";
import ProductCard from "./ProductCard";
const categories = [
    {
        id: 1,
        name: "men's clothing",
    },
    {
        id: 2,
        name: "jewelery",
    },
    {
        id: 3,
        name: "electronics",
    },
    {
        id: 4,
        name: "women's clothing",
    },
    {
        id: 5,
        name: "all",
    },
];
const ProductSearch = ({ allProducts }) => {
    const [product, setProduct] = useState(allProducts)
    console.log(allProducts)

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();

        const filterProductsByName = allProducts.filter((product) =>
            product.title.toLowerCase().includes(searchTerm)
        );

        setProduct(filterProductsByName);
    };
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 p-4">
                <h1 className="text-2xl font-bold">All Products</h1>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                    <input
                        onChange={handleSearch}
                        type="text"
                        placeholder="Search By Product Name"
                        className="input input-bordered w-full sm:w-72 lg:w-80"
                    />

                    <div className="dropdown w-full sm:w-auto">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-outline w-full sm:w-auto"
                        >
                            Filter By Category
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-2 w-52 p-2 shadow"
                        >
                            {categories.map((category) => (
                                <li key={category.id}>
                                    <button
                                        onClick={() => {
                                            const filterProductsByCategory = allProducts.filter((product) =>
                                                category.name === "all"
                                                    ? true
                                                    : product.category === category.name
                                            );
                                            setProduct(filterProductsByCategory);
                                        }}
                                    >
                                        {category.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {product.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

        </div>
    )
}

export default ProductSearch