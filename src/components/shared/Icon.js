import { SvgIcon } from "@mui/material";
import React from "react";
import { useMemo } from "react";
import ReactHtmlParser from "react-html-parser";

const Icon = ({ list, name, ...rest }) => {
  const icon = useMemo(() => list?.find(item => item.attributes.name == name)?.attributes.path, [list, name]);
  return (
    <SvgIcon {...rest}>
      {ReactHtmlParser(
        icon
      )}
    </SvgIcon>
  );
};

export default Icon;
