import React from "react";
import { useNavigate } from "react-router";

const JoinCommunity = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "Share Your Food Experiences",
      desc: "Post reviews, rate foods, and help others make better food choices.",
      icon: "📝",
    },
    {
      title: "Discover Hidden Food Gems",
      desc: "Find underrated food spots and local specialties recommended by real foodies.",
      icon: "📍",
    },
    {
      title: "Connect With Food Lovers",
      desc: "Build connections, follow food reviewers & grow your foodie circle.",
      icon: "🤝",
    },
  ];

  // Smooth scroll + navigation
  const handleJoinClick = () => {
    navigate("/register");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-green-100">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">
          Join The Local Food Lovers Community
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
          Be part of a growing community of passionate food lovers — share
          reviews, discover hidden food gems, and connect with people who truly
          love great local food.
        </p>
      </div>

      {/* BENEFITS GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-1"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-green-800">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* JOIN BUTTON */}
      <div className="text-center mt-12">
        <button
          onClick={handleJoinClick}
          className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden text-lg font-semibold text-white rounded-full group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-1"></span>
          <span className="relative">Join Now</span>
        </button>
      </div>
    </section>
  );
};

export default JoinCommunity;
