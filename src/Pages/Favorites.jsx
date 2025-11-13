import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const Favorites = ({ user }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/favorites/${user.email}`)
      .then(res => res.json())
      .then(data => setFavorites(data.map(f => f.reviewId)))
      .catch(err => console.error("Error fetching favorites:", err));
  }, [user]);

  const handleRemove = (id) => {
    fetch(`http://localhost:3000/favorites/${user.email}/${id}`, { method: "DELETE" })
      .then(() => {
        setFavorites(prev => prev.filter(r => r._id !== id));
        toast.success("Removed from favorites");
      })
      .catch(() => toast.error("Failed to remove"));
  };

  return (
    <section className="bg-gradient-to-b from-green-50 to-green-100 py-20 px-6 min-h-[80vh]">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-3">
            My Favorite Reviews ❤️
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
            All your saved favorite food reviews in one place!
          </p>
        </div>

        {favorites.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No favorites yet 😔</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map(r => (
              <div
                key={r._id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
              >
                <img src={r.foodImage} alt={r.foodName} className="h-56 w-full object-cover" />
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-semibold text-gray-800">{r.foodName}</h3>
                  <p className="text-gray-600 font-medium">{r.restaurantName}</p>
                  <p className="text-gray-500 text-sm">{r.location}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-yellow-500 font-bold">⭐ {r.rating}</p>
                    <button
                      onClick={() => handleRemove(r._id)}
                      className="text-red-600 font-medium hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Favorites;
