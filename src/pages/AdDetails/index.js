import React, { useEffect, useMemo, useState } from "react";
import { Box } from "@mui/material";
import TopBar from "../../components/global/TopBar";
import AdBanner from "./AdBanner";
import AdContent from "./AdContent";
import { useParams } from "react-router-dom";
import qs from 'qs';
import useFetch from "../../hooks/useFetch";
import NotFound from "../../slices/NotFound";
import Loading from "../../slices/Loading";

const AdDetails = ({ headerHeight }) => {
  const { slug } = useParams();

  const strapiQuery = qs.stringify({
    filters: {
      slug: {
        $eq: slug
      }
    },
    populate: 'deep'
  })

  const { data, isLoading, err } = useFetch(`${process.env.REACT_APP_API_URL}/ads/?${strapiQuery}`);

  const [content, setContent] = useState([]);
  useEffect(() => {
    setContent(data[0])
  }, [data]);

  if (!isLoading && err) {
    return <NotFound />
  } else if (isLoading) {
    return <Loading />
  }

  let offset = '5rem'

  return (
    <Box sx={{ paddingTop: `${headerHeight}px`, paddingBottom: '3rem', backgroundColor: '#eeeeee' }}>
      <TopBar />
      <AdBanner content={content} offset={offset} />
      <AdContent content={content} offset={offset} />
    </Box>
  );
};

export default AdDetails;
