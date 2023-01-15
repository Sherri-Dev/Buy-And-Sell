import { IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import useSlider from "../../hooks/useSlider";
import { useEffect } from "react";

const Carousel = ({ items, title, currentSlide=1, btnsOutside }) => {
  const itemRef = useRef();
  const { sliderTranslate,setCurrentSlide, handleClick, disabledForward, disabledBackward } =
    useSlider(itemRef, 3);
useEffect(() => {
  setCurrentSlide(currentSlide)

}, [currentSlide])

  return (
    <Box
      sx={{
        boxShadow: "0 0 2px 0px #575757",
        borderRadius: "3px",
        position: "relative",
      }}
    >
      {btnsOutside && (
        <Stack
          sx={{
            paddingBottom: "0.6rem",
            mb: "0.8rem",
            borderBottom: "1px solid rgba(0,0,0,0.15)",
          }}
          direction="row"
          justifyContent={"space-between"}
        >
          <Typography variant="h6">{title}</Typography>
          <Stack direction={"row"} gap="0.5rem">
            <IconButton
              sx={{ fontSize: "1.3rem" }}
              onClick={() => handleClick(false)}
              disabled={disabledBackward}
            >
              {" "}
              <ArrowBackIosNewRoundedIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              sx={{ fontSize: "1.3rem" }}
              onClick={() => handleClick(true)}
              disabled={disabledForward}
            >
              {" "}
              <ArrowForwardIosRoundedIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </Stack>
      )}
      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          "&:hover": {
            ".MuiIconButton-root.left": { opacity: 1, left: 0 },
            ".MuiIconButton-root.right": { opacity: 1, right: 0 },
          },
        }}
      >
        {!btnsOutside && (
          <>
            <IconButton
              onClick={() => handleClick(false)}
              disabled={disabledBackward}
              sx={{
                position: "absolute",
                top: "50%",
                left: "-5rem",
                opacity: 0,
                transition: "all 0.3s ease-in",
                transform: "translateY(-50%)",
                zIndex: 1,
                "&:hover": {
                  color: "black",
                },
                "&:focus": {
                  color: "black",
                },
              }}
              className="left"
            >
              <ArrowBackIosNewRoundedIcon sx={{ fontSize: "2.5rem" }} />
            </IconButton>
            <IconButton
              onClick={() => handleClick(true)}
              disabled={disabledForward}
              sx={{
                position: "absolute",
                top: "50%",
                right: "-5rem",
                opacity: 0,
                transition: "all 0.3s ease-in",
                transform: "translateY(-50%)",
                zIndex: 1,
                "&:hover": {
                  color: "black",
                },
                "&:focus": {
                  color: "black",
                },
              }}
              className="right"
            >
              <ArrowForwardIosRoundedIcon sx={{ fontSize: "2.5rem" }} />
            </IconButton>
          </>
        )}
        <Stack
          direction="row"
          sx={{
            transform: `translateX(-${sliderTranslate}px)`,
            transition: "transform 0.3s ease-in",
          }}
        >
          {items.map((item, i) => {
            return (
              <div
                style={{ flexShrink: 0, flexBasis: "100%" }}
                ref={itemRef}
                key={i}
              >
                {item}
              </div>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default Carousel;
