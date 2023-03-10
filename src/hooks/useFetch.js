import React, { useEffect, useState } from "react";

const useFetch = (url, onlyFirst, options = { method: "GET" }) => {
  const [apiRes, setApiRes] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url, options)
      .then((response) => {
        setIsLoading(true);
        return response.json();
      })
      .then((response) => {
        if (response.data) {
          setApiRes(response.data);
        } else {
          setErr(response.error);
        }
        setIsLoading(false);
        return response;
      })
      .catch((err) => {
        setIsLoading(false);
        return setErr(err);
      });
  }, [url]);

  return { data: onlyFirst ? apiRes?.length && apiRes[0] : apiRes, err, isLoading };
};

export default useFetch;
