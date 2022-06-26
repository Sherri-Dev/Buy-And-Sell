import {
  Box,
  TextField,
  Typography,
  alpha,
  Button,
  Autocomplete,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import CategoryAds from "./CategoryAds";

const HomeBanner = ({ headerHeight }) => {
  return (
    <Box
      component={"section"}
      sx={{
        height: "100%",
        background:
          "url('https://adforestpro.scriptsbundle.com/wp-content/uploads/2021/12/adforestpro-hero-1.jpg') center center/cover",
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid grey",
        }}
      >
        <Container>
          <Box
            sx={{
              paddingTop: `${headerHeight}px`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: {
                xs: `${headerHeight + 60}px 0 60px 0`,
                md: `${headerHeight + 100}px 0 100px 0`,
                lg: `${headerHeight + 140}px 0 140px 0`,
              },
            }}
          >
            <Box
              sx={{
                maxWidth: { xs: "750px", lg: "900px" },
                textAlign: "center",
              }}
            >
              <Typography
                color="white"
                variant="h6"
                sx={{ fontSize: { xs: "16px", sm: "20px" } }}
                fontWeight={"normal"}
                gutterBottom
              >
                More Than 174.0000 Ads Listing
              </Typography>
              <Typography
                color="white"
                variant="h2"
                sx={{
                  fontSize: {
                    xs: "25px",
                    mb: "30px",
                    sm: "45px",
                    md: "60px",
                    lg: "75px",
                  },
                }}
                fontWeight={"600"}
                gutterBottom
              >
                Best Classified Website
              </Typography>
              <Box
                sx={{
                  backgroundColor: alpha("#000", 0.5),
                  borderRadius: "10px",
                  padding: { xs: "0.5rem", mb: "1rem" },
                  boxShadow: "0 0 1px 2px white",
                  mt: { xs: "1.5rem", sm: "2.5rem" },
                }}
              >
                <Box
                  component="form"
                  sx={{
                    display: "flex",
                    gap: "0.6rem",
                    borderRadius: "8px",
                    height: { md: "4.5rem" },
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      paddingRight: { md: "1.5rem" },
                      borderRight: { md: "1px solid white" },
                    }}
                  >
                    <SearchIcon
                      sx={{
                        color: "action.active",
                        mr: 1,
                        color: "primary.main",
                        alignSelf: "center",
                      }}
                    />
                    <TextField
                      label="What are you looking for"
                      inputProps={{
                        placeholder: "Keyword like car, mobile, furniture etc",
                        sx: {
                          height: "100%",
                          color: "white",
                          borderBottom: "2px solid grey",
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          fontSize: "20px",
                          top: "-0.5rem",
                          color: "white",
                        },
                      }}
                      fullWidth
                      variant="filled"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <LocationSearchingIcon
                      sx={{
                        color: "action.active",
                        mr: 1,
                        color: "primary.main",
                        alignSelf: "center",
                      }}
                    />
                    <Autocomplete
                      options={["Karachi", "Islamabad", "Lahore"]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          inputProps={{
                            ...params.inputProps,
                            placeholder:
                              "Keyword like car, mobile, furniture etc",
                            sx: {
                              height: "100%",
                              color: "white",
                              borderBottom: "2px solid grey",
                            },
                          }}
                          label="Where"
                          variant="standard"
                          InputLabelProps={{
                            ...params.InputLabelProps,
                            sx: {
                              fontSize: "20px",
                              top: "-0.5rem",
                              color: "white",
                            },
                          }}
                          sx={{
                            button: {
                              color: "white",
                            },
                          }}
                          fullWidth
                        />
                      )}
                      fullWidth
                    />
                  </Box>
                  <Button
                    type="submit"
                    sx={{
                      fontSize: "18px",
                      paddingInline: "2rem",
                      width: { xs: "100%", md: "30%" },
                      "&:hover": {
                        backgroundColor: "secondary.main",
                        color: "white",
                      },
                    }}
                    variant="contained"
                  >
                    Search
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <CategoryAds />
      </Container>
    </Box>
  );
};

export default HomeBanner;
