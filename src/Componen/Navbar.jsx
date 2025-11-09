import React from 'react';
import { Link } from "react-router";

const Navbar = () => {
    return (
        <div className="navbar bg-orange-400 shadow-sm px-4">
            <div className="navbar-start">
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/all-reviews">All Reviews</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>

                {/* Logo */}
                <img className='h-10 w-10 rounded-xl' src="https://i.ibb.co.com/8g0f17B4/images-10.jpg" alt="Logo" />
                <Link className="btn btn-ghost  text-green-800 text-xl">
                    Local Food Lovers Network
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/all-reviews">All Reviews</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>

            <div className="navbar-end gap-3">
                <Link to="/login" className="btn bg-green-600 text-white hover:bg-green-700">
                    Login
                </Link>
                 <Link to="/login" className="btn bg-green-600 text-white hover:bg-green-700">
                    Register
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
