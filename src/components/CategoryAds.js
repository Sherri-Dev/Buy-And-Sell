import { Avatar, Box, Chip, Typography } from "@mui/material";
import React from "react";
import { Tab, Tabs } from "@mui/material";
import categories from "../ctgs.json";
import { Link } from "react-router-dom";
const CategoryAds = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      sx={{
        padding: "0.8rem 0",
        "button.Mui-selected": { color: "white" },
        color: "white",
        ".MuiTabs-scrollButtons svg": {
          fontSize: "2.2rem",
          "&:hover": {
            transform: "scale(1.2)",
            transition: "transform 0.3s ease",
          },
        },
      }}
      scrollButtons
      indicatorColor="transparent"
      variant="scrollable"
    >
      {categories.map((cat, i) => {
        return (
          <Tab
            key={i}
            component={Link}
            to="/search-results"
            icon={
              <Box
                sx={{
                  padding: "0.5rem",
                  borderRadius: "999px",
                  backgroundColor: "white",
                  border: `8px solid rgba(0, 0, 0, 0.7)`,
                }}
              >
                <Avatar
                  src="https://adforestpro.scriptsbundle.com/wp-content/uploads/2021/10/02.png"
                  sx={{
                    width: { xs: "25px", sm: "35px", md: "40px" },
                    height: { xs: "25px", sm: "35px", md: "40px" },
                  }}
                />
              </Box>
            }
            sx={{
              color: "white !important",
              gap: "0.25rem",
              padding: { xs: "8px", sm: "10px", md: "20px" },
              "& :hover": {
                color: "primary.main",
              },
            }}
            iconPosition="start"
            label={
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  alignItems: "start",
                  gap: "0.3rem",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "17px", sm: "20px" },
                    textTransform: "capitalize",
                  }}
                >
                  {cat}
                </Typography>
                <Chip
                  label="6 Ads"
                  variant="filled"
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    textTransform: "lowercase",
                  }}
                />
              </Box>
            }
          />
        );
      })}
    </Tabs>
  );
};

export default CategoryAds;
