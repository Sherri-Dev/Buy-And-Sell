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
import Heading from "./Heading";
import { Container } from "@mui/material";

const Work = () => {
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
  return (
    <Container>
      <Box
        component="section"
        sx={{ padding: { xs: "20px 0 40px 0 ", sm: "25px 0 60px 0" } }}
      >
        <Heading
          main="Works"
          sub1={"It"}
          sub2="As"
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
                sx={{ padding: { xs: "0.6rem", mb: "0.8rem" } }}
              >
                <PersonAddAlt1Icon
                  sx={{ fontSize: { xs: "1.8rem", mb: "2.2rem" } }}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1rem", mb: "1.1rem", sm: "1.3rem" } }}
                component="span"
              >
                Create Your Account
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "0.85rem", mb: "0.95rem", sm: "1rem" } }}
              >
                Create an Account to get started!
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
                sx={{ padding: { xs: "0.6rem", mb: "0.8rem" } }}
              >
                <PostAddIcon
                  sx={{ fontSize: { xs: "1.8rem", mb: "2.2rem" } }}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1rem", mb: "1.1rem", sm: "1.3rem" } }}
                component="span"
              >
                Post Ad
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "0.85rem", mb: "0.95rem", sm: "1rem" } }}
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
                sx={{ padding: { xs: "0.6rem", mb: "0.8rem" } }}
              >
                <HandshakeIcon
                  sx={{ fontSize: { xs: "1.8rem", mb: "2.2rem" } }}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1rem", mb: "1.1rem", sm: "1.3rem" } }}
                component="span"
              >
                Deal Done
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "0.85rem", mb: "0.95rem", sm: "1rem" } }}
              >
                Buyers will contact you and the deal will be done!
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Container>
  );
};

export default Work;
