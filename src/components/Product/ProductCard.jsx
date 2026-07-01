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
                    {/* <Button id={id} title={"See More"} /> */}
                    <button id={id} className="btn btn-primary" onClick={() => document.getElementById('my_modal_1').showModal()}>see more</button>
                </div>
                <div>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    )
}

export default ProductCard