import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";

const FeaturedReviews = ({ user }) => {
  const [reviews, setReviews] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);

  // 🟩 Load reviews & favorites
  useEffect(() => {
    fetch("https://local-food-loers-network-serve-side.vercel.app/FoodLovers")
      .then((res) => res.json())
      .then((data) => {
        const topReviews = data.sort((a, b) => b.rating - a.rating).slice(0, 6);
        setReviews(topReviews);
      })
      .catch((err) => console.error(err));

    if (user?.email) {
      fetch(
        `https://local-food-loers-network-serve-side.vercel.app/favorites/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setFavorites(data.map((fav) => fav.reviewId?._id)))
        .catch((err) => console.error(err));
    }
  }, [user]);

  // 🟩 Add or Remove Favorite
  const toggleFavorite = (review) => {
    if (!user) return toast.error("Please login to add favorites");

    const isFav = favorites.includes(review._id);

    if (isFav) {
      // remove favorite
      fetch(
        `https://local-food-loers-network-serve-side.vercel.app/favorites/${user.email}/${review._id}`,
        {
          method: "DELETE",
        }
      )
        .then(() => {
          setFavorites((prev) => prev.filter((id) => id !== review._id));
          toast.success("Removed from favorites");
        })
        .catch(() => toast.error("Failed to remove favorite"));
    } else {
      // add favorite
      fetch(
        `https://local-food-loers-network-serve-side.vercel.app/favorites`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userEmail: user.email, reviewId: review }),
        }
      )
        .then((res) => res.json())
        .then(() => {
          setFavorites((prev) => [...prev, review._id]);
          toast.success("Added to favorites");
        })
        .catch(() => toast.error("Failed to add favorite"));
    }
  };

  // 🟩 Copy to Clipboard
  const handleShare = (review) => {
    navigator.clipboard
      .writeText(
        `Check this food review: ${review.foodName} at ${review.restaurantName}!`
      )
      .then(() => toast.success("Copied review info to clipboard!"));
  };

  return (
    <>
      <Toaster position="top-right" />

      <section className="bg-gradient-to-b from-green-50 to-green-100 py-20 px-10 min-h-[80vh]">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-extrabold text-green-800 mb-4">
            Featured Reviews
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
            Discover the top-rated dishes and experiences shared by our local
            food lovers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r._id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 relative"
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

                <button
                  onClick={() => setSelectedReview(r)}
                  className="w-full mt-2 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
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
                <p className="text-sm text-gray-500 mb-4">
                  Reviewed by{" "}
                  <span className="font-medium text-blue-600">
                    {selectedReview.reviewerName}
                  </span>
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

export default FeaturedReviews;
