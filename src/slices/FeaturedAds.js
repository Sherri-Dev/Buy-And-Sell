import { Box, CircularProgress, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useRef } from "react";
import Ad from "../components/global/Ad";
import Heading from "../components/shared/Heading";
import useLoadMore from "../hooks/useLoadMore";
import LoadingButton from '@mui/lab/LoadingButton';

const FeaturedAds = ({ content: { category, title } }) => {

  const btnRef = useRef(null);

  const { data, isLoading, hasMore } = useLoadMore({ query: 'ads', btnRef, pageSize: 6 })
  return (
    <Box component="section" sx={{ padding: { xs: "40px 0", sm: "60px 0" } }}>
      <Container>
        <Heading title={title} mb={{ xs: "50px", sm: "70px" }} />
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {data?.map((ad) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={ad.id}>
                <Ad variant={1} content={ad.attributes} />
              </Grid>
            );
          })}
        </Grid>

        <LoadingButton
          size="large"
          variant="contained" sx={{
            textTransform: "capitalize",
            display: `${hasMore ? "flex" : 'none'}`,
            alignItems: 'center',
            mt: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            mx: "auto",
            pr: isLoading ? '32px' : '20px',
            pl: isLoading ? '8px' : '20px',
            backgroundColor: { '&:hover': 'secondary.main' },

          }}
          loading={isLoading}
          loadingPosition='center'
          loadingIndicator={<><CircularProgress size={16} /></>}
          ref={btnRef}> View More</LoadingButton>

      </Container>
    </Box>
  );
};

export default FeaturedAds;
