import React from "react";
import {
  AppBar,
  Button,
  Fab,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";
import { Box, Container } from "@mui/system";
import { useRef } from "react";
import { useEffect } from "react";
import { useTheme } from "@emotion/react";
import Btn from "./Btn";

const Header = ({ setHeaderHeight, transparent }) => {
  const header = useRef();
  const backToTop = useRef();
  useEffect(() => {
    setHeaderHeight(header.current.clientHeight);
    // eslint-disable-next-line
  }, []);
  const theme = useTheme();

  window.onscroll = () => {
    if (window.scrollY > header.current.clientHeight) {
      header.current.classList.add("scrolled-show-header");
      backToTop.current.classList.add("scrolled-show-backToTop-btn");
      return;
    }
    header.current.classList.remove("scrolled-show-header");
    backToTop.current.classList.remove("scrolled-show-backToTop-btn");
  };
  return (
    <>
      <AppBar
        color={transparent ? "transparent" : "transparent"}
        sx={{
          padding: "0.7rem 0",
          borderBottom: "grey 1px solid",
          transition: "background-color 0.5s ease",
          backgroundColor: `${transparent ? "transparent" : "secondary.main"}`,
          position: "fixed",
          top: 0,
          zIndex: theme.zIndex.drawer + 1,
        }}
        ref={header}
        elevation={0}
      >
        <Container>
          <Toolbar
            component={"nav"}
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              fontWeight={"bold"}
              sx={{
                mb: { xs: 2, sm: 0 },
                color: `${transparent ? "white" : "white"}`,
              }}
            >
              Buy and Sell
            </Typography>
            <Box flexGrow={0} sx={{ ml: { sm: "auto" } }}>
              <Tooltip title="Login" placement="top-start" arrow>
                <IconButton
                  sx={{
                    backgroundColor: "info.main",
                    color: "white",
                    "&:hover": { backgroundColor: "info.dark" },
                  }}
                >
                  <LoginIcon
                    sx={{ fontSize: { xs: "1.35rem", mb: "1.55rem" } }}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip
                title="Register"
                placement="top-start"
                arrow
                sx={{ backgroundColor: "black" }}
              >
                <IconButton
                  sx={{
                    backgroundColor: "success.main",
                    color: "white",
                    marginInline: 2,
                    "&:hover": { backgroundColor: "success.dark" },
                  }}
                >
                  <LockOpenIcon
                    sx={{ fontSize: { xs: "1.35rem", mb: "1.55rem" } }}
                  />
                </IconButton>
              </Tooltip>
              <Btn
                text={"Post Ad"}
                sx={{
                  fontSize: { xs: "0.9em", mb: "1rem" },
                  padding: { xs: "6px 16px", mb: "7px 22px" },
                  borderRadius: "999px",
                  gap: 0,
                }}
                startIcon={<AddIcon sx={{ mr: "-6px" }} />}
                variant="contained"
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Fab
        color="primary"
        aria-label="back to top"
        variant={"circular"}
        sx={{
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          display: "none",
        }}
        size="medium"
        ref={backToTop}
        onClick={() => document.body.scrollIntoView({ behavior: "smooth" })}
      >
        <KeyboardArrowUpIcon sx={{ fontSize: "1.8rem" }} />
      </Fab>
    </>
  );
};
export default Header;
