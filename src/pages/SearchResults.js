import {
  Box,
  Button,
  Collapse,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  TextField,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import TopBar from "../components/TopBar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SearchIcon from "@mui/icons-material/Search";

const SearchResults = ({ headerHeight }) => {
  const drawerWidth = 250;
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
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: `${drawerWidth}px`,
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
            {searchFilters.map((item, i) => (
              <FilterTab title={item.main} key={i} element={item.sub} />
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  );
};

const FilterTab = ({ title, element }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{ backgroundColor: open && "rgba(0,0,0,0.05)" }}
      >
        <ListItemText primary={title} />
        {open ? <RemoveIcon /> : <AddIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ p: "5px 10px 5px 15px" }}>
          <ListItemText primary={element} />
        </List>
      </Collapse>
    </>
  );
};
const searchFilters = [
  {
    main: "Ad Search",
    sub: (
      <TextField
        variant="outlined"
        InputProps={{
          sx: { paddingRight: "0px", height: "2.8rem" },
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{ height: "100%", maxHeight: "100%" }}
            >
              <IconButton
                sx={{
                  color: "black",
                  backgroundColor: "primary.main",
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                  borderBottomLeftRadius: "0px",
                  borderTopLeftRadius: "0px ",
                  height: "100%",
                  zIndex: 1,
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                <SearchIcon />{" "}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    ),
  },
  { main: "Ad Search" },
  { main: "Ad Search" },
  { main: "Ad Search" },
  { main: "Ad Search" },
  { main: "Ad Search" },
  { main: "Ad Search" },
];
export default SearchResults;
