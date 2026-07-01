import React from 'react'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-100 text-base-content border-t border-base-200">
            <nav className="grid grid-flow-col gap-6 text-sm font-medium text-base-content/70">
                <a className="link link-hover hover:text-primary transition-colors">About us</a>
                <a className="link link-hover hover:text-primary transition-colors">Contact</a>
                <a className="link link-hover hover:text-primary transition-colors">Products</a>
                <a className="link link-hover hover:text-primary transition-colors">Privacy Policy</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4 text-base-content/60">
                    <a className="hover:text-primary transition-colors cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                    <a className="hover:text-primary transition-colors cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                    </a>
                    <a className="hover:text-primary transition-colors cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                </div>
            </nav>
            <aside>
                <p className="text-xs text-base-content/40">Copyright © {new Date().getFullYear()} - All rights reserved.</p>
            </aside>
        </footer>
    )
}

export default Footer