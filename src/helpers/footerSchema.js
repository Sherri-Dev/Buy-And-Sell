import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import Categories from "../components/shared/Categories";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import { CategoriesContextProvider } from "../contexts/categoriesContext";

const footerSchema = (contentName, { content }) => {
  const siteIdentity =
    content[contentName]?.config?.data.attributes.siteIdentity;
  const socialIcons = content[contentName]?.config?.data.attributes.socialLinks;
  return {
    config: (
      <>
        <Box sx={{ flex: 1 }} key="footer-col-1">
          <Typography
            variant="h6"
            fontWeight={"bold"}
            sx={{
              mb: { xs: "1rem", sm: "1rem" },
              color: "white",
              textDecoration: "none",
              display: "inline-block",
            }}
            component={Link}
            to="/"
          >
            {siteIdentity?.siteTitle}
          </Typography>
          <Typography
            sx={{
              color: "#979797",
              fontSize: { xs: "0.9rem", mb: "1rem" },
            }}
          >
            {siteIdentity?.description}
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
            {socialIcons?.map((link) => {
              return (
                <IconButton
                  href={link.href}
                  target="_blank"
                  sx={{ padding: "0" }}
                  key={link?.icon?.data?.id}
                >
                  <SvgIcon
                    color="primary"
                    sx={{
                      fontSize: "2rem",
                      "&:hover": { color: "primary.dark" },
                    }}
                  >
                    {ReactHtmlParser(link.icon?.data?.attributes.path)}
                  </SvgIcon>
                </IconButton>
              );
            })}
          </Stack>
        </Box>
      </>
    ),
    categories: (
      <Box sx={{ flex: 1 }} key="footer-col-2">
        {" "}
        <List
          sx={{
            paddingTop: 0,
            li: { paddingInline: 0 },

            ".MuiListItemButton-root": {
              paddingInline: 0,
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
          <CategoriesContextProvider>
            <Categories content={content[contentName].categories?.data} />
          </CategoriesContextProvider>
        </List>
      </Box>
    ),
    navigation: (
      <>
        <Box sx={{ flex: 1 }} key="footer-col-3">
          <List
            sx={{
              paddingTop: 0,
              li: { paddingInline: 0 },

              ".MuiListItemButton-root": {
                paddingInline: 0,
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
            {content[contentName]?.menu?.data?.attributes.links.map((link) => (
              <ListItem
                disablePadding
                sx={{ color: "#979797" }}
                key={link.href}
              >
                <ListItemButton href={link.href}>{link.label}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </>
    ),
  };
};

export default footerSchema;
