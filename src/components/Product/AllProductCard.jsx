import ProductCard from './ProductCard'

const AllProductCard = ({ allProducts }) => {
    console.log(allProducts)
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center p-4'>
                <h1>ALL PRODUCT</h1>
                <input type="text" placeholder="Search By Product Name" className="input input-bordered w-64 lg:w-87" />
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost ">
                        category
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>men's clothing</a></li>
                        <li><a>jewelery</a></li>
                        <li><a>electronics</a></li>
                        <li><a>women's clothing</a></li>
                    </ul>
                </div>
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