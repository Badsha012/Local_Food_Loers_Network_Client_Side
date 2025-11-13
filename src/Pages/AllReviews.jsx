import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import { useLocation } from "react-router";
import { useAuth } from "../hooks/useAuth";

const AllReviews = () => {
  const { user } = useAuth();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("search")?.toLowerCase() || "";

  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);

  // 🔹 Load all reviews and user's favorites
  useEffect(() => {
    fetch("https://local-food-loers-network-serve-side.vercel.app/FoodLovers")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Failed to load reviews:", err));

    if (user?.email) {
      fetch(
        `https://local-food-loers-network-serve-side.vercel.app/favorites?userEmail=${encodeURIComponent(
          user.email
        )}`
      )
        .then((res) => res.json())
        .then((data) => setFavorites(data.map((fav) => fav.reviewId)))
        .catch((err) => console.error("Failed to load favorites:", err));
    }
  }, [user]);

  // 🔹 Filter search
  useEffect(() => {
    setFilteredReviews(
      reviews.filter(
        (r) =>
          r.foodName.toLowerCase().includes(searchQuery) ||
          r.restaurantName.toLowerCase().includes(searchQuery) ||
          r.location.toLowerCase().includes(searchQuery)
      )
    );
  }, [reviews, searchQuery]);

  // 🔹 Toggle favorite (add/remove)
  const toggleFavorite = async (review) => {
    if (!user) return toast.error("Please login to manage favorites");

    const isFav = favorites.includes(review._id);

    if (isFav) {
      // Find favorite by reviewId and delete
      const favRes = await fetch(
        `https://local-food-loers-network-serve-side.vercel.app/favorites?userEmail=${encodeURIComponent(
          user.email
        )}`
      );
      const favList = await favRes.json();
      const match = favList.find((f) => f.reviewId === review._id);

      if (match) {
        await fetch(
          `https://local-food-loers-network-serve-side.vercel.app/favorites/${match._id}`,
          { method: "DELETE" }
        );
        setFavorites((prev) => prev.filter((id) => id !== review._id));
        toast.success("Removed from favorites");
      }
    } else {
      await fetch(
        "https://local-food-loers-network-serve-side.vercel.app/favorites",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userEmail: user.email,
            reviewId: review._id,
            foodName: review.foodName,
            foodImage: review.foodImage,
            restaurantName: review.restaurantName,
            location: review.location,
          }),
        }
      )
        .then((res) => {
          if (!res.ok) throw new Error();
          setFavorites((prev) => [...prev, review._id]);
          toast.success("Added to favorites");
        })
        .catch(() => toast.error("Failed to add favorite"));
    }
  };

  const handleShare = (review) => {
    navigator.clipboard.writeText(
      `Check this food review: ${review.foodName} at ${review.restaurantName}!`
    );
    toast.success("Copied review info to clipboard!");
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <section className="bg-gradient-to-b from-green-50 to-green-100 py-20 px-6 min-h-[80vh]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-3">
              All Reviews
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
              Discover the best dishes shared by our food lovers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((r) => (
              <div
                key={r._id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden relative hover:shadow-2xl transform hover:scale-105 transition duration-300"
              >
                <img
                  src={r.foodImage}
                  alt={r.foodName}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {r.foodName}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {r.restaurantName}
                  </p>
                  <p className="text-gray-500 text-sm">{r.location}</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-yellow-500 font-bold">⭐ {r.rating}</p>
                  </div>

                  <button
                    onClick={() => toggleFavorite(r)}
                    className={`absolute top-4 right-4 text-2xl transition-transform transform ${
                      favorites.includes(r._id)
                        ? "text-red-500 scale-110"
                        : "text-gray-300 hover:text-red-500 hover:scale-110"
                    }`}
                    title={
                      favorites.includes(r._id)
                        ? "Remove from favorites"
                        : "Add to favorites"
                    }
                  >
                    ❤️
                  </button>

                  <button
                    onClick={() => setSelectedReview(r)}
                    className="w-full mt-4 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Modal */}
        <AnimatePresence>
          {selectedReview && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-3xl p-6 w-[90%] md:w-[600px] shadow-xl relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <button
                  className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-600"
                  onClick={() => setSelectedReview(null)}
                >
                  ✕
                </button>

                <img
                  src={selectedReview.foodImage}
                  alt={selectedReview.foodName}
                  className="w-full h-56 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {selectedReview.foodName}
                </h3>
                <p className="text-gray-600 font-medium mb-2">
                  {selectedReview.restaurantName} — {selectedReview.location}
                </p>
                <p className="text-gray-700 italic mb-3">
                  "{selectedReview.reviewText}"
                </p>
                <p className="text-yellow-500 font-bold mb-2">
                  ⭐ {selectedReview.rating}
                </p>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => toggleFavorite(selectedReview)}
                    className={`px-6 py-2 rounded-xl font-medium ${
                      favorites.includes(selectedReview._id)
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "bg-green-600 text-white hover:bg-green-700"
                    } transition`}
                  >
                    {favorites.includes(selectedReview._id)
                      ? "Remove Favorite"
                      : "Add Favorite"}
                  </button>
                  <button
                    onClick={() => handleShare(selectedReview)}
                    className="px-6 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                  >
                    Share
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default AllReviews;
