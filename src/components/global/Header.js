import React, { useMemo } from "react";
import {
  AppBar,
  Fab,
  IconButton,
  Stack,
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
import Btn from "../shared/Btn";
import useFetch from "../../hooks/useFetch";
import { getSiteIdentity } from "../../helpers/formatApi";

const Header = ({ setHeaderHeight, transparent }) => {
  const header = useRef();
  const backToTop = useRef();
  const { data, err, isLoading } = useFetch("http://localhost:1337/api/header?populate=deep")
  useEffect(() => {
    setHeaderHeight(header.current.clientHeight);
    // eslint-disable-next-line
  }, []);
  const menu = data?.panels.find(obj => obj.menu)?.menu?.data?.attributes;
  const siteIdentity = data?.panels.find(obj => obj.config)?.config?.data?.attributes?.siteIdentity
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
          backgroundColor: `${transparent ? "transparent" : "#575757"}`,
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
              {siteIdentity?.siteTitle}
            </Typography>
            <Stack flexGrow={0} sx={{ ml: { sm: "auto" } }} flexDirection="row" gap="10px">
              {menu?.links.map((link) => {
                return link.type === "anchor" ? <Tooltip title={link.label} placement="top-start" arrow>
                  <IconButton
                    sx={{
                      backgroundColor: `${link?.themeSelector?.theme}.main`,
                      color: "white",
                      "&:hover": { backgroundColor: `${link?.themeSelector?.theme}.dark` },
                    }}
                    href={link.href}
                    target={link.target}
                  >
                    {link.href === "login" ?
                      <LoginIcon
                        sx={{ fontSize: { xs: "1.35rem", mob: "1.55rem" } }}
                      />
                      : link.href === "register" ? <LockOpenIcon sx={{ fontSize: { xs: "1.35rem", mob: "1.55rem" } }} /> : null}
                  </IconButton>
                </Tooltip> :
                  <Btn
                    text={link.label}
                    sx={{
                      fontSize: { xs: "0.9em", mob: "1rem" },
                      padding: { xs: "6px 16px", mob: "7px 22px" },
                      borderRadius: "999px",
                      gap: 0,
                    }}
                    startIcon={<AddIcon sx={{ mr: "-6px" }} />}
                    variant="contained"
                  />
              })}

            </Stack>
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
