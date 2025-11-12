import React, { useEffect, useState } from "react";

const Favorites = ({ user }) => {
  const [favorites, setFavorites] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    if (user?.email) fetchFavorites();
  }, [user]);

  const fetchFavorites = () => {
    fetch(`http://localhost:3000/favorites/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        const validFavorites = data.filter((fav) => fav.reviewId);
        setFavorites(validFavorites);
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (reviewId) => {
    fetch(`http://localhost:3000/favorites/${user.email}/${reviewId}`, {
      method: "DELETE",
    }).then(() => {
      fetchFavorites();
      setDeleteId(null);
    });
  };

  if (!user) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600">
          Please login to see your favorites.
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
        My Favorite Reviews
      </h2>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No favorites added yet.
        </p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-green-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">
                  Food Image
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">
                  Food Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">
                  Restaurant
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {favorites.map((fav) => {
                const review = fav.reviewId;
                return (
                  <tr key={review._id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <img
                        src={review.foodImage || "https://via.placeholder.com/100"}
                        alt={review.foodName}
                        className="h-16 w-16 object-cover rounded-lg"
                      />
                    </td>
                    <td className="px-6 py-4 text-gray-700">{review.foodName}</td>
                    <td className="px-6 py-4 text-gray-700">{review.restaurantName}</td>
                    <td className="px-6 py-4 text-gray-500">{review.location}</td>
                    <td className="px-6 py-4 space-x-2">
                      <button
                        onClick={() => setDeleteId(review._id)}
                        className="px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-lg space-y-4">
            <h3 className="text-xl font-bold text-red-600">Confirm Delete</h3>
            <p>Are you sure you want to remove this favorite? This action cannot be undone.</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
