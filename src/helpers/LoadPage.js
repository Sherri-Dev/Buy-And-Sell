import React, { Fragment } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "../slices/Loading";
import { getContent, removeComponentName } from "./formatApi";

const LoadPage = ({ url, schema, props }) => {
  const { data, err, isLoading } = useFetch(url);
  const dataWithoutCompName = removeComponentName(data?.attributes?.content);
  return !isLoading && !err ? (
    dataWithoutCompName?.map((item, index) => (
      <Fragment key={index}>
        {getContent(
          { headerHeight: props?.headerHeight, content: item },
          schema
        )}
      </Fragment>
    ))
  ) : isLoading ? (
    <Loading />
  ) : (
    <p>Ops! There was an error!</p>
  );
};

export default LoadPage;
