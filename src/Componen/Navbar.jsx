import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Menu, X, Sun, Moon, Search } from "lucide-react";

// 🔹 Loading Spinner Component
const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
    <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null); // 🔹 Dummy Auth
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Reviews", path: "/all-reviews" },
    { name: "Add Review", path: "/add-review" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavigate = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 700);
  };

  // const handleLogin = () => setUser({ name: "Badsha" });
  // const handleLogout = () => setUser(null);

  return (
    <>
      {loading && <LoadingSpinner />}

      <div
        className={`sticky top-0 z-50 shadow-md transition ${
          dark
            ? "bg-gray-900 text-white"
            : "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
        }`}
      >
        <div className="navbar container mx-auto px-4 py-2 flex items-center justify-between">
          {/* LEFT - Logo + Title */}
          <div className="flex items-center gap-2">
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

          {/* CENTER MENU (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 font-medium">
            {navItems.map(({ name, path }) => (
              <NavLink
                key={name}
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
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-2 top-2.5 text-green-800 w-4 h-4" />
              <input
                type="text"
                placeholder="Search food..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-full text-sm text-black outline-none w-36 focus:w-48 transition-all"
              />
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full border border-white hover:bg-white hover:text-green-700 transition"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Auth Buttons */}
            {user ? (
              <>
                <span className="text-sm font-medium">
                  Hi, <span className="font-bold">{user.name}</span>
                </span>
                <button
                  
                  className="px-3 py-1 rounded-full bg-white text-green-700 font-medium hover:bg-green-100 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleNavigate("/login")}
                  className="px-3 py-1 rounded-full border border-white text-white font-medium hover:bg-white hover:text-green-700 transition"
                  disabled={loading}
                >
                  Login
                </button>
                <button
                  onClick={() => handleNavigate("/register")}
                  className="px-3 py-1 rounded-full bg-white text-green-700 font-medium hover:bg-green-100 transition"
                  disabled={loading}
                >
                  Register
                </button>
              </>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X color="white" /> : <Menu color="white" />}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="lg:hidden bg-green-700 text-white shadow-md px-4 pb-4 space-y-3 animate-fadeIn">
            {/* Search */}
            <div className="flex items-center gap-2 py-2">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search food..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-3 py-1.5 rounded-md text-black outline-none"
              />
            </div>

            {/* Menu Items */}
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

            {/* Auth Buttons */}
            <div className="flex gap-3 pt-2">
              {user ? (
                <button
                  onClick={() => {
                    setUser(null);
                    setOpen(false);
                  }}
                  className="flex-1 px-4 py-2 rounded-full bg-white text-green-700 font-medium hover:bg-green-100 transition"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setOpen(false);
                      handleNavigate("/login");
                    }}
                    className="flex-1 text-center px-4 py-2 rounded-full border border-white text-white font-medium hover:bg-white hover:text-green-700 transition"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setOpen(false);
                      handleNavigate("/register");
                    }}
                    className="flex-1 text-center px-4 py-2 rounded-full bg-white text-green-700 font-medium hover:bg-green-100 transition"
                  >
                    Register
                  </button>
                </>
              )}
            </div>

            {/* Theme Toggle */}
            <div className="pt-2">
              <button
                onClick={() => setDark(!dark)}
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-green-600 w-full justify-center"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />} Toggle Theme
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
