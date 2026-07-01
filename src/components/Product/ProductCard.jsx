import Button from "../commonUi/Button";

const ProductCard = ({ product }) => {
    const { id, rating, category, title, price, image } = product || {};
    return (
        <div className="card bg-base-100 w-76 shadow-sm">
            <figure>
                <img
                    key={id}
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
                    <Button id={id} title={"See More"} />
                </div>
            </div>
        </div>
    )
}

export default ProductCard