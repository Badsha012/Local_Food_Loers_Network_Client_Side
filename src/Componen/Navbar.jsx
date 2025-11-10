import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router"; // ✅ fixed import
import { Menu, X } from "lucide-react"; // npm i lucide-react

// 🔹 Loading Spinner Component
const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false); // ← loading state
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Reviews", path: "/all-reviews" },
    { name: "About", path: "/about" },
  ];

  // 🔹 Navigate with loading spinner
  const handleNavigate = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 1000); // 1s delay for animation
  };

  return (
    <>
      {/* 🔹 Show spinner when loading */}
      {loading && <LoadingSpinner />}

      <div className="sticky top-0 z-50 bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md">
        <div className="navbar container mx-auto px-4 py-2">
          {/* LEFT - LOGO + TITLE */}
          <div className="navbar-start flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-xl object-cover border-2 border-white"
              src="https://i.ibb.co/8g0f17B4/images-10.jpg"
              alt="Logo"
            />
            <NavLink
              to="/"
              className="text-xl font-bold text-white hover:text-green-200 transition"
            >
              Local Food Lovers
            </NavLink>
          </div>

          {/* DESKTOP MENU */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-5 font-medium">
              {navItems.map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `relative pb-1 transition group ${
                        isActive ? "text-white font-semibold" : "text-green-100"
                      }`
                    }
                  >
                    {name}
                    <span className="absolute left-0 bottom-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="navbar-end hidden lg:flex gap-3">
            <button
              onClick={() => handleNavigate("/login")}
              className="px-4 py-2 rounded-full border border-white text-white font-medium hover:bg-white hover:text-green-700 transition flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
            <button
              onClick={() => handleNavigate("/register")}
              className="px-4 py-2 rounded-full bg-white text-green-700 font-medium hover:bg-green-100 transition flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden navbar-end">
            <button onClick={() => setOpen(!open)}>
              {open ? <X color="white" /> : <Menu color="white" />}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {open && (
          <div className="lg:hidden bg-green-700 text-white shadow-md px-4 pb-4 space-y-3 animate-fadeIn">
            {navItems.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md font-medium ${
                    isActive ? "bg-green-800 text-white" : "hover:bg-green-600"
                  }`
                }
              >
                {name}
              </NavLink>
            ))}

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  setOpen(false);
                  handleNavigate("/login");
                }}
                className="flex-1 text-center px-4 py-2 rounded-full border border-white text-white font-medium hover:bg-white hover:text-green-700 transition"
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  handleNavigate("/register");
                }}
                className="flex-1 text-center px-4 py-2 rounded-full bg-white text-green-700 font-medium hover:bg-green-100 transition"
                disabled={loading}
              >
                {loading ? "Loading..." : "Register"}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
