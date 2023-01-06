import { Button } from "@mui/material";
import React from "react";

const Btn = ({ text, sx, ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        ...sx,
        "&:hover": {
          backgroundColor: "secondary.main",
          color: "white",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default Btn;
