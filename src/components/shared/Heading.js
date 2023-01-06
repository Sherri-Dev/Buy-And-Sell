import { Typography } from "@mui/material";
import React from "react";

const Heading = ({ title, mb }) => {
  const [sub1, main, sub2] = title && title?.split(" ");
  return (
    <Typography
      variant="h2"
      textAlign={"center"}
      color="secondary"
      sx={{
        fontWeight: "500",
        fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
        marginBottom: mb,
        position: "relative",
        width: "fit-content",
        mx: "auto",
        "&:before": {
          content: `''`,
          position: "absolute",
          bottom: "-1rem",
          left: "50%",
          width: "50%",
          height: "1px",
          backgroundColor: "#a9a9a9",
          transform: "translateX(-55%)",
        },
        "&:after": {
          content: `''`,
          position: "absolute",
          bottom: "-1.5rem",
          left: "50%",
          width: "20%",
          height: "1px",
          backgroundColor: "#a9a9a9",
          transform: "translateX(-55%)",
        },
      }}
    >
      {sub1}{" "}
      <Typography
        variant="h2"
        color="primary"
        component={"span"}
        sx={{ fontWeight: "inherit", fontSize: "inherit" }}
      >
        {main}{" "}
      </Typography>{" "}
      {sub2}
    </Typography>
  );
};

export default Heading;
