import { Link } from "react-router-dom";

const FeaturedReviews = ({ reviews }) => {
  return (
    <div className="my-14 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Top Rated Reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {reviews.slice(0, 6).map((item) => (
          <div key={item._id} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <img
              src={item.foodImage}
              alt={item.foodName}
              className="h-40 w-full object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-3">{item.foodName}</h3>
            <p className="text-sm text-gray-600">{item.restaurantName}, {item.location}</p>
            <p className="mt-2 font-medium text-yellow-600">⭐ {item.rating}/5</p>
            <p className="text-sm text-gray-700 mt-1">Reviewed by: {item.reviewerName}</p>

            <Link to={`/reviews/${item._id}`}>
              <button className="btn btn-outline btn-sm mt-3 w-full">View Details</button>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/reviews">
          <button className="btn btn-primary px-8">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedReviews;
