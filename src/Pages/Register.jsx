import React, { useState } from "react";
import { useNavigate } from "react-router"; // react-router-dom ব্যবহার করো
import { auth, googleProvider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [photoURL, setPhotoURL] = useState(""); // 🔹 Profile picture URL
  const [loading, setLoading] = useState(false);

  // 🔹 Email/Password Register
  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      toast.error("❌ Passwords do not match!");
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update displayName & photoURL
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoURL || "https://i.ibb.co/8g0f17B4/images-10.jpg", // default avatar
      });

      toast.success("✅ Registration successful!");
      navigate("/"); // হোমে redirect
    } catch (err) {
      console.error("Register error:", err);
      if (err.code === "auth/email-already-in-use") {
        toast.error("❌ Email already in use!");
      } else if (err.code === "auth/invalid-email") {
        toast.error("❌ Invalid email!");
      } else if (err.code === "auth/weak-password") {
        toast.error("❌ Weak password! Minimum 6 characters.");
      } else {
        toast.error("❌ Registration failed. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Google Register/Login
  const handleGoogleRegister = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      toast.success("✅ Google login successful!");
      navigate("/");
    } catch (err) {
      console.error("Google register error:", err);
      toast.error("❌ Google login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex items-center justify-center p-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl shadow-xl border border-white/50 rounded-2xl p-6 animate__animated animate__fadeIn">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Create an Account ✨
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Full Name */}
          <div className="form-control">
            <label className="label font-medium text-green-800">
              Full Name
            </label>
            <div className="input input-bordered flex items-center gap-2 focus-within:ring-2 focus-within:ring-green-400 rounded-md">
              <FaUser className="text-green-600" />
              <input
                type="text"
                className="grow p-2 outline-none"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Profile Picture URL */}
          <div className="form-control">
            <label className="label font-medium text-green-800">
              Profile Picture URL
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
              placeholder="Optional: Enter image URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="form-control">
            <label className="label font-medium text-green-800">
              Confirm Password
            </label>
            <div className="input input-bordered flex items-center gap-2 focus-within:ring-2 focus-within:ring-green-400 rounded-md">
              <FaLock className="text-green-600" />
              <input
                type="password"
                className="grow p-2 outline-none"
                placeholder="Re-enter your password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full mt-2 bg-green-600 hover:bg-green-700 border-none rounded-full hover:scale-105 transition"
          >
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        {/* Google Register */}
        <button
          type="button"
          onClick={handleGoogleRegister}
          disabled={loading}
          className="btn btn-outline w-full mt-4 border-green-600 text-green-600 hover:bg-green-100 rounded-full transition flex items-center justify-center gap-2"
        >
          <FcGoogle size={22} /> Continue with Google
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-green-700 font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
