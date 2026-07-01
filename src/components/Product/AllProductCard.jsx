import ProductCard from './ProductCard'

const AllProductCard = ({ setSelectedProduct, filteredProducts }) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    setSelectedProduct={setSelectedProduct}
                />
            ))}
        </div>
    )
}

export default AllProductCard