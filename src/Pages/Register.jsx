import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl shadow-xl border border-white/50 rounded-2xl p-6 animate__animated animate__fadeIn">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Create an Account ✨
        </h2>

        <form className="space-y-4">
          {/* Full Name */}
          <div className="form-control">
            <label className="label font-medium text-green-800">Full Name</label>
            <div className="input input-bordered flex items-center gap-2 focus-within:ring-2 focus-within:ring-green-400 rounded-md">
              <FaUser className="text-green-600" />
              <input
                type="text"
                className="grow p-2 outline-none"
                placeholder="Enter your name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label font-medium text-green-800">Email</label>
            <div className="input input-bordered flex items-center gap-2 focus-within:ring-2 focus-within:ring-green-400 rounded-md">
              <FaEnvelope className="text-green-600" />
              <input
                type="email"
                className="grow p-2 outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label font-medium text-green-800">Password</label>
            <div className="input input-bordered flex items-center gap-2 focus-within:ring-2 focus-within:ring-green-400 rounded-md">
              <FaLock className="text-green-600" />
              <input
                type="password"
                className="grow p-2 outline-none"
                placeholder="Create a password"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="form-control">
            <label className="label font-medium text-green-800">Confirm Password</label>
            <div className="input input-bordered flex items-center gap-2 focus-within:ring-2 focus-within:ring-green-400 rounded-md">
              <FaLock className="text-green-600" />
              <input
                type="password"
                className="grow p-2 outline-none"
                placeholder="Re-enter your password"
              />
            </div>
          </div>

          {/* Already have account */}
          <div className="text-center text-sm text-green-700">
            <Link to="/login" className="link link-hover">
              Already have an account?
            </Link>
          </div>

          {/* Register Button */}
          <button className="btn btn-primary w-full mt-2 bg-green-600 hover:bg-green-700 border-none rounded-full hover:scale-105 transition">
            Register
          </button>

          {/* Optional Google Register */}
          <button className="btn btn-outline w-full mt-2 border-green-600 text-green-600 hover:bg-green-100 rounded-full transition">
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
