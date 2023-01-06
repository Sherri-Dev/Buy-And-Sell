import React from "react";
import pageSchema from "../../helpers/pageSchema";
import LoadPage from "../../helpers/LoadPage";

const Home = ({ headerHeight }) => {

  return (
    <LoadPage url={`${process.env.REACT_APP_API_URL}/home?populate=deep`} schema={pageSchema} props={{ headerHeight }} />
  );
};

export default Home;
