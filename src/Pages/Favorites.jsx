import React, { useEffect, useState } from "react";
import { Trash } from "lucide-react";
import Swal from "sweetalert2";
import { useAuth } from "../hooks/useAuth";

const Favorites = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  // 🔹 Fetch favorites for the logged-in user
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/favorites?userEmail=${encodeURIComponent(user.email)}`)
        .then((res) => res.json())
        .then((data) => setFavorites(data))
        .catch((err) => console.error("Failed to load favorites:", err));
    }
  }, [user]);

  // 🔹 Delete favorite by _id
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this from favorites?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a", // green
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    });

    if (confirm.isConfirmed) {
      const res = await fetch(`http://localhost:3000/favorites/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        Swal.fire({
          title: "Removed!",
          text: "The item has been removed.",
          icon: "success",
          confirmButtonColor: "#16a34a",
        });
        setFavorites((prev) => prev.filter((fav) => fav._id !== id));
      } else {
        Swal.fire("Error", "Failed to remove favorite", "error");
      }
    }
  };

  return (
    <section className="bg-green-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-green-700 mb-2">
            💚 My Favorite Dishes
          </h2>
          <p className="text-gray-600 text-lg">
            All your saved food reviews are here — manage and explore your top picks.
          </p>
        </div>

        {favorites.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((fav) => (
              <div
                key={fav._id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 overflow-hidden"
              >
                <img
                  src={fav.foodImage}
                  alt={fav.foodName}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6 space-y-3">
                  <h2 className="text-2xl font-semibold text-green-700">
                    {fav.foodName}
                  </h2>
                  <p className="text-gray-700 font-medium">
                    {fav.restaurantName}
                  </p>
                  <p className="text-gray-500 text-sm">{fav.location}</p>

                  <button
                    onClick={() => handleDelete(fav._id)}
                    className="flex items-center justify-center gap-2 w-full bg-green-700 text-white py-2 rounded-xl mt-4 font-medium hover:bg-green-800 transition"
                  >
                    <Trash size={18} /> Remove Favorite
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 text-lg mt-10">
            <p>No favorites found yet 😔</p>
            <p className="text-green-700 font-semibold mt-2">
              Add some reviews to your favorites to see them here!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Favorites;
