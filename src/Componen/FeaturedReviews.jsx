import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FeaturedReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/FoodLovers")
      .then((res) => res.json())
      .then((data) => {
        const topReviews = data
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 6);
        setReviews(topReviews);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="bg-gradient-to-b from-green-50 to-green-100 py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-3xl font-extrabold text-green-800 mb-4">
          Featured Reviews
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
          Discover the top-rated dishes and experiences shared by our local food lovers.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((r) => (
          <div
            key={r._id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <img
              src={r.foodImage}
              alt={r.foodName}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {r.foodName}
              </h3>
              <p className="text-gray-600 font-medium">{r.restaurantName}</p>
              <p className="text-gray-500 text-sm mb-3">{r.location}</p>

              <div className="flex justify-between items-center mb-4">
                <p className="text-blue-600 font-medium">
                  Reviewer: {r.reviewerName}
                </p>
                <p className="text-yellow-500 font-bold">⭐ {r.rating}</p>
              </div>

              {/* View Details Button */}
              <Link
                to={`/review/${r._id}`}
                className="block text-center bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Show All Button */}
      <div className="text-center mt-16">
        <Link
          to="/all-reviews"
          className="inline-block bg-green-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
        >
          Show All Reviews
        </Link>
      </div>
    </section>
  );
};

export default FeaturedReviews;
