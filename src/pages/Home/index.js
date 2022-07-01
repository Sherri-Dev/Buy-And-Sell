import React from "react";
import FeaturedAds from "./FeaturedAds";
import Footer from "../../components/Footer";
import HomeBanner from "./HomeBanner";
import Work from "./Work";

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
