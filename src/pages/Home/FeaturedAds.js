import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Ad from "../../components/Ad";
import Btn from "../../components/Btn";
import Heading from "../../components/Heading";

const FeaturedAds = () => {
  return (
    <Box component="section" sx={{ padding: { xs: "40px 0", sm: "60px 0" } }}>
      <Container>
        <Heading
          mb={{ xs: "50px", sm: "70px" }}
          main="Featured"
          sub1={"All"}
          sub2="Ads"
        />
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {[1, 2, 3, 4, 5, 6].map((ad, i) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Ad variant={1} />
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
