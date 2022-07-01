import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchBox = () => {
  return (
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
  );
};

export default SearchBox;
