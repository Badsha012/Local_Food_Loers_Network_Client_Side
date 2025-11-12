import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { SiFacebook } from "react-icons/si";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img
              className="w-12 h-12 rounded-full border-2 border-green-500"
              src="https://i.ibb.co/8g0f17B4/images-10.jpg"
              alt="Local Food Lovers Logo"
            />
            <h2 className="text-xl font-semibold text-white">
              Local Food Lovers Network
            </h2>
          </div>
          <p className="text-sm text-gray-300">
            Discover and share the best local foods around you. Connect with food enthusiasts, explore restaurants, street food, and home-cooked meals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-green-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-reviews" className="hover:text-green-400 transition-colors">
                All Reviews
              </Link>
            </li>
            <li>
              <Link to="/add-review" className="hover:text-green-400 transition-colors">
                Add Review
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-600 text-2xl transition-colors">
              <SiFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-sky-400 text-2xl transition-colors">
              <FaXTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 text-2xl transition-colors">
              <FaSquareInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 text-2xl transition-colors">
              <IoLogoYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2025 Local Food Lovers Network. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
