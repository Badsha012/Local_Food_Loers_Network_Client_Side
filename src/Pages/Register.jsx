import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-200 via-white to-violet-300 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl shadow-xl border border-white/50 rounded-2xl p-6 animate__animated animate__fadeIn">
        <h2 className="text-3xl font-bold text-center text-violet-600 mb-6">
          Create an Account ✨
        </h2>

        <form className="space-y-4">
          <div className="form-control">
            <label className="label font-medium">Full Name</label>
            <div className="input input-bordered flex items-center gap-2">
              <FaUser />
              <input type="text" className="grow" placeholder="Enter your name" />
            </div>
          </div>

          <div className="form-control">
            <label className="label font-medium">Email</label>
            <div className="input input-bordered flex items-center gap-2">
              <FaEnvelope />
              <input type="email" className="grow" placeholder="Enter your email" />
            </div>
          </div>

          <div className="form-control">
            <label className="label font-medium">Password</label>
            <div className="input input-bordered flex items-center gap-2">
              <FaLock />
              <input
                type="password"
                className="grow"
                placeholder="Create a password"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label font-medium">Confirm Password</label>
            <div className="input input-bordered flex items-center gap-2">
              <FaLock />
              <input
                type="password"
                className="grow"
                placeholder="Re-enter your password"
              />
            </div>
          </div>

          <div className="text-center text-sm">
            <a className="link link-hover text-violet-600">
              Already have an account?
            </a>
          </div>

          <button className="btn btn-primary w-full mt-2 rounded-full hover:scale-105 transition">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
