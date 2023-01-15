import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import CopyrightIcon from "@mui/icons-material/Copyright";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoadPage from "../../helpers/LoadPage";
import footerSchema from "../../helpers/footerSchema";

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
          gap={{ xs: "2rem", sm: "3rem" }}
          justifyContent="center"
        >
          <LoadPage
            url={`${process.env.REACT_APP_API_URL}/footer?populate=deep`}
            schema={footerSchema}
          />
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
          Copyright {new Date().getFullYear()}
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
