import React, { useState, useEffect, createContext, useContext } from "react";

const FavoritesContext = createContext();

const FavoritesProvider = ({ user, children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!user?.email) {
      setFavorites([]);
      return;
    }

    fetch(
      `https://local-food-loers-network-serve-side.vercel.app/favorites?userEmail=${encodeURIComponent(
        user.email
      )}`
    )
      .then((res) => res.json())
      .then((data) => setFavorites(data.map((fav) => fav.reviewId)))
      .catch((err) => console.error("Error fetching favorites:", err));
  }, [user]);

  const toggleFavorite = (review) => {
    if (!user) return alert("Please login to add favorites");

    const isFav = favorites.some((f) => f._id === review._id);

    const url = isFav
      ? `https://local-food-loers-network-serve-side.vercel.app/favorites/${
          review._id
        }?userEmail=${encodeURIComponent(user.email)}`
      : "https://local-food-loers-network-serve-side.vercel.app/favorites";

    const options = isFav
      ? { method: "DELETE" }
      : {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userEmail: user.email, reviewId: review._id }),
        };

    fetch(url, options)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update favorite");

        if (isFav) {
          setFavorites((prev) => prev.filter((f) => f._id !== review._id));
        } else {
          setFavorites((prev) => [...prev, review]);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
export default FavoritesProvider;
