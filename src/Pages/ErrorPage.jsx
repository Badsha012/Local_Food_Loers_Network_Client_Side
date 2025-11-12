import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";
import Navbar from "../Componen/Navbar";
import Footer from "../Componen/Footer";


const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar></Navbar>

      {/* 🔹 Background Section */}
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 text-center p-6 overflow-hidden relative">

        {/* 🔹 Animated Background Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.3)_0%,transparent_70%)]"
        ></motion.div>

        {/* 🔹 Main Card */}
        <motion.div
          initial={{ y: 80, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full z-10 border border-green-100"
        >
          <motion.div
            initial={{ rotate: -10, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="flex justify-center mb-6"
          >
            <FaExclamationTriangle className="text-red-500 text-6xl drop-shadow-md" />
          </motion.div>

          <h1 className="text-5xl font-extrabold text-green-700 mb-4 drop-shadow-sm">
            Oops!
          </h1>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            The page you’re looking for doesn’t exist or something went wrong.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-green-700 transition"
          >
            ⬅️ Go Back Home
          </motion.button>
        </motion.div>
      </div>

     <Footer></Footer>
    </>
  );
};

export default ErrorPage;
