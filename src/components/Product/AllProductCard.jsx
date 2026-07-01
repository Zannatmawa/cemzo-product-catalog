import ProductCard from './ProductCard'

const AllProductCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            <h1>ALL PRODUCT</h1>
            <ProductCard />
        </div>
    )
}

export default AllProductCard