import React from "react";

const TrendingCategories = () => {
  const categories = [
    { name: "Street Food", icon: "🍢", color: "from-orange-500 to-yellow-400" },
    { name: "Restaurant", icon: "🍽️", color: "from-red-500 to-pink-500" },
    { name: "Desserts", icon: "🍰", color: "from-purple-500 to-indigo-500" },
    { name: "Fast Food", icon: "🍔", color: "from-green-500 to-emerald-400" },
    { name: "Drinks", icon: "🥤", color: "from-blue-500 to-cyan-400" },
    { name: "Traditional Food", icon: "🍛", color: "from-amber-600 to-yellow-500" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-white">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">
          Trending Food Categories
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
          Explore the most popular food categories that foodies are loving right now.
        </p>
      </div>

      {/* CATEGORY GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`group p-6 rounded-2xl shadow-md bg-gradient-to-br ${cat.color} 
              text-white flex flex-col items-center justify-center cursor-pointer
              transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
          >
            <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
              {cat.icon}
            </div>
            <p className="font-semibold text-lg tracking-wide">{cat.name}</p>
          </div>
        ))}
      </div>

      {/* FOOTER NOTE */}
      <div className="text-center mt-12">
        <p className="text-gray-600 text-sm">
          🍽️ Stay tuned — more exciting categories coming soon!
        </p>
      </div>
    </section>
  );
};

export default TrendingCategories;
