import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const MyReviews = ({ user }) => {
  const [reviews, setReviews] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/FoodLovers?userEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) =>
        setReviews(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
      )
      .catch((err) => console.error(err));
  }, [user]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/FoodLovers/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete review");
      setReviews((prev) => prev.filter((r) => r._id !== id));
      setDeleteId(null);
    } catch (err) {
      console.error(err);
      alert("Failed to delete review");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">My Reviews</h2>

      {reviews.length === 0 ? (
        <p className="text-center text-gray-600 mt-10">You have not added any reviews yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-lg">
            <thead>
              <tr className="bg-green-100 text-left">
                <th className="px-4 py-3">Food Image</th>
                <th className="px-4 py-3">Food Name</th>
                <th className="px-4 py-3">Restaurant</th>
                <th className="px-4 py-3">Posted Date</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((r) => (
                <tr key={r._id} className="border-b hover:bg-gray-50 transition">
                  <td className="px-4 py-3">
                    <img src={r.foodImage} alt={r.foodName} className="h-16 w-16 object-cover rounded-lg" />
                  </td>
                  <td className="px-4 py-3">{r.foodName}</td>
                  <td className="px-4 py-3">{r.restaurantName}</td>
                  <td className="px-4 py-3">{new Date(r.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-3 space-x-2">
                    <button
                      onClick={() => navigate(`/edit-review/${r._id}`)}
                      className="px-3 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleteId(r._id)}
                      className="px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {deleteId && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-lg space-y-4">
            <h3 className="text-xl font-bold text-red-600">Confirm Delete</h3>
            <p>Are you sure you want to delete this review? This action cannot be undone.</p>
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

export default MyReviews;
