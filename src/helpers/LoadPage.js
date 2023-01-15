import React from "react";
import useFetch from "../hooks/useFetch";
import { getContent, removeComponentName } from "./formatApi";

const LoadPage = ({ url, schema, props }) => {
  const { data, err, isLoading } = useFetch(url);
  const dataWithoutCompName = removeComponentName(data?.attributes?.content);
  return !isLoading && !err ? (
    dataWithoutCompName?.map((item, index) => (
      <>
        {getContent(
          { headerHeight: props?.headerHeight, content: item },
          schema
        )}
      </>
    ))
  ) : isLoading ? (
    <h1
      style={{
        position: "absolute",
        top: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgb(0,0,0, 40%)",
        zIndex: 10000000000,
        color: "white",
        fontSize: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Loading...
    </h1>
  ) : (
    <p>Ops! There was an error!</p>
  );
};

export default LoadPage;
