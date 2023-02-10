import React, { useContext, useRef } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FiltersContext } from "../../contexts/filtersContext";
import { Box } from "@mui/system";

const SearchBox = ({ type }) => {
  const { state: filtersState, dispatch: dispatchFilter } =
    useContext(FiltersContext);
  const textInpRef = useRef({ current: { value: filtersState.searchText } });
  const locInpRef = useRef({ current: { value: filtersState.searchLoc } });
  const handleSubmit = (e) => {
    e.preventDefault();
    type === "text"
      ? dispatchFilter({ type: "TEXT", payload: textInpRef.current.value })
      : dispatchFilter({ type: "LOC", payload: locInpRef.current.value });
  }
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        sx={{ width: "100%" }}
        inputRef={type === "text" ? textInpRef : locInpRef}
        InputProps={{
          placeholder: type === "text" ? filtersState.searchText : filtersState.searchLoc,
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
