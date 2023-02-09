import React, { useContext, useEffect, useRef, useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FiltersContext } from "../../contexts/filtersContext";
import { Box } from "@mui/system";

const SearchBox = ({ type }) => {
  const { state: filtersState, dispatch: dispatchFilter } =
    useContext(FiltersContext);
  const textInpRef = useRef(null);
  const locInpRef = useRef(null);
  const handleChange = (e) => {
    type === "text"
      ? textInpRef.current.value = e.target.value
      : locInpRef.current.value = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    type === "text"
      ? dispatchFilter({ type: "TEXT", payload: textInpRef.current.value })
      : dispatchFilter({ type: "LOC", payload: locInpRef.current.value });
    console.log(filtersState)
  }
  useEffect(() => {
    if (type === "text" && textInpRef.current) {
      textInpRef.current.value = filtersState.searchText;
    } else if (locInpRef.current) {
      locInpRef.current.value = filtersState.searchLoc
    }

  }, [])
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        sx={{ width: "100%" }}
        inputRef={type === "text" ? textInpRef : locInpRef}
        InputProps={{
          onChange: handleChange,

          value: type === "text" ? textInpRef.current?.value : textInpRef.current?.value,
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
                type="submit"
              >
                <SearchIcon />{" "}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBox;
