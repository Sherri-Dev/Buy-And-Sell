import {
  Box,
  Container,
  Divider,
  getIconButtonUtilityClass,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Categories from "../components/shared/Categories";
import ReactHtmlParser from "react-html-parser";

const footerSchema = (contentName, { content }) => {
  const siteIdentity =
    content[contentName]?.config?.data.attributes.siteIdentity;
  const socialIcons = content[contentName]?.config?.data.attributes.socialLinks;
  return {
    config: (
      <>
        <Box sx={{ flexBasis: { sm: "100%" } }}>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            sx={{ mb: { xs: "1rem", sm: "1rem" }, color: "white" }}
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
            <IconButton
              href={"https://mnkdev.web.app"}
              target="_blank"
              sx={{ padding: "0" }}
            >
              <SvgIcon>
                {ReactHtmlParser(
                  content[contentName]?.config?.data.attributes.socialLinks[0]
                    ?.icon?.data?.attributes.path
                )}
              </SvgIcon>
              {
                <FacebookIcon
                  color="primary"
                  sx={{
                    fontSize: "2rem",
                    "&:hover": { color: "primary.dark" },
                  }}
                />
              }
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
      </>
    ),
    categories: (
      <Box sx={{ flexBasis: { sm: "100%" } }}>
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
          <Categories content={content[contentName]} />
        </List>
      </Box>
    ),
    navigation: (
      <>
        <Box sx={{ flexBasis: { sm: "100%" } }}>
          <List
            sx={{
              paddingTop: 0,
              ".MuiListItemButton-root": {
                fontFamily: "Poppins",
                color: "#979797",
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
              <ListItem disablePadding>
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
