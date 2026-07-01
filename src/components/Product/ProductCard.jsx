// import Button from "../commonUi/Button";

const ProductCard = ({ product, setSelectedProduct }) => {
    const { id, rating, category, title, price, image } = product || {};
    return (
        <div className="card bg-base-100 w-76 shadow-sm">
            <figure>
                <img
                    src={image}
                    className="w-full h-64 object-cover"
                    alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h3>{price}</h3>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{rating.rate}</div>
                    <div className="badge badge-outline">{category}</div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => setSelectedProduct(product)}
                    >see more</button>
                </div>
            </div>
        </div >
    )
}

export default ProductCard