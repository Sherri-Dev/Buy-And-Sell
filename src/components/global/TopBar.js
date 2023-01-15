import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink, useLocation, useParams } from "react-router-dom";
import { Box, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useTheme } from "@emotion/react";

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const TopBar = ({ sx }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const params = useParams();
  const theme = useTheme();
  const breadcrumbNameMap = (slug) => ({
    "search-results": " Search Results",
    "ads":"Ads",
    [`ads/${slug}`]: `${slug}`,
  });

  return (
    <Box
      sx={{
        backgroundColor: "#eee",
        color: "white",
        padding: "0.5rem 0",
        flexGrow: 1,
        zIndex: theme.zIndex.drawer + 100,
      }}
    >
      <Container>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ color: "secondary.main",  fontSize: { xs: "14px", sm: "16px" } }}
        >
          <LinkRouter underline="hover" sx={{ color: "inherit","&:hover":{color:'primary.main'} }} to="/">
            Home
          </LinkRouter>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `${pathnames.slice(0, index + 1).join("/")}`;
            return last ? (
              <Typography sx={{color:'gray'}} key={to} fontSize="inherit">
                {breadcrumbNameMap(params.slug)[to]}
              </Typography>
            ) : (
              <LinkRouter
                underline="hover"
                color="inherit"
                fontSize="inherit"

        sx={{"&:hover":{color:'primary.main'}}}
                to={`/${to}`}
                key={to}
              >
                {" "}
                {breadcrumbNameMap(params.slug)[to]}
              </LinkRouter>
            );
          })}
        </Breadcrumbs>
      </Container>
    </Box>
  );
};

export default TopBar;
