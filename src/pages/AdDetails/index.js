import React from "react";
import { Box } from "@mui/material";
import TopBar from "../../components/global/TopBar";
import AdBanner from "./AdBanner";

const AdDetails = ({ headerHeight }) => {
  return (
    <Box sx={{ paddingTop: `${headerHeight}px` }}>
      <TopBar />
      <AdBanner />
    </Box>
  );
};

export default AdDetails;
