import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Home = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews?limit=6") // API returns top 6 reviews
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">

      {/* ✅ Hero Slider */}
      <div className="mt-5">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2500 }}
          loop={true}
          className="rounded-xl overflow-hidden h-[400px]"
        >
          <SwiperSlide>
            <div className="h-[400px] bg-[url('https://i.ibb.co/pJ2TcZ8/food-banner1.jpg')] bg-cover bg-center flex items-center justify-center">
              <h1 className="text-4xl text-white font-bold bg-black/50 px-5 py-2 rounded-xl">
                Discover Local Food Gems 🍽️
              </h1>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-[400px] bg-[url('https://i.ibb.co/vky5bRp/food-banner2.jpg')] bg-cover bg-center flex items-center justify-center">
              <h1 className="text-4xl text-white font-bold bg-black/50 px-5 py-2 rounded-xl">
                Taste the Best Reviews in Town ⭐
              </h1>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-[400px] bg-[url('https://i.ibb.co/d6RdR75/food-banner3.jpg')] bg-cover bg-center flex items-center justify-center">
              <h1 className="text-4xl text-white font-bold bg-black/50 px-5 py-2 rounded-xl">
                Share Your Food Experience 🍕
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* ✅ Featured Reviews */}
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Featured Reviews</h2>
          <Link
            to="/all-reviews"
            className="text-blue-600 hover:underline font-semibold"
          >
            Show All
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="border rounded-lg shadow-md p-3 hover:shadow-lg transition"
            >
              <img
                src={review.photo}
                alt={review.foodName}
                className="w-full h-40 object-cover rounded-md"
              />

              <h3 className="text-xl font-bold mt-3">{review.foodName}</h3>
              <p className="text-gray-600">{review.restaurantName}</p>
              <p className="text-sm text-gray-500">
                📍 {review.location}
              </p>

              <div className="mt-2 flex justify-between items-center">
                <span className="text-sm">
                  👤 {review.reviewerName}
                </span>
                <span className="font-bold">⭐ {review.rating}/5</span>
              </div>

              <Link to={`/review/${review._id}`}>
                <button className="w-full mt-3 bg-blue-600 text-white py-1 rounded-md hover:bg-blue-700">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
