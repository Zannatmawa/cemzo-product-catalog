// import { useState } from "react";
// import { FaRegMoon } from "react-icons/fa";
// import { IoSunnyOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

import logo from "../../assets/logo.png";

const NavbarSection = () => {
    // const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 lg:px-16">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow z-50"
                    >
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="#products">Products</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>

                <a href="/" className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-15 h-15 md:w-12 md:h-12" />

                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#products">Products</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-end">
                <FaCartShopping className="w-20" />
                {/* <button
                    className="btn btn-circle"
                    onClick={toggleBgTheme}
                >
                    {isDarkMode ? (
                        <IoSunnyOutline size={20} />
                    ) : (
                        <FaRegMoon size={20} />
                    )}
                </button> */}
            </div>
        </div>
    );
};

export default NavbarSection;