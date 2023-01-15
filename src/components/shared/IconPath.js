import React from "react";
import useFetch from "../../hooks/useFetch";
import ReactHtmlParser from "react-html-parser";

const IconPath = ({ name }) => {
  const { data } = useFetch(
    "http://localhost:1337/api/icons?populate=deep"
  );

  return (
    <>
      {ReactHtmlParser(
        data?.filter((icon) => {
          return icon.attributes.name === name;
        })[0].attributes.path
      )}
    </>
  );
};

export default IconPath;
