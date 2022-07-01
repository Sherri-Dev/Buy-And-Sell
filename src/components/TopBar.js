import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Box, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useTheme } from "@emotion/react";

const breadcrumbNameMap = {
  "/search-results": " Search Results",
};

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const TopBar = ({ sx }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "#eee",
        boxShadow: 1,
        color: "white",
        padding: "0.5rem 0",
        flexGrow: 1,
        zIndex: theme.zIndex.drawer + 100,
      }}
    >
      <Container>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ color: "black", fontSize: { xs: "14px", sm: "16px" } }}
        >
          <LinkRouter underline="hover" sx={{ color: "text.secondary" }} to="/">
            Home
          </LinkRouter>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;

            return last ? (
              <Typography color="inherit" key={to} fontSize="inherit">
                {" "}
                {breadcrumbNameMap[to]}
              </Typography>
            ) : (
              <LinkRouter
                underline="hover"
                color="inherit"
                fontSize="inherit"
                to={to}
                key={to}
              >
                {" "}
                {breadcrumbNameMap[to]}
              </LinkRouter>
            );
          })}
        </Breadcrumbs>
      </Container>
    </Box>
  );
};

export default TopBar;
