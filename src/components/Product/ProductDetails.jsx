
const ProductDetails = ({ selectedProduct, setSelectedProduct }) => {
    if (!selectedProduct) return null;

    return (
        <dialog open className="modal">
            <div className="modal-box">

                <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-48 mx-auto"
                />

                <h2 className="text-2xl font-bold mt-4">
                    {selectedProduct.title}
                </h2>

                <p className="mt-4">
                    {selectedProduct.description}
                </p>

                <p className="font-bold mt-4">
                    ${selectedProduct.price}
                </p>

                <p>
                    ⭐ {selectedProduct.rating.rate}
                </p>

                <div className="modal-action">
                    <button
                        className="btn"
                        onClick={() => setSelectedProduct(null)}
                    >
                        Close
                    </button>
                </div>

            </div>
        </dialog>
    );
};




export default ProductDetails