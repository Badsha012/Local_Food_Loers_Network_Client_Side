import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-200 via-white to-violet-300 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl border border-white/40 rounded-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-violet-600 mb-6">
            Welcome Back 👋
          </h2>

          <form className="space-y-4">
            <div>
              <label className="label font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label font-medium">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex justify-between text-sm">
              <a className="link link-hover text-violet-600">Forgot password?</a>
              <a className="link link-hover text-violet-600">Create account</a>
            </div>

            <button className="btn btn-primary w-full mt-2">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
