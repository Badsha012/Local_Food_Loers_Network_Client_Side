import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Toaster, toast } from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";

const AddReview = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    foodName: "",
    foodImage: "",
    restaurantName: "",
    location: "",
    rating: 1,
    reviewText: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login to add a review");
      return;
    }

    // Check all fields
    for (const key in form) {
      if (!form[key]) {
        toast.error("Please fill all fields");
        return;
      }
    }

    setLoading(true);

    const payload = {
      ...form,
      userEmail: user.email,
      reviewerName: user.displayName || "Anonymous",
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(
        "https://local-food-loers-network-serve-side.vercel.app/FoodLovers",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Failed to add review");

      toast.success("Review added successfully!");
      navigate("/my-reviews");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center py-12 px-4">
      <Toaster position="top-right" />
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-6 text-center">
          Add a Review
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Share your food experience with the community
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {["foodName", "foodImage", "restaurantName", "location"].map(
            (field) => (
              <div key={field}>
                <label className="block font-medium mb-1">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type={field === "foodImage" ? "url" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                />
              </div>
            )
          )}

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
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Review Text</label>
            <textarea
              name="reviewText"
              value={form.reviewText}
              onChange={handleChange}
              rows={5}
              placeholder="Share your experience..."
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition shadow-md hover:shadow-lg flex justify-center items-center"
          >
            {loading ? "Adding..." : "Add Review"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
