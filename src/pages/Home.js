import React, { useState } from "react";
import FeaturedAds from "../components/FeaturedAds";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import Work from "../components/Work";

const Home = ({ headerHeight }) => {
  return (
    <>
      <HomeBanner headerHeight={headerHeight} />
      <FeaturedAds />
      <Work />
      <Footer />
    </>
  );
};

export default Home;
