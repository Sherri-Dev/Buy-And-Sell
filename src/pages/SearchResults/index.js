import {
  Box,
  Chip,
  Drawer,
  FormControl,
  Grid,
  IconButton,
  List,
  ListSubheader,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import TopBar from "../../components/global/TopBar";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Btn from "../../components/shared/Btn";
import RangeSlider from "./RangeSlider";
import RadioComponent from "./RadioComponent";
import FilterTab from "./FilterTab";
import SearchBox from "../../components/shared/SearchBox";
import Categories from "../../components/shared/Categories";
import AdSlider from "./AdSlider";
import { Container } from "@mui/system";
import Ad from "../../components/global/Ad";
import Heading from "../../components/shared/Heading";
import { FiltersContext } from "../../contexts/filtersContext";

const SearchResults = ({ headerHeight }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [age, setAge] = useState("");
  const { state: filtersState, dispatch: dispatchFilter } = useContext(FiltersContext);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const drawerWidth = 320;

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
          sx={{ display: "flex", flexDirection: "row", position: "relative" }}
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
                overflow: "clip",
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
              <FilterTab
                title={"Ad Categories"}
                element={
                  <Categories
                    textColor={"#575757"}
                    filteredCtgs={filtersState.filteredCtgs}
                    setFilteredCtgs={dispatchFilter}
                  />
                }
              />
              <FilterTab title={"Ad Price"} element={<RangeSlider />} />
              <FilterTab
                title={"Warranty"}
                element={
                  <RadioComponent type="warranty" items={["Yes", "No"]} />
                }
              />
              <FilterTab
                title={"Condition"}
                element={
                  <RadioComponent type="condition" items={["New", "Used"]} />
                }
              />
              <FilterTab
                title={"Location"}
                element={<SearchBox type={"location"} />}
              />
            </List>
            <AdSlider title={"Featured Ads"} />
            <AdSlider title={"Recent Ads"} />
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
                  />
                }
              />
              <FilterTab title={"Ad Price"} element={<RangeSlider />} />
              <FilterTab
                title={"Warranty"}
                element={
                  <RadioComponent type="warranty" items={["Yes", "No"]} />
                }
              />
              <FilterTab
                title={"Condition"}
                element={
                  <RadioComponent type="condition" items={["New", "Used"]} />
                }
              />
              <FilterTab
                title={"Location"}
                element={<SearchBox type={"location"} />}
              />
            </List>
            <AdSlider title={"Featured Ads"} />
            <AdSlider title={"Recent Ads"} />
          </Drawer>
          <Box sx={{ width: "100%" }}>
            <Container>
              <Stack
                sx={{
                  padding: "15px 0px",
                }}
                direction="row"
                justifyContent={"space-between"}
                alignItems="center"
              >
                <Typography>Ads Foud: 17</Typography>
                <FormControl
                  sx={{ "& .MuiSelect-select": { p: "10px 45px 10px 14px" } }}
                >
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Filter By" }}
                  >
                    <MenuItem value="" disabled>
                      <em>Order By</em>
                    </MenuItem>
                    <ListSubheader>Date</ListSubheader>
                    <MenuItem value={"Newest to Oldest"}>
                      Newest to Oldest
                    </MenuItem>
                    <MenuItem value={"Oldest to Newest"}>
                      Oldest to Newest
                    </MenuItem>
                    <ListSubheader>Price</ListSubheader>
                    <MenuItem value={"Low to High"}>Low to High</MenuItem>
                    <MenuItem value={"High to Low"}>High to Low</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Container>

            <Box
              sx={{
                backgroundColor: "#eee",
                pb: { xs: "20px", sm: "30px", md: "50px" },
              }}
            >
              <Container>
                <Toolbar
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "0.8rem",
                    paddingBlock: "0.5rem",
                    mb: "1.5rem",
                  }}
                >
                  {filtersState.filteredCtgs.map((ctg, i) => (
                    <Chip
                      key={i}
                      color="primary"
                      label={ctg}
                      size="medium"
                      sx={{
                        fontSize: { xs: "0.9rem", sm: "1.025rem" },
                        padding: { xs: "1rem 0rem", sm: "1.05rem 0.1rem" },
                      }}
                      onDelete={(e) =>
                        dispatchFilter({
                          type: "CTG", payload: filtersState.filteredCtgs.filter(
                            (ctg, i) =>
                              ctg !== e.currentTarget.previousSibling.innerText
                          )
                        })
                      }
                    />
                  ))}
                </Toolbar>
                <Heading
                  mb={{ xs: "50px", sm: "70px" }}
                  main="Found"
                  sub1={"Ads"}
                  sub2=""
                />
                <Grid
                  container
                  columnSpacing={{ xs: "1rem", md: "1.5rem" }}
                  rowSpacing={{ xs: "1rem", md: "2rem" }}
                >
                  {" "}
                  {[1, 2, 3, 4, 5, 6].map((ad, i) => {
                    return (
                      <Grid item xs={12} mob={6} sm={12} md={6} lg={4} key={i}>
                        <Ad variant={2} />
                      </Grid>
                    );
                  })}
                </Grid>
                <Pagination
                  count={10}
                  boundaryCount={1}
                  siblingCount={1}
                  color="primary"
                  size="large"
                  shape="rounded"
                  sx={{
                    mt: "3rem",
                    "& .MuiPagination-ul": {
                      justifyContent: "flex-end",
                      gap: { xs: "0rem", sm: "0.8rem" },
                      "& button": {
                        fontSize: { xs: "1rem", sm: "1.2rem" },
                        transform: { xs: "scale(0.)", sm: "scale(1.05)" },
                        backgroundColor: "white",
                        boxShadow: 1,
                        ":hover": {
                          backgoundColor: "rgba(0,0,0,0.9)",
                        },
                        "& svg": { transform: "scale(1.5)" },
                      },
                      ".Mui-selected": { backgroundColor: "primary.main" },
                    },
                  }}
                />
              </Container>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SearchResults;
