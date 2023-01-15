import {
  Box,
  Drawer,
  IconButton,
  List,
  ListSubheader,
  Toolbar,
} from "@mui/material";
import React, { useContext, useState } from "react";
import TopBar from "../../components/global/TopBar";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Btn from "../../components/shared/Btn";
import RangeSlider from "./RangeSlider";
import FilterTab from "./FilterTab";
import SearchBox from "../../components/shared/SearchBox";
import Categories from "../../components/shared/Categories";
import AdSlider from "./AdSlider";
import { FiltersContext } from "../../contexts/filtersContext";
import { CategoriesContextProvider } from "../../contexts/categoriesContext";
import useFetch from "../../hooks/useFetch";
import ResultsFound from "./ResultsFound";

const SearchResults = ({ headerHeight }) => {
  const { data } = useFetch(
    `${process.env.REACT_APP_API_URL}/search-results?populate=deep`
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const { state: filtersState, dispatch: dispatchFilter } =
    useContext(FiltersContext);

  const drawerWidth = 360;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <Box
        sx={{
          paddingTop: `${headerHeight}px`,
          width: "100%",
          position: "relative",
        }}
      >
        <TopBar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            minHeight: "100vh",
          }}
        >
          <Btn
            text={"Filters"}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "flex", sm: "none" },
              position: "fixed",
              bottom: "1rem",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1,
            }}
            variant="contained"
            endIcon={<FilterAltIcon />}
          />
          <Drawer
            variant="permanent"
            anchor="left"
            sx={{
              width: `${drawerWidth}px`,
              display: { xs: "none", sm: "block" },
              [`& .MuiDrawer-paper`]: {
                width: `${drawerWidth}px`,
                boxSizing: "border-box",
                top: "auto",
                position: "absolute",
              },
            }}
          >
            <List>
              <ListSubheader
                sx={{
                  fontSize: "22px",
                  fontWeight: "600",
                  color: "black",
                  mt: "0.5rem",
                }}
              >
                Search Filters
              </ListSubheader>
              <FilterTab
                title={"Ad Search"}
                element={<SearchBox type="text" />}
              />
              <CategoriesContextProvider>
                <FilterTab
                  title={"Ad Categories"}
                  element={
                    <Categories
                      textColor={"#575757"}
                      filteredCtgs={filtersState.filteredCtgs}
                      setFilteredCtgs={dispatchFilter}
                      content={data?.attributes?.categories?.data}
                    />
                  }
                />
              </CategoriesContextProvider>
              <FilterTab title={"Ad Price"} element={<RangeSlider />} />
              <FilterTab
                title={"Location"}
                element={<SearchBox type={"location"} />}
              />
            </List>
            <AdSlider
              title={"Featured Ads"}
              url={`${process.env.REACT_APP_API_URL}/categories?filters[slug][$eq]=featured&populate=deep`}
              content={data?.attributes.featuredAds}
            />
            <AdSlider
              title={"Recent Ads"}
              url={`${process.env.REACT_APP_API_URL}/ads?populate=deep&sort[0]=updatedAt:desc`}
            />
          </Drawer>
          <Drawer
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              width: `100vw`,

              display: { xs: "block", sm: "none" },
              [`& .MuiDrawer-paper`]: {
                width: `100vw`,
                boxSizing: "border-box",
                p: `${headerHeight - 20}px 0px`,
                zIndex: -1,
              },
            }}
          >
            <Toolbar />

            <List>
              <ListSubheader
                sx={{
                  fontSize: "22px",
                  fontWeight: "600",
                  color: "black",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                Search Filters
                <IconButton
                  onClick={() => setMobileOpen(false)}
                  sx={{ justifyContent: "right" }}
                >
                  {" "}
                  <ArrowBackIosNewRoundedIcon />
                </IconButton>
              </ListSubheader>
              <FilterTab
                title={"Ad Search"}
                element={<SearchBox type="text" />}
              />
              <FilterTab
                title={"Ad Categories"}
                element={
                  <Categories
                    textColor={"#575757"}
                    drawerOpen={setMobileOpen}
                    content={data?.attributes?.categories?.data}
                  />
                }
              />
              <FilterTab title={"Ad Price"} element={<RangeSlider />} />
              <FilterTab
                title={"Location"}
                element={<SearchBox type={"location"} />}
              />
            </List>
            <AdSlider
              title={"Featured Ads"}
              content={data?.attributes.featuredAds}
            />
            <AdSlider
              title={"Recent Ads"}
              url={`${process.env.REACT_APP_API_URL}/ads?populate=deep&sort[0]=updatedAt:desc`}
            />
          </Drawer>
          <ResultsFound
            query="ads"
            params={{ filtersState }}
            dispatchFilter={dispatchFilter}
            icon={data?.attributes?.icon}
          />
        </Box>
      </Box>
    </>
  );
};

export default SearchResults;
