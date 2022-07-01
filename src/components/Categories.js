import { ListItem, ListItemButton } from "@mui/material";
import React from "react";
import ctgs from "../ctgs.json";

const Categories = () => {
  return (
    <>
      {ctgs.map((ctg, i) => (
        <ListItem disablePadding key={i}>
          <ListItemButton
            sx={{
              color: "#979797",
              fontFamily: "Poppins",
              fontSize: { xs: "1rem", mb: "1.1rem" },
            }}
          >
            {ctg}
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
};

export default Categories;
