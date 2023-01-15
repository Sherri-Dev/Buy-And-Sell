import { Button } from "@mui/material";
import React from "react";
import { forwardRef } from "react";

const Btn = forwardRef(({ text, sx, ...props },ref) => {
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
      ref={ref}
    >
      {text}
    </Button>
  );
});

export default Btn;
