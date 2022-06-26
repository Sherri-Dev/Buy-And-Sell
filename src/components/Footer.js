import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  return (
    <Box
      component={"section"}
      sx={{
        backgroundColor: "#2F2F2F",
      }}
    >
      <Container sx={{ paddingBlock: { xs: "40px", sm: "60px" } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={{ xs: "2rem", sm: "1rem" }}
        >
          <Box sx={{ flexBasis: { sm: "100%" } }}>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              sx={{ mb: { xs: "1rem", sm: "1rem" }, color: "white" }}
            >
              Buy and Sell
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.9rem", mb: "1rem" },
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              id quibusdam delectus autem in nihil modi incidunt vitae, dolores
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", mb: "1.1rem" },
                fontWeight: "500",
                color: "white",
                mt: "1rem",
              }}
            >
              Follow us
            </Typography>
            <Stack direction={"row"} gap="0.5rem" mt={"0.5rem"}>
              <IconButton
                href={"https://mnkdev.web.app"}
                target="_blank"
                sx={{ padding: "0" }}
              >
                <FacebookIcon
                  color="primary"
                  sx={{
                    fontSize: "2rem",
                    "&:hover": { color: "primary.dark" },
                  }}
                />
              </IconButton>
              <IconButton
                href={"https://mnkdev.web.app"}
                target="_blank"
                sx={{ padding: "0" }}
              >
                <LinkedInIcon
                  color="primary"
                  sx={{
                    fontSize: "2rem",
                    "&:hover": { color: "primary.dark" },
                  }}
                />
              </IconButton>
              <IconButton
                href={"https://mnkdev.web.app"}
                target="_blank"
                sx={{ padding: "0", mx: "2px" }}
              >
                <TwitterIcon
                  color="secondary"
                  sx={{
                    fontSize: "1.58rem",
                    backgroundColor: "primary.main",
                    borderRadius: "4px",
                    padding: "1px",
                    "&:hover": { backgroundColor: "primary.dark" },
                  }}
                />
              </IconButton>
            </Stack>
          </Box>
          <Stack
            direction="row"
            sx={{ flexBasis: "100%" }}
            gap={{ xs: "0rem", mb: "1rem" }}
            justifyContent={{ xs: "space-between", mb: "start" }}
          >
            {" "}
            <Box sx={{ flexBasis: { sm: "100%" } }}>
              <List
                sx={{
                  paddingTop: 0,
                  li: { paddingInline: 0 },

                  ".MuiListItemButton-root": {
                    paddingInline: 0,
                    color: "text.secondary",
                    fontFamily: "Poppins",
                    fontSize: { xs: "1rem", mb: "1.1rem" },
                  },
                }}
              >
                <ListSubheader
                  sx={{
                    backgroundColor: "transparent.main",
                    color: "white",
                    fontSize: { xs: "1rem", mb: "1.2rem" },
                    lineHeight: "normal",
                    marginBottom: "0.6rem",
                  }}
                >
                  Categories
                </ListSubheader>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      color: "#979797",
                      fontFamily: "Poppins",
                      fontSize: { xs: "1rem", mb: "1.1rem" },
                    }}
                  >
                    Animals
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      color: "#979797",
                      fontFamily: "Poppins",
                      fontSize: { xs: "1rem", mb: "1.1rem" },
                    }}
                  >
                    Animals
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      color: "#979797",
                      fontFamily: "Poppins",
                      fontSize: { xs: "1rem", mb: "1.1rem" },
                    }}
                  >
                    Animals
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      color: "#979797",
                      fontFamily: "Poppins",
                      fontSize: { xs: "1rem", mb: "1.1rem" },
                    }}
                  >
                    Animals
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
            <Box sx={{ flexBasis: { sm: "100%" } }}>
              <List
                sx={{
                  paddingTop: 0,
                  ".MuiListItemButton-root": {
                    color: "text.secondary",
                    fontFamily: "Poppins",
                    fontSize: { xs: "1rem", mb: "1.1rem" },
                  },
                }}
              >
                <ListSubheader
                  sx={{
                    backgroundColor: "transparent.main",
                    color: "white",
                    fontSize: { xs: "1rem", mb: "1.2rem" },
                    lineHeight: "normal",
                    marginBottom: "0.6rem",
                  }}
                >
                  Quick Links
                </ListSubheader>
                <ListItem disablePadding>
                  <ListItemButton>Register</ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>Login</ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Stack>
      </Container>
      <Divider sx={{ backgroundColor: "#575757" }} />
      <Container sx={{ width: "fit-content", margin: "auto" }}>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            color: "#979797",
            paddingBlock: "5px",
            fontSize: { xs: "0.85rem", mb: "1rem" },
          }}
        >
          Copyright 2021
          <CopyrightIcon
            sx={{
              mx: { xs: "0.15rem", sm: "0.3rem" },
              fontSize: { xs: "1rem" },
            }}
          />
          Made with{" "}
          <FavoriteIcon
            sx={{
              mx: { xs: "0.15rem", sm: "0.3rem" },
              fontSize: { xs: "1rem" },
            }}
          />{" "}
          by{" "}
          <Button
            sx={{ mx: "0.1rem", fontSize: { xs: "0.85rem", mb: "1rem" } }}
            href="https://mnkdev.web.app"
            target="_blank"
          >
            MNK Dev
          </Button>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
