import React, { useEffect, useState } from "react";

const Favorites = ({ user }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/favorites/${user.email}`)
        .then(res => res.json())
        .then(data => setFavorites(data))
        .catch(err => console.error(err));
    }
  }, [user]);

  if (!user) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600">Please login to see your favorites.</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">My Favorite Reviews</h2>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-600">No favorites added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map(fav => {
            const review = fav.reviewId;
            return (
              <div
                key={review._id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={review.foodImage}
                  alt={review.foodName}
                  className="h-48 w-full object-cover rounded-lg mb-3"
                />
                <h3 className="text-xl font-semibold">{review.foodName}</h3>
                <p className="text-gray-600">{review.restaurantName}</p>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Favorites;
