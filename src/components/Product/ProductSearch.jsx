import React from 'react'

const ProductSearch = () => {
    return (
        <div>
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
    )
}

export default ProductSearch