import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const AddReivews = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    foodName: "",
    foodImage: "",
    restaurantName: "",
    location: "",
    rating: 0,
    reviewText: "",
  });
  const [loading, setLoading] = useState(false);

  // Fetch existing review
  useEffect(() => {
    if (user && id) {
      fetch(`http://localhost:3000/FoodLovers/${id}`)
        .then(res => res.json())
        .then(data => {
          if (data.userEmail !== user.email) {
            alert("You are not allowed to edit this review!");
            navigate("/my-reviews");
          } else {
            setForm({
              foodName: data.foodName,
              foodImage: data.foodImage,
              restaurantName: data.restaurantName,
              location: data.location,
              rating: data.rating,
              reviewText: data.reviewText,
            });
          }
        })
        .catch(err => console.error(err));
    }
  }, [user, id, navigate]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(`http://localhost:3000/FoodLovers/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(() => {
        setLoading(false);
        navigate("/my-reviews");
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Edit Review</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg space-y-4">
        <div>
          <label className="block font-medium mb-1">Food Name</label>
          <input
            type="text"
            name="foodName"
            value={form.foodName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Food Image URL</label>
          <input
            type="text"
            name="foodImage"
            value={form.foodImage}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Restaurant Name</label>
          <input
            type="text"
            name="restaurantName"
            value={form.restaurantName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Star Rating</label>
          <input
            type="number"
            name="rating"
            value={form.rating}
            onChange={handleChange}
            min={1}
            max={5}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Review Text</label>
          <textarea
            name="reviewText"
            value={form.reviewText}
            onChange={handleChange}
            rows={4}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          {loading ? "Updating..." : "Update Review"}
        </button>
      </form>
    </div>
  );
};

export default AddReivews;
