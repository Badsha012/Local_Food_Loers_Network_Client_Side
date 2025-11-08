import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img
              className="w-10 h-10 rounded-full"
              src="https://i.ibb.co.com/WpK95wS2/images.jpg" // ✅ fixed direct image link
              alt="Local Food Lovers Logo"
            />
            <h2 className="text-xl font-semibold text-white">
              Local Food Lovers Network
            </h2>
          </div>
          <p className="text-sm">
            Your go-to platform for awesome content and services. We aim to
            provide the best user experience possible.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 text-2xl">
             <SiFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-sky-400 text-2xl">
            <FaXTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 text-2xl">
              <FaSquareInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 text-2xl">
             <IoLogoYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © 2025 Local Food Lovers Network. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
