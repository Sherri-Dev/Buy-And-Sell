import { IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Ad from "../../components/Ad";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useRef } from "react";
import { useState } from "react";

const AdSlider = () => {
  const adRef = useRef();
  const [sliderTranslate, setSliderTranslate] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [disabledForward, setDisabledForward] = useState(false);
  const [disabledBackward, setDisabledBackward] = useState(false);

  const totalSlides = 3;

  const handleClick = (forward) => {
    setDisabledBackward(false);
    if (currentSlide < totalSlides && forward) {
      setDisabledForward(() => currentSlide === totalSlides - 1);
      setSliderTranslate(
        () =>
          `${Number(sliderTranslate) + Number(adRef.current.clientWidth) + 16}`
      );
      setCurrentSlide(() => currentSlide + 1);
    } else if (currentSlide > 1 && !forward) {
      setDisabledForward(false);
      setDisabledBackward(() => currentSlide === 2);
      setSliderTranslate(
        () =>
          `${Number(sliderTranslate) - Number(adRef.current.clientWidth) - 16}`
      );
      setCurrentSlide(() => currentSlide - 1);
    }
  };

  return (
    <Box
      sx={{
        p: "10px",
        m: "20px 10px",
        boxShadow: "0 0 3px 0px #575757",
        borderRadius: "3px",
        position: "relative",
      }}
    >
      <Stack
        sx={{ mb: "1rem" }}
        direction="row"
        justifyContent={"space-between"}
      >
        <Typography variant="h6">Featured Ads</Typography>
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
      <Box sx={{ overflow: "hidden" }}>
        <Stack
          direction="row"
          sx={{
            transform: `translateX(-${sliderTranslate}px)`,
            transition: "transform 0.5s ease-in",
            gap: "1rem",
          }}
        >
          <div style={{ flexShrink: 0, width: "100%" }} ref={adRef}>
            <Ad variant={1} size="small" borderRadius={"0px"} elevation={0} />
          </div>
          <div style={{ flexShrink: 0, width: "100%" }} ref={adRef}>
            <Ad variant={1} size="small" borderRadius={"0px"} elevation={0} />
          </div>
          <div style={{ flexShrink: 0, width: "100%" }} ref={adRef}>
            <Ad variant={1} size="small" borderRadius={"0px"} elevation={0} />
          </div>
        </Stack>
      </Box>
    </Box>
  );
};

export default AdSlider;
