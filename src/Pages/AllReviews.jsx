import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllReviews = ({ user }) => {
  const [reviews, setReviews] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // fetch all reviews sorted by newest first
    fetch("http://localhost:3000/FoodLovers")
      .then(res => res.json())
      .then(data =>
        setReviews(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
      )
      .catch(err => console.error(err));

    // fetch user favorites
    if (user?.email) {
      fetch(`http://localhost:3000/favorites/${user.email}`)
        .then(res => res.json())
        .then(data => setFavorites(data.map(fav => fav.reviewId._id)))
        .catch(err => console.error(err));
    }
  }, [user]);

  const toggleFavorite = (review) => {
    if (!user) return alert("Please login to add favorites");

    const isFav = favorites.includes(review._id);

    if (isFav) {
      // remove from favorites
      fetch(`http://localhost:3000/favorites/${user.email}/${review._id}`, { method: "DELETE" })
        .then(() => setFavorites(prev => prev.filter(id => id !== review._id)));
    } else {
      // add to favorites
      fetch(`http://localhost:3000/favorites`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail: user.email, reviewId: review })
      }).then(() => setFavorites(prev => [...prev, review._id]));
    }
  };

  return (
    <section className="bg-gradient-to-b from-green-50 to-green-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-3">
            All Reviews
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
            Discover the best dishes and experiences shared by our local food lovers.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map(r => (
            <div
              key={r._id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden relative hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <img
                src={r.foodImage}
                alt={r.foodName}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold text-gray-800">{r.foodName}</h3>
                <p className="text-gray-600 font-medium">{r.restaurantName}</p>
                <p className="text-gray-500 text-sm">{r.location}</p>

                {/* Reviewer & Rating */}
                <div className="flex justify-between items-center mt-2">
                  <p className="text-blue-600 font-medium text-sm">
                    Reviewer: {r.reviewerName}
                  </p>
                  <p className="text-yellow-500 font-bold">⭐ {r.rating}</p>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(r)}
                  className={`absolute top-4 right-4 text-2xl transition-transform transform ${
                    favorites.includes(r._id)
                      ? "text-red-500 scale-110"
                      : "text-gray-300 hover:text-red-500 hover:scale-110"
                  }`}
                  title={favorites.includes(r._id) ? "Remove from favorites" : "Add to favorites"}
                >
                  ❤️
                </button>

                {/* View Details */}
                <Link
                  to={`/review/${r._id}`}
                  className="block text-center mt-4 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllReviews;
