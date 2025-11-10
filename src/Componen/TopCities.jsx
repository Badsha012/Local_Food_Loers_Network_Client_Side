import React from "react";

const TopCities = () => {
  const cities = [
    { name: "Dhaka", icon: "🍛" },
    { name: "Chattogram", icon: "🥘" },
    { name: "Sylhet", icon: "🍤" },
    { name: "Rajshahi", icon: "🍇" },
    { name: "Khulna", icon: "🍢" },
    { name: "Barishal", icon: "🍲" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">
          Popular Food Cities
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
          Discover the top cities in Bangladesh known for their unique and flavorful local cuisines.
        </p>
      </div>

      {/* CITY LIST */}
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {cities.map((city, index) => (
          <div
            key={index}
            className="bg-white flex items-center gap-2 px-8 py-4 rounded-full shadow-md border border-green-100 
            text-green-800 font-semibold text-lg hover:bg-green-600 hover:text-white 
            hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <span className="text-2xl">{city.icon}</span>
            <span>{city.name}</span>
          </div>
        ))}
      </div>

      {/* BOTTOM NOTE */}
      <div className="text-center mt-10">
        <p className="text-gray-600 text-sm">
          🌍 More cities coming soon — stay tuned for new foodie destinations!
        </p>
      </div>
    </section>
  );
};

export default TopCities;
