import React from "react";
import useFetch from "../hooks/useFetch";
import { getContent, removeComponentName } from "./formatApi";

const LoadPage = ({ url, schema, props }) => {
  const { data, err, isLoading } = useFetch(url);
  const dataWithoutCompName = removeComponentName(data?.content);
  // console.log(dataWithoutCompName);
  return !isLoading && !err ? (
    dataWithoutCompName?.map((item) =>
      getContent({ headerHeight: props?.headerHeight, content: item }, schema)
    )
  ) : isLoading ? (
    <h1 style={{ position: "absolute", top: "50%", left: "50%" }}>
      Loading...
    </h1>
  ) : (
    <p>Ops! There was an error!</p>
  );
};

export default LoadPage;
