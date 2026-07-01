
const NavbarSection = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Logo</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <input type="text" placeholder="Search By Product Name" className="input input-bordered w-24 md:w-auto" />
                    <li><a>dark</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarSection