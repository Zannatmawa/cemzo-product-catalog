import { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";

const NavbarSection = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    return (
        <div className="navbar bg-base-100 shadow-sm px-15">
            <div className="navbar-start">
                {/* <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div> */}
                <img src={logo} alt="logo" className="w-15 h-10 mr-2" />
            </div>
            {/* <div className="navbar-center hidden lg:flex">
                <input type="text" placeholder="Search By Product Name" className="input input-bordered w-64 lg:w-87" />

            </div> */}
            <div className="navbar-end">
                <a className="btn">
                    {isDarkMode ? <IoSunnyOutline /> : <FaRegMoon />}
                </a>
            </div>
        </div>
    )
}

export default NavbarSection