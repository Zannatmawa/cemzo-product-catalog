
const ProductSearch = ({ search, setSearch }) => {
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search by Product Name"
            className="input input-bordered"
        />
    );
};

export default ProductSearch