// import Button from "../commonUi/Button";

const ProductCard = ({ product, setSelectedProduct }) => {
    const { id, rating, category, title, price, image } = product || {};
    return (
        <div className="card  bg-base-100 w-76 border border-blue-200 shadow-lg rounded-xl overflow-hidden">
            <figure className="bg-slate-50 p-4">
                <img
                    src={image}
                    className="w-40 h-50 object-cover"
                    alt={title} />
            </figure>
            <div className="card-body p-6 gap-4">
                <div className="space-y-1.5">
                    <span className="text-xs font-semibold tracking-wider uppercase text-base-content/50">{category}</span>
                    <h2 className="card-title text-base font-medium line-clamp-1">{title}</h2>
                    <div className="flex items-center gap-2 text-sm text-base-content/70">
                        <span> {rating?.rate}</span>
                    </div>
                </div>

                <div className="flex items-center  justify-between mt-2 pt-4 border-t border-base-200">
                    <span className="text-lg font-semibold">${price}</span>
                    <button
                        className="btn btn-ghost btn-md text-primary normal-case hover:bg-primary/10 px-3"
                        onClick={() => setSelectedProduct(product)}
                    >
                        View details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard