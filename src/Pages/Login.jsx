import React, { useState } from "react";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState("");

  // ✅ Email & Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const photoURL = userCredential.user.photoURL || "";
      setUserPhoto(photoURL);

      toast.success("✅ Login successful!");
      setTimeout(() => navigate("/"), 2000); // Wait for toast to display
    } catch (err) {
      console.error("Login error:", err);

      switch (err.code) {
        case "auth/user-not-found":
          toast.error("❌ User not found! Please register first.");
          break;
        case "auth/wrong-password":
          toast.error("❌ Wrong password!");
          break;
        case "auth/invalid-email":
          toast.error("❌ Invalid email address!");
          break;
        default:
          toast.error("❌ Login failed! Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅ Google Login
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const photoURL = userCredential.user.photoURL || "";
      setUserPhoto(photoURL);

      toast.success("✅ Google login successful!");
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      console.error("Google login error:", err);
      toast.error("❌ Google login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-600 to-emerald-600 px-4">
      {/* ✅ Toast container properly configured */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
        transition={Slide}
      />

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md relative">
        {/* ✅ Profile Picture Preview */}
        {userPhoto && (
          <div className="flex justify-center mb-4">
            <img
              src={userPhoto}
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-green-600 object-cover"
            />
          </div>
        )}

        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Login to Food Lovers
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* OR Divider */}
        <div className="my-4 flex items-center justify-center text-gray-500">
          <hr className="w-1/3" />
          <span className="px-2 text-sm">OR</span>
          <hr className="w-1/3" />
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <FcGoogle size={22} /> Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-green-700 font-semibold hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
