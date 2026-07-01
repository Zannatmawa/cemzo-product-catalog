import ProductCard from './ProductCard'
import ProductSearch from './ProductSearch'

const AllProductCard = ({ allProducts }) => {
    console.log(allProducts)
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center p-4'>
                <h1>ALL PRODUCT</h1>
                <ProductSearch />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
                {allProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </div>
        </div>
    )
}

export default AllProductCard