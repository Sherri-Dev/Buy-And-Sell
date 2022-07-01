import {
  Box,
  Chip,
  Drawer,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListSubheader,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Btn from "../../components/Btn";
import RangeSlider from "./RangeSlider";
import RadioComponent from "./RadioComponent";
import FilterTab from "./FilterTab";
import SearchBox from "../../components/SearchBox";
import Categories from "../../components/Categories";
import AdSlider from "./AdSlider";

const SearchResults = ({ headerHeight }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const drawerWidth = 350;

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
        <Box sx={{ display: "flex", flexDirection: "row" }}>
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
                p: `${headerHeight - 20}px 0px`,
                zIndex: -1,
              },
            }}
          >
            <Toolbar />
            <List>
              <ListSubheader
                sx={{ fontSize: "22px", fontWeight: "600", color: "black" }}
              >
                Search Filters
              </ListSubheader>
              <FilterTab title={"Ad Search"} element={<SearchBox />} />
              <FilterTab title={"Ad Categories"} element={<Categories />} />
              <FilterTab title={"Ad Price"} element={<RangeSlider />} />
              <FilterTab
                title={"Ad Type"}
                element={<RadioComponent items={["Male", "Female"]} />}
              />
              <FilterTab
                title={"Warranty"}
                element={<RadioComponent items={["Yes", "No"]} />}
              />
              <FilterTab
                title={"Condition"}
                element={<RadioComponent items={["New", "Used"]} />}
              />
              <FilterTab title={"Location"} element={<SearchBox />} />
            </List>
            <AdSlider />
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
              <FilterTab title={"Ad Search"} element={<SearchBox />} />
              <FilterTab title={"Ad Categories"} element={<Categories />} />
              <FilterTab title={"Ad Price"} element={<RangeSlider />} />
              <FilterTab
                title={"Ad Type"}
                element={<RadioComponent items={["Male", "Female"]} />}
              />
              <FilterTab
                title={"Warranty"}
                element={<RadioComponent items={["Yes", "No"]} />}
              />
              <FilterTab
                title={"Condition"}
                element={<RadioComponent items={["New", "Used"]} />}
              />
              <FilterTab title={"Location"} element={<SearchBox />} />
            </List>
            <AdSlider />
          </Drawer>
          <Box sx={{ width: "100%" }}>
            <Stack
              sx={{
                padding: "15px 20px",
                boxShadow: "1px 0px 3px 3px #eee",
              }}
              direction="row"
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Typography varia>Ads Foud: 17</Typography>
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
            {/* <Box sx={{ backgroundColor: "#eee" }}>Hello</Box> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SearchResults;
