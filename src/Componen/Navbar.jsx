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
  
  // 🔹 Dummy user auth state
  const [user, setUser] = useState({ name: "Badsha", email: "test@gmail.com" });
  
  const navigate = useNavigate();

  // 🔹 Public links
  const publicLinks = [
    { name: "Home", path: "/" },
    { name: "All Reviews", path: "/all-reviews" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // 🔹 Protected links for logged-in users
  const protectedLinks = [
    { name: "Add Review", path: "/add-reveiws" },
    { name: "My Reviews", path: "/reviews" },
    { name: "My Favorites", path: "/favorites" },
  ];

  const handleNavigate = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 500);
  };

  return (
    <>
      {loading && <LoadingSpinner />}

      <div className={`sticky top-0 z-50 shadow-md transition ${dark ? "bg-gray-900 text-white" : "bg-gradient-to-r from-green-600 to-emerald-600 text-white"}`}>
        <div className="navbar container mx-auto px-4 py-2 flex items-center justify-between">
          {/* LEFT - Logo */}
          <div className="flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-xl object-cover border-2 border-white"
              src="https://i.ibb.co/8g0f17B4/images-10.jpg"
              alt="Logo"
            />
            <NavLink to="/" className="text-xl font-bold text-white hover:text-green-200 transition">
              Local Food Lovers
            </NavLink>
          </div>

          {/* CENTER MENU (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 font-medium">
            {publicLinks.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `relative px-3 py-1 rounded-md transition-all duration-300 ${
                    isActive ? "bg-white text-green-700 font-semibold shadow-md" : "text-green-100 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {name}
              </NavLink>
            ))}

            {/* Protected links only for logged-in users */}
            {user &&
              protectedLinks.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  className="relative px-3 py-1 rounded-md text-green-100 hover:text-white hover:bg-white/10 transition"
                >
                  {name}
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
                <span className="text-sm font-medium">Hi, <span className="font-bold">{user.name}</span></span>
                <button
                  onClick={() => setUser(null)}
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
            {publicLinks.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md font-medium transition ${
                    isActive ? "bg-white text-green-700 font-semibold" : "hover:bg-green-600"
                  }`
                }
              >
                {name}
              </NavLink>
            ))}

            {/* Protected links for logged-in users */}
            {user &&
              protectedLinks.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md font-medium hover:bg-green-600"
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
