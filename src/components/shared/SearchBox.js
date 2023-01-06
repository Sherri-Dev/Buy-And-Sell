import React, { useContext } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FiltersContext } from "../../contexts/filtersContext";

const SearchBox = ({ type }) => {
  const { state: filtersState, dispatch: dispatchFilter } =
    useContext(FiltersContext);

  const handleChange = (e) => {
    type === "text"
      ? dispatchFilter({ type: "TEXT", payload: e.target.value })
      : dispatchFilter({ type: "LOC", payload: e.target.value });
  };

  return (
    <TextField
      variant="outlined"
      sx={{ width: "100%" }}
      InputProps={{
        onChange: handleChange,
        value: type === "text" ? filtersState.searchText : filtersState.searchLoc,
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
  );
};

export default SearchBox;
