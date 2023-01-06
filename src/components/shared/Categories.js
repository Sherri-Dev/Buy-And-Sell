import { ListItem, ListItemButton } from "@mui/material";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiltersContext } from "../../contexts/filtersContext";
import ctgs from "../../ctgs.json";
import { Avatar, Box, Chip, Typography } from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import categories from "../../ctgs.json";
import { getImg } from "../../helpers/formatApi";

const Categories = ({ content, variant, textColor, drawerOpen }) => {
  const { state: filtersState, dispatch: dispatchFilter } = useContext(FiltersContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (location.pathname !== "/search-results") {
      navigate("/search-results");
    }
    drawerOpen && drawerOpen(false);
    if (filtersState.filteredCtgs.indexOf(e.currentTarget.innerText) === -1) {
      dispatchFilter({ type: "CTG", payload: [...filtersState.filteredCtgs, e.currentTarget.innerText] });
    }

    window.scrollTo(0, 0)
  };
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {variant === "tabs" ? (
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
          {content.map((cat, i) => {
            let img = getImg(cat.attributes.img, "thumbnail");
            return (
              <Tab
                key={i}
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
                      src={`http://localhost:1337${img.url}`}
                      alt={img.alt}
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
                      onClick={handleClick}
                    >
                      {cat.attributes.name}
                    </Typography>
                    <Chip
                      label={`${cat.attributes.ads.data.length} ${cat.attributes.ads.data.length > 1 ? 'Ads' : 'Ad'}`}
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
      ) : (
        <>
          {ctgs.map((ctg, i) => (
            <ListItem disablePadding key={i}>
              <ListItemButton
                sx={{
                  color: textColor || "#979797",
                  fontFamily: "Poppins",
                  fontSize: { xs: "1rem", mb: "1.1rem" },
                }}
                onClick={handleClick}
              >
                {ctg}
              </ListItemButton>
            </ListItem>
          ))}
        </>
      )}
    </>
  );
};

export default Categories;
