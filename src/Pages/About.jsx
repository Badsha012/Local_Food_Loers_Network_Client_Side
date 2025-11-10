import React, { useState } from "react";
import { Heart, Star, Users, Utensils } from "lucide-react";
import { Link } from "react-router";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-5 bg-green-100">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          About Local Food Lovers Network
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Welcome to <span className="font-semibold text-green-700">Local Food Lovers Network</span> —  
          the community where passionate food enthusiasts come together to explore, share, and celebrate authentic local flavors.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto py-12 px-5 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Our Mission</h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
          We aim to build a digital community that connects people through their shared love for food.  
          Whether it’s hidden street food gems or fine dining experiences, our platform helps food lovers discover and share the best local meals.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-14 px-5 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <Utensils className="text-green-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-green-700">Discover Local Food</h3>
          <p className="text-gray-600">
            Find authentic dishes and hidden food spots shared by real people who love local cuisine.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <Heart className="text-red-500 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-green-700">Share Your Experience</h3>
          <p className="text-gray-600">
            Post reviews with images, ratings, and stories about your favorite meals to inspire others.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <Users className="text-green-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-green-700">Connect with Foodies</h3>
          <p className="text-gray-600">
            Join a growing community of food lovers, chefs, and home cooks who appreciate good taste.
          </p>
        </div>
      </section>

      {/* CTA Section with Modal Button */}
      <section className="text-center py-16 px-5">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Ready to Join the Foodie Community?
        </h2>
        <p className="text-gray-600 mb-6">
          Start sharing your food experiences and discover what others are loving around you.
        </p>

        {/* Get Started Button */}
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition"
        >
          Get Started
        </button>
      </section>

      {/* Modal Section */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center relative">
            <h3 className="text-2xl font-bold text-green-700 mb-3">Welcome Food Lover!</h3>
            <p className="text-gray-600 mb-5">
              Join our foodie family — share reviews, discover dishes, and connect with others!
            </p>
            <div className="flex gap-3 justify-center">
              <Link
                to="/login"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 border border-green-600 text-green-700 rounded-lg hover:bg-green-600 hover:text-white transition"
              >
                Register
              </Link>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 text-sm text-gray-500 hover:text-green-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
