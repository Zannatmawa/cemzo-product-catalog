const Footer = () => {
    return (
        <footer
            id="contact"
            className="footer footer-center bg-base-100 border-t border-base-200 px-4 py-8 md:px-8 md:py-10"
        >
            <nav>
                <ul className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm font-medium text-base-content/70">
                    <li>
                        <a className="link link-hover hover:text-primary">About Us</a>
                    </li>
                    <li>
                        <a className="link link-hover hover:text-primary">Products</a>
                    </li>
                    <li>
                        <a className="link link-hover hover:text-primary">Contact</a>
                    </li>
                    <li>
                        <a className="link link-hover hover:text-primary">
                            Privacy Policy
                        </a>
                    </li>
                </ul>
            </nav>

            <nav>
                <div className="flex flex-wrap justify-center gap-5 text-base-content/60">
                    <a className="hover:text-primary transition-colors cursor-pointer">
                    </a>

                    <a className="hover:text-primary transition-colors cursor-pointer">
                    </a>

                    <a className="hover:text-primary transition-colors cursor-pointer">
                    </a>
                </div>
            </nav>

            <aside className="text-center">
                <p className="text-xs sm:text-sm text-base-content/50">
                    © {new Date().getFullYear()} CEMZO Store. All rights reserved.
                </p>
            </aside>
        </footer>
    );
};

export default Footer;