const categories = [
    {
        id: 1,
        name: "All",
    },
    {
        id: 2,
        name: "men's clothing",
    },
    {
        id: 3,
        name: "jewelery",
    },
    {
        id: 4,
        name: "electronics",
    },
    {
        id: 5,
        name: "women's clothing",
    },
];

const SearchByCategory = ({ category, setCategory }) => {
    return (
        <div className="dropdown w-full sm:w-auto">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-outline w-full sm:w-auto"
            >
                Filter By Category
            </div>

            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-2 w-72 p-2 shadow"
            >
                {categories.map((item) => (
                    <li key={item.id}>
                        <button onClick={() => setCategory(item.name)}>
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchByCategory;