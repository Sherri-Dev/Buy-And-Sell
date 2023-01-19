import React, { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import LocationOn from "@mui/icons-material/LocationOn";
import IconBox from "../../components/shared/IconBox";
import { getImages } from "../../helpers/formatApi";
import { useCallback } from "react";


const AdBanner = ({ content, offset }) => {
  const [value, setValue] = useState(0);


  const handleChange = useCallback((event, newValue) => {
    setValue(newValue);
  }, []);
  return (
    <Stack sx={{ backgroundColor: 'secondary.main' }}>
      <Container

      >
        <Stack
          sx={{
            flexDirection: { xs: 'column', md: "row" },
            justifyContent: "center",
            gap: "1rem",
            width: "100%",
            backgroundColor: "white",
            p: "16px 24px",
            borderRadius: "8px",
            boxShadow: 0,
            position: 'relative',
            top: offset,
            zIndex: 1
          }}
        >
          <Card
            sx={{
              width: { xs: "100%", md: "40%" },
            }}
            elevation={0}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                position: "relative",
                margin: "0",
                "&:hover": {
                  ".MuiTabs-scrollButtons:nth-of-type(1)": {
                    opacity: "1 !important",
                    left: "0 !important",
                  },
                  ".MuiTabs-scrollButtons:nth-of-type(even)": {
                    opacity: "1 !important",
                    right: "0 !important",
                  },
                },
                "button.Mui-selected": {
                  color: "white",
                  border: "2px solid #FFCC00",
                },
                color: "white",
                ".MuiTabs-scrollButtons svg": {
                  color: "black",
                  fontSize: "4.2rem",
                  "&:hover": {
                    transform: "scale(1.2)",
                    transition: "transform 0.3s ease",
                  },
                },
                ".MuiTabs-flexContainer": {
                  gap: "0.5rem",
                },
                "& .MuiTabs-scrollButtons:nth-child(1)": {
                  opacity: 0,
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "-5rem",
                  transition: "all 0.3s ease-in",
                  zIndex: 1,
                },
                "& .MuiTabs-scrollButtons:nth-child(even)": {
                  opacity: 0,
                  position: "absolute",
                  top: "50%",
                  transition: "all 0.3s ease-in",
                  transform: "translateY(-50%)",
                  right: "-5rem",
                  zIndex: 1,
                },
              }}
              scrollButtons
              indicatorColor="transparent"
              variant="scrollable"
            >
              {
                getImages(content?.attributes?.images).map(img => (
                  <Tab
                    sx={{
                      width: "100%",
                      height: { xs: '200px !important', sm: '400px !important', md: "260px !important" },
                      maxWidth: 'none',
                      padding: 0,
                      borderRadius: "4px",
                    }}
                    label={
                      <CardMedia
                        component="img"
                        src={`${process.env.REACT_APP_BACKEND_URL}${img.url}`}
                        alt={img.alt}
                        sx={{ width: "100%", height: "100%" }}
                      />
                    }
                  />
                ))
              }

            </Tabs>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                position: "relative",
                margin: "0.5rem 0 0 0",
                "&:hover": {
                  ".MuiTabs-scrollButtons:nth-of-type(1)": {
                    opacity: "1 !important",
                    left: "0 !important",
                  },
                  ".MuiTabs-scrollButtons:nth-of-type(even)": {
                    opacity: "1 !important",
                    right: "0 !important",
                  },
                },
                "button.Mui-selected": {
                  color: "white",
                  border: "2px solid #FFCC00",
                },
                "button:not(.Mui-selected)": { opacity: 0.5 },
                color: "white",
                ".MuiTabs-scrollButtons svg": {
                  color: "black",
                  fontSize: "2.2rem",
                  "&:hover": {
                    transform: "scale(1.2)",
                    transition: "transform 0.3s ease",
                  },
                },
                ".MuiTabs-flexContainer": {
                  gap: "0.5rem",
                },
                "& .MuiTabs-scrollButtons:nth-child(1)": {
                  opacity: 0,
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "-5rem",
                  transition: "all 0.3s ease-in",
                  zIndex: 1,
                },
                "& .MuiTabs-scrollButtons:nth-child(even)": {
                  opacity: 0,
                  position: "absolute",
                  top: "50%",
                  transition: "all 0.3s ease-in",
                  transform: "translateY(-50%)",
                  right: "-5rem",
                  zIndex: 1,
                },
              }}
              scrollButtons
              indicatorColor="transparent"
              variant="scrollable"
            >
              {
                getImages(content?.attributes?.images, 'thumbnail').map((img) =>
                (<Tab
                  sx={{
                    width: "120px",
                    height: "80px !important",
                    padding: 0,
                    borderRadius: "4px",
                  }}
                  label={
                    <CardMedia
                      component="img"
                      src={`${process.env.REACT_APP_BACKEND_URL}${img.url}`}
                      sx={{ width: "100%", height: "100%" }}
                    />
                  }
                />))
              }
            </Tabs>
          </Card>
          <Box sx={{ flexGrow: 1, paddingLeft: '15px' }}>
            <Stack flexDirection={'row'} gap={'10px'} marginBottom={'10px'}>
              {
                content?.attributes?.categories.data?.map((cat) =>
                (<Typography
                  variant="h6"
                  sx={{ fontSize: "1rem", color: "#575757" }}

                >
                  {cat.attributes.name}
                </Typography>
                ))
              }

            </Stack>

            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: '1.5rem', sm: '1.8rem', md: "2.2rem" },
                fontWeight: "600",
                color: "secondary.main",
              }}
            >
              {content?.attributes?.title}
            </Typography>

            <Box>
              <Stack flexDirection={'row'} flexWrap='wrap' alignItems='center' gap={{ xs: '10px', sm: '30px' }} marginTop={'20px'} marginBottom={{ xs: '10px', md: '12px' }}>
                <Stack flexDirection={'row'} alignItems='center' gap='10px'>
                  <Typography variant="subtitle1" fontSize={'18px'} fontWeight={'500'}>
                    Posted :
                  </Typography>
                  <Typography variant="body1" color={'GrayText'}>{new Date(content?.attributes?.publishedAt).toDateString()}</Typography>
                </Stack>
                <Stack flexDirection={'row'} alignItems='center' gap='10px'>
                  <Typography variant="subtitle1" fontSize={'18px'} fontWeight={'500'}>
                    Views :
                  </Typography>
                  <Typography variant="body1" color={'GrayText'}>6608</Typography>
                </Stack>
              </Stack>
              <Stack flexDirection={'row'} alignItems='center' gap='10px' marginBottom={{ xs: '10px', md: '12px' }}>
                <LocationOn color="action" />
                <Typography variant="body1" color={'GrayText'}>{content?.attributes?.location?.data?.attributes?.address}</Typography>
              </Stack>
              <Stack flexDirection={'row'} flexWrap='wrap' alignItems='center' gap={{ xs: '10px', sm: '30px' }} mb={'40px'}>
                <Stack flexDirection={'row'} alignItems='center' gap='10px'>
                  <Typography variant="subtitle1" fontSize={'18px'} fontWeight={'500'}>
                    Price :
                  </Typography>
                  <Typography variant="body1" color={'GrayText'}>{content?.attributes?.price?.currency} {content?.attributes?.price?.value}</Typography>
                </Stack>
                <Typography color={'primary'} variant='h6' fontWeight={'500'}>{content?.attributes?.price?.tag} Price</Typography>
              </Stack>

              <IconBox title={'Phone:'} desc={content?.attributes?.author?.data?.attributes?.phone} />
            </Box>
          </Box>
        </Stack>
      </Container >
    </Stack >
  );
};



export default AdBanner;
