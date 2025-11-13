import React from "react";
import Hero from "../Componen/Hero";
import TopCities from "../Componen/TopCities";

import TrendingCategories from "../Componen/TrendingCategories";
import JoinCommunity from "../Componen/JoinCommunity";
import FeaturedReviews from "../Componen/FeaturedReviews";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <FeaturedReviews></FeaturedReviews>

      <TopCities></TopCities>
      <TrendingCategories></TrendingCategories>

      <JoinCommunity></JoinCommunity>
    </div>
  );
};

export default Home;
