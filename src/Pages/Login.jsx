import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl border border-white/40 rounded-2xl">
        <div className="card-body p-6">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
            Welcome Back 👋
          </h2>

          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="label font-medium text-green-800">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="label font-medium text-green-800">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            {/* Links */}
            <div className="flex justify-between text-sm text-green-700">
              <Link className="link link-hover" to="/forgot-password">
                Forgot password?
              </Link>
              <Link className="link link-hover" to="/register">
                Create account
              </Link>
            </div>

            {/* Login Button */}
            <button className="btn btn-primary w-full mt-2 bg-green-600 hover:bg-green-700 border-none">
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Login */}
          <button className="btn btn-outline w-full border-green-600 text-green-600 hover:bg-green-100 mt-2">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
