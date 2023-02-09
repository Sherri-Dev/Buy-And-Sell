import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import React from "react";
import { forwardRef } from "react";
import ReactHtmlParser from "react-html-parser";
const Btn = forwardRef(({ text, sx, iconPath, iconPos = "left", ...props }, ref) => {
  return (
    <Button
      {...props}
      sx={sx}
      startIcon={iconPos === "left" && iconPath &&
        <SvgIcon sx={{ mr: "-6px" }}>
          {ReactHtmlParser(iconPath)}
        </SvgIcon>}
      endIcon={iconPos === "right" && iconPath && <SvgIcon>
        {ReactHtmlParser(iconPath)}
      </SvgIcon>}
      ref={ref}
    >
      {text}
    </Button>
  );
});

export default Btn;
