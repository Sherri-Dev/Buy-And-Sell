import { IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import Ad from "../../components/global/Ad";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import useSlider from "../../hooks/useSlider";
import useFetch from "../../hooks/useFetch";

const AdSlider = ({ title, url, content, variant = 1 }) => {
  const { data} = useFetch(!content && url);
  content =
    content?.category.data.attributes.ads.data || (data?.length && data);
  const adRef = useRef();
  const { sliderTranslate, handleClick, disabledForward, disabledBackward } =
    useSlider(adRef, content?.length || 1,16);
  return (
    <Box
      sx={{
        p: "10px",
        m: "20px 10px",
        boxShadow: "0 0 2px 0px #575757",
        borderRadius: "3px",
        position: "relative",
      }}
    >
      <Stack
        sx={{
          paddingBottom: "0.6rem",
          mb: "0.8rem",
          borderBottom: "1px solid rgba(0,0,0,0.15)",
        }}
        direction="row"
        justifyContent={"space-between"}
      >
        <Typography variant="h6">{content?.title || title}</Typography>
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
            transition: "transform 0.3s ease-in",
            gap: "1rem",
          }}
        >
          {content?.map((ad) => (
            <div
              style={{ flexShrink: 0, width: "100%" }}
              ref={adRef}
              key={ad.id}
            >
              <Ad
                content={ad.attributes}
                variant={variant}
                size="small"
                borderRadius={"3px"}
                elevation={0}
              />
            </div>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default AdSlider;
