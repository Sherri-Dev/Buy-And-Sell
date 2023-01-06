import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/system";
import { Box } from "@mui/system";
import Heading from "../components/shared/Heading";
import { Container } from "@mui/material";
import { isEven } from "../helpers";
import useCustomizer from "../hooks/useCustomizer";

const Work = ({ content }) => {
  const fillUp = keyframes`  
from {
  width:0
}
to {
  width:"50rem"
}`;
  const fillUpHeight = keyframes`  
from {
  height:0;
}
to {
  height:"100%";
}`;
  const { theme } = useCustomizer();

  const pallete = theme?.pallete;
  return (
    <Container>
      <Box
        component="section"
        sx={{ padding: { xs: "20px 0 40px 0 ", sm: "25px 0 60px 0" } }}
      >
        <Heading
          title={content?.title}
          mb={{ xs: "50px", sm: "70px" }}
        />
        <Timeline
          position={window.innerWidth > 600 ? "alternate" : "right"}
          sx={{
            ".MuiTimelineItem-root:before": {
              display: { xs: "none", sm: "block" },
            },
            ".MuiTimelineConnector-root": { height: "1rem" },
            ".MuiTimelineContent-root": {
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            },
          }}
        >
          {content?.items?.map((item, i) => {
            return (<TimelineItem
              key={i}
              sx={{
                overflow: "hidden",
                ".MuiTimelineDot-root:before": {
                  position: "absolute",
                  content: `''`,
                  top: 0,
                  left: isEven(i) ? 0 : "auto",
                  right: isEven(i) ? "auto" : 0,
                  backgroundColor: "white",
                  transition: "all 0.3s ease-in",
                  transitionDelay: "0.5s",
                },
                ":hover": {
                  color: "white",
                  cursor: "pointer",
                  ".MuiTimelineSeparator-root": { position: "relative" },
                  ".MuiTimelineDot-root:before": {
                    width: "50rem",
                    height: "100%",
                    backgroundColor: `${pallete?.[!isEven(i) ? "secondary" : "primary"]?.main}`,
                    animation: `${fillUp} 0.5s ease-in forwards`,
                    animationDelay: "0.3s",
                    zIndex: -1,
                  },
                  ".MuiTimelineDot-root:after": {
                    position: "absolute",
                    content: `''`,
                    top: 0,
                    left: isEven(i) ? { xs: 0, sm: "-1rem" } : "auto",
                    right: isEven(i) ? "auto" : { xs: 0, sm: "-1rem" },
                    width: "1rem",
                    height: "100%",
                    backgroundColor: `${pallete?.[isEven(i) ? "secondary" : "primary"]?.main}`,
                    animation: `${fillUpHeight} 0.25s ease-in forwards`,
                    borderTopLeftRadius: isEven(i) ? "5px" : 0,
                    borderBottomLeftRadius: isEven(i) ? "5px" : 0,
                    borderTopRightRadius: isEven(i) ? 0 : "5px",
                    borderBottomRightRadius: !isEven(i) ? 0 : "5px",
                    zIndex: -1,
                  },
                  ".MuiTimelineDot-root": {
                    color: `${pallete?.[!isEven(i) ? "primary" : "secondary"]?.main}`,
                    backgroundColor: "white",
                  },
                  ".css-1hrnx5o-MuiTypography-root-MuiTimelineContent-root": {
                    color: `${isEven(i) ? pallete?.secondary?.main : "white"}`,
                  },
                },
              }}
            >
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                  color="secondary"
                  sx={{ padding: { xs: "0.6rem", mob: "0.8rem" } }}
                >
                  <PersonAddAlt1Icon
                    sx={{ fontSize: { xs: "1.8rem", mob: "2.2rem" } }}
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: "1rem", mob: "1.1rem", sm: "1.3rem" } }}
                  component="span"
                >
                  {item?.title}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "0.85rem", mob: "0.95rem", sm: "1rem" } }}
                >
                  {item?.subTitle}
                </Typography>
              </TimelineContent>
            </TimelineItem>

            )
          })}
          {/* <TimelineItem
            sx={{
              overflow: "hidden",
              ".MuiTimelineDot-root:before": {
                position: "absolute",
                content: `''`,
                top: 0,
                right: { xs: "auto", sm: 0 },
                backgroundColor: "white",
                transition: "all 0.3s ease-in",
                transitionDelay: "0.5s",
              },
              ":hover": {
                color: "primary.main",
                cursor: "pointer",
                ".MuiTimelineSeparator-root": { position: "relative" },
                ".MuiTimelineDot-root:before": {
                  width: "50rem",
                  height: "100%",
                  backgroundColor: "secondary.main",
                  animation: `${fillUp} 0.5s ease-in forwards`,
                  animationDelay: "0.3s",
                  zIndex: -1,
                },
                ".MuiTimelineDot-root:after": {
                  position: "absolute",
                  content: `''`,
                  top: 0,
                  left: { xs: "0rem", sm: "auto" },
                  right: { xs: "auto", sm: "-1rem" },
                  width: "1rem",
                  height: "100%",
                  backgroundColor: "primary.main",
                  animation: `${fillUpHeight} 0.25s ease-in forwards`,
                  borderTopRightRadius: { xs: 0, sm: "5px" },
                  borderBottomRightRadius: { xs: 0, sm: "5px" },
                  borderTopLeftRadius: { xs: "5px", sm: 0 },
                  borderBottomLeftRadius: { xs: "5px", sm: 0 },
                  zIndex: -1,
                },
                ".MuiTimelineDot-root": {
                  color: "primary.main",
                  backgroundColor: "#575757",
                },
                ".css-1hrnx5o-MuiTypography-root-MuiTimelineContent-root": {},
              },
            }}
          >
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot
                color="primary"
                sx={{ padding: { xs: "0.6rem", mob: "0.8rem" } }}
              >
                <PostAddIcon
                  sx={{ fontSize: { xs: "1.8rem", mob: "2.2rem" } }}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1rem", mob: "1.1rem", sm: "1.3rem" } }}
                component="span"
              >
                Post Ad
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "0.85rem", mob: "0.95rem", sm: "1rem" } }}
              >
                Posting Ad is completely FREE!
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem
            sx={{
              overflow: "hidden",
              ".MuiTimelineDot-root:before": {
                position: "absolute",
                content: `''`,
                top: 0,
                left: 0,
                backgroundColor: "white",
                transition: "all 0.3s ease-in",
                transitionDelay: "0.5s",
              },
              ":hover": {
                color: "white",
                cursor: "pointer",
                ".MuiTimelineSeparator-root": { position: "relative" },
                ".MuiTimelineDot-root:before": {
                  width: "50rem",
                  height: "100%",
                  backgroundColor: "primary.main",
                  animation: `${fillUp} 0.5s ease-in forwards`,
                  animationDelay: "0.3s",
                  zIndex: -1,
                },
                ".MuiTimelineDot-root:after": {
                  position: "absolute",
                  content: `''`,
                  top: 0,
                  left: { xs: 0, sm: "-1rem" },
                  width: "1rem",
                  height: "100%",
                  backgroundColor: "secondary.main",
                  animation: `${fillUpHeight} 0.25s ease-in forwards`,
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  zIndex: -1,
                },
                ".MuiTimelineDot-root": {
                  color: "secondary.main",
                  backgroundColor: "white",
                },
                ".css-1hrnx5o-MuiTypography-root-MuiTimelineContent-root": {
                  color: "black",
                },
              },
            }}
          >
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot
                color="secondary"
                sx={{ padding: { xs: "0.6rem", mob: "0.8rem" } }}
              >
                <HandshakeIcon
                  sx={{ fontSize: { xs: "1.8rem", mob: "2.2rem" } }}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1rem", mob: "1.1rem", sm: "1.3rem" } }}
                component="span"
              >
                Deal Done
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "0.85rem", mob: "0.95rem", sm: "1rem" } }}
              >
                Buyers will contact you and the deal will be done!
              </Typography>
            </TimelineContent>
          </TimelineItem> */}
        </Timeline>
      </Box>
    </Container>
  );
};

export default Work;
