import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Ad from "../components/global/Ad";
import Btn from "../components/shared/Btn";
import Heading from "../components/shared/Heading";

const FeaturedAds = ({ content: { category, title } }) => {
  return (
    <Box component="section" sx={{ padding: { xs: "40px 0", sm: "60px 0" } }}>
      <Container>
        <Heading
          title={title}
          mb={{ xs: "50px", sm: "70px" }}
        />
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {category.data.attributes.ads.data.map((ad, i) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Ad variant={1} content={ad.attributes} />
              </Grid>
            );
          })}
        </Grid>

        <Btn
          text="View All"
          sx={{
            textTransform: "capitalize",
            display: "block",
            mt: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            mx: "auto",
          }}
          size="large"
          variant="contained"
        />
      </Container>
    </Box>
  );
};

export default FeaturedAds;
