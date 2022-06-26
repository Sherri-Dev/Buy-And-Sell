import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box } from "@mui/system";

const Ad = ({ variant }) => {
  return variant === 1 ? (
    <Card
      sx={{
        backgroundColor: "secondary.main",
        height: "280px",
        position: "relative",
        borderRadius: "6px",
        ".css-dcnb5z-MuiCardMedia-root:before": {
          content: `''`,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 100%)",
        },
      }}
      elevation={5}
    >
      <CardMedia
        image="https://adforestpro.scriptsbundle.com/wp-content/uploads/2021/09/278606-1-850x450-2-300x224.png"
        sx={{ height: "100%", position: "relative" }}
      >
        <CardHeader
          avatar={
            <Typography
              sx={{
                position: "absolute",
                top: "14px",
                left: "-1.7rem",
                width: "7rem",
                textAlign: "center",
                color: "white",
                backgroundColor: "red",
                padding: "0.2rem 0.4rem",
                transform: "rotate(-45deg)",
                zIndex: 1,
              }}
              variant="subtitle2"
            >
              Featured
            </Typography>
          }
          action={
            <>
              <IconButton
                aria-label="add to favorites"
                sx={{
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "white",
                    transition: "background-color 0.5s ease",
                    svg: {
                      color: "red",
                    },
                  },
                }}
              >
                <FavoriteIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
        <CardContent
          sx={{
            width: "100%",
            position: "absolute",
            bottom: "0.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
          }}
        >
          <Typography
            variant="subtitle1"
            color="primary"
            sx={{ fontSize: { xs: "17px", sm: "19px" } }}
          >
            $75000.00 (Negotiable)
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "500",
              fontSize: { xs: "23px", sm: "25px" },
              color: "white",
            }}
            noWrap
          >
            3 Kanal Brand New Villa
          </Typography>

          <Stack
            direction={"row"}
            alignItems="center"
            spacing={1}
            sx={{ color: "white", mt: "0.7rem", position: "relative" }}
          >
            <LocationOnIcon sx={{}} />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "normal",
                fontSize: { xs: "16px", sm: "18px" },
              }}
              noWrap
            >
              Lorem ipsum dolor sit amet.
            </Typography>
          </Stack>
          <Divider
            absolute={true}
            sx={{ mt: "0rem", bottom: "1.9rem", mb: "0.5rem", width: "100%" }}
            color="grey"
          />
          <Box
            sx={{
              pt: "0.9rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#cfcfcf",
              mb: "-1.2rem",
            }}
          >
            <Stack
              direction={"row"}
              alignItems="center"
              spacing={1}
              sx={{ color: "#cfcfcf" }}
            >
              <AccessTimeIcon sx={{}} />
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "normal",
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                September 30,2022
              </Typography>
            </Stack>{" "}
            <Tooltip
              title="340 views"
              arrow
              placement="top"
              leaveDelay={1500}
              enterTouchDelay={0}
              sx={{ cursor: "pointer" }}
            >
              <VisibilityIcon />
            </Tooltip>
          </Box>
        </CardContent>
      </CardMedia>
    </Card>
  ) : variant === 2 ? (
    <Card sx={{ position: "relative" }} elevation={5}>
      <CardHeader
        sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}
        avatar={
          <Typography
            sx={{
              textAlign: "center",
              color: "white",
              backgroundColor: "red",
              padding: "0.2rem 0.4rem",
              borderRadius: "4px",
              zIndex: 1,
            }}
            variant="subtitle2"
          >
            Featured
          </Typography>
        }
        action={
          <>
            <IconButton
              aria-label="add to favorites"
              sx={{
                boxShadow: "0 0 10px 1px grey",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "white",
                  transition: "background-color 0.5s ease",
                  svg: {
                    color: "red",
                  },
                },
              }}
            >
              <FavoriteIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
      <CardMedia
        image="https://adforestpro.scriptsbundle.com/wp-content/uploads/2021/09/278606-1-850x450-2-300x224.png"
        sx={{ height: "200px" }}
      />
      <CardContent
        sx={{
          width: "100%",
          backgroundColor: "secondary.main",
          postion: "relative",
        }}
      >
        <Typography
          variant="subtitle1"
          color="primary"
          sx={{ fontSize: { xs: "17px", sm: "19px" } }}
        >
          $75000.00 (Negotiable)
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "500",
            fontSize: { xs: "23px", sm: "25px" },
            color: "white",
          }}
          noWrap
        >
          3 Kanal Brand New Villa
        </Typography>

        <Stack
          direction={"row"}
          alignItems="center"
          spacing={1}
          sx={{ color: "white", mt: "0.7rem", position: "relative" }}
        >
          <LocationOnIcon sx={{}} />
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "normal",
              fontSize: { xs: "16px", sm: "18px" },
            }}
            noWrap
          >
            Lorem ipsum dolor sit amet.
          </Typography>
        </Stack>
        <Divider
          absolute={true}
          sx={{ mt: "0rem", bottom: "2.1rem", mb: "0.5rem", width: "100%" }}
          color="grey"
        />
        <Box
          sx={{
            pt: "0.9rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#cfcfcf",
            mb: "-0.9rem",
          }}
        >
          <Stack
            direction={"row"}
            alignItems="center"
            spacing={1}
            sx={{ color: "#cfcfcf" }}
          >
            <AccessTimeIcon sx={{}} />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "normal",
                fontSize: { xs: "14px", sm: "16px" },
              }}
            >
              September 30,2022
            </Typography>
          </Stack>{" "}
          <Tooltip
            title="340 views"
            arrow
            placement="top"
            leaveDelay={1500}
            enterTouchDelay={0}
            sx={{ cursor: "pointer" }}
          >
            <VisibilityIcon />
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  ) : (
    ""
  );
};

export default Ad;
