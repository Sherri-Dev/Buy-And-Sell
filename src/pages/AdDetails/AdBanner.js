import React, { useState } from "react";
import ArrowBackIosNewRounded from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded";
import {
  Box,
  Card,
  CardMedia,
  Container,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import Carousel from "../../components/shared/Carousel";

const carouselItems = [
  <CardMedia
    component="img"
    src="https://adforestpro.scriptsbundle.com/wp-content/uploads/2021/09/33-20-540x400.png"
    sx={{ width: "100%" }}
  />,
  <CardMedia
    component="img"
    src="https://adforestpro.scriptsbundle.com/wp-content/uploads/2021/09/33-20-540x400.png"
    sx={{ width: "100%" }}
  />,
  <CardMedia
    component="img"
    src="https://adforestpro.scriptsbundle.com/wp-content/uploads/2021/09/33-20-540x400.png"
    sx={{ width: "100%" }}
  />,
];
const AdBanner = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ position: "relative" }}>
      <Toolbar
        sx={{
          width: "100%",
          height: "350px",
          backgroundColor: "secondary.main",
        }}
      ></Toolbar>
      <Container
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-20%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            width: "100%",
            backgroundColor: "white",
            p: "16px 24px",
            borderRadius: "8px",
            boxShadow: 2,
            zIndex: 1,
          }}
        >
          <Card
            sx={{
              width: "40%",
            }}
            elevation={0}
          >
            <Carousel items={carouselItems} />
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
              <Tab
                sx={{
                  width: "120px",
                  height: "80px !important",
                  padding: 0,
                  borderRadius: "4px",
                }}
                label={
                  <CardMedia
                    component="img"
                    src="https://adforestpro.scriptsbundle.com/wp-content/uploads/2021/09/33-20-540x400.png"
                    sx={{ width: "100%", height: "100%" }}
                  />
                }
              />
              <Tab
                sx={{
                  width: "120px",
                  height: "80px !important",
                  padding: 0,
                  borderRadius: "4px",
                }}
                label={
                  <CardMedia
                    component="img"
                    src="https://adforestpro.scriptsbundle.com/wp-content/uploads/2021/09/33-20-540x400.png"
                    sx={{ width: "100%", height: "100%" }}
                  />
                }
              />
              <Tab
                sx={{
                  width: "120px",
                  height: "80px !important",
                  padding: 0,
                  borderRadius: "4px",
                }}
                label={
                  <CardMedia
                    component="img"
                    src="https://adforestpro.scriptsbundle.com/wp-content/uploads/2021/09/33-20-540x400.png"
                    sx={{ width: "100%", height: "100%" }}
                  />
                }
              />
              <Tab
                sx={{
                  width: "120px",
                  height: "80px !important",
                  padding: 0,
                  borderRadius: "4px",
                }}
                label={
                  <CardMedia
                    component="img"
                    src="https://adforestpro.scriptsbundle.com/wp-content/uploads/2021/09/33-20-540x400.png"
                    sx={{ width: "100%", height: "100%" }}
                  />
                }
              />
            </Tabs>
          </Card>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "1rem", color: "#575757" }}
              gutterBottom
            >
              Vehicles
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: "2.2rem",
                fontWeight: "600",
                color: "secondary.main",
              }}
            >
              Mariner 4 Boat Set Intex
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

// const AdBanner = () => {
//   const [value, setValue] = useState(0);
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <div style={{ position: "relative" }}>
//       <Toolbar
//         sx={{
//           width: "100%",
//           height: "350px",
//           backgroundColor: "secondary.main",
//         }}
//       ></Toolbar>
//       <Container
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%,-20%)",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "1rem",
//             width: "100%",
//             backgroundColor: "white",
//             p: "16px 24px",
//             borderRadius: "8px",
//             boxShadow: 2,
//             zIndex: 1,
//           }}
//         >
//           <Card
//             sx={{
//               width: "40%",
//             }}
//             elevation={0}
//           >
//             <Box
//               sx={{
//                 position: "relative",
//                 "&:hover": {
//                   ".MuiIconButton-root.left": { opacity: 1, left: 0 },
//                   ".MuiIconButton-root.right": { opacity: 1, right: 0 },
//                 },
//               }}
//             >
//               <IconButton
//                 sx={{
//                   position: "absolute",
//                   top: "50%",
//                   left: "-5rem",
//                   opacity: 0,
//                   transition: "all 0.3s ease-in",
//                   transform: "translateY(-50%)",
//                   "&:hover": {
//                     color: "black",
//                   },
//                   "&:focus": {
//                     color: "black",
//                   },
//                 }}
//                 className="left"
//               >
//                 <ArrowBackIosNewRounded sx={{ fontSize: "2.5rem" }} />
//               </IconButton>
//               <IconButton
//                 sx={{
//                   position: "absolute",
//                   top: "50%",
//                   right: "-5rem",
//                   opacity: 0,
//                   transition: "all 0.3s ease-in",
//                   transform: "translateY(-50%)",
//                   "&:hover": {
//                     color: "black",
//                   },
//                   "&:focus": {
//                     color: "black",
//                   },
//                 }}
//                 className="right"
//               >
//                 <ArrowForwardIosRounded sx={{ fontSize: "2.5rem" }} />
//               </IconButton>
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 scrollButtons
//                 indicatorColor="transparent"
//                 variant="scrollable"
//               >
//                 <Tab
//                   sx={{ width: "100%", height: "400px" }}
//                   label={
//                     <CardMedia
//                       component="img"
//                       src="https://adforestpro.scriptsbundle.com/wp-content/uploads/2021/09/33-20-540x400.png"
//                       // sx={{ width: "100%", height: "300px", borderRadius: "4px" }}
//                     />
//                   }
//                 />
//                 <Tab
//                   sx={{ width: "100%", height: "400px" }}
//                   label={
//                     <CardMedia
//                       component="img"
//                       src="https://adforestpro.scriptsbundle.com/wp-content/uploads/2021/09/33-20-540x400.png"
//                       // sx={{ width: "100%", height: "300px", borderRadius: "4px" }}
//                     />
//                   }
//                 />
//                 <Tab
//                   sx={{ width: "100%", height: "400px" }}
//                   label={
//                     <CardMedia
//                       component="img"
//                       src="https://adforestpro.scriptsbundle.com/wp-content/uploads/2021/09/33-20-540x400.png"
//                       // sx={{ width: "100%", height: "300px", borderRadius: "4px" }}
//                     />
//                   }
//                 />
//               </Tabs>
//             </Box>
//             <Tabs
//               value={value}
//               onChange={handleChange}
//               sx={{
//                 position: "relative",
//                 margin: "0.5rem 0 0 0",
//                 "&:hover": {
//                   ".MuiTabs-scrollButtons:nth-child(1)": {
//                     opacity: "1 !important",
//                     left: "0 !important",
//                   },
//                   ".MuiTabs-scrollButtons:nth-child(even)": {
//                     opacity: "1 !important",
//                     right: "0 !important",
//                   },
//                 },
//                 "button.Mui-selected": {
//                   color: "white",
//                   border: "2px solid #FFCC00",
//                 },
//                 "button:not(.Mui-selected)": { opacity: 0.5 },
//                 color: "white",
//                 ".MuiTabs-scrollButtons svg": {
//                   color: "black",
//                   fontSize: "2.2rem",
//                   "&:hover": {
//                     transform: "scale(1.2)",
//                     transition: "transform 0.3s ease",
//                   },
//                 },
//                 ".MuiTabs-flexContainer": {
//                   gap: "0.5rem",
//                 },
//                 "& .MuiTabs-scrollButtons:nth-child(1)": {
//                   opacity: 0,
//                   position: "absolute",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   left: "-5rem",
//                   transition: "all 0.3s ease-in",
//                   zIndex: 1,
//                 },
//                 "& .MuiTabs-scrollButtons:nth-child(even)": {
//                   opacity: 0,
//                   position: "absolute",
//                   top: "50%",
//                   transition: "all 0.3s ease-in",
//                   transform: "translateY(-50%)",
//                   right: "-5rem",
//                   zIndex: 1,
//                 },
//               }}
//               scrollButtons
//               indicatorColor="transparent"
//               variant="scrollable"
//             >
//               <Tab
//                 sx={{
//                   width: "120px",
//                   height: "80px !important",
//                   padding: 0,
//                   borderRadius: "4px",
//                 }}
//                 label={
//                   <CardMedia
//                     component="img"
//                     src="https://adforestpro.scriptsbundle.com/wp-content/uploads/2021/09/33-20-540x400.png"
//                     sx={{ width: "100%", height: "100%" }}
//                   />
//                 }
//               />
//               <Tab
//                 sx={{
//                   width: "120px",
//                   height: "80px !important",
//                   padding: 0,
//                   borderRadius: "4px",
//                 }}
//                 label={
//                   <CardMedia
//                     component="img"
//                     src="https://adforestpro.scriptsbundle.com/wp-content/uploads/2021/09/33-20-540x400.png"
//                     sx={{ width: "100%", height: "100%" }}
//                   />
//                 }
//               />
//               <Tab
//                 sx={{
//                   width: "120px",
//                   height: "80px !important",
//                   padding: 0,
//                   borderRadius: "4px",
//                 }}
//                 label={
//                   <CardMedia
//                     component="img"
//                     src="https://adforestpro.scriptsbundle.com/wp-content/uploads/2021/09/33-20-540x400.png"
//                     sx={{ width: "100%", height: "100%" }}
//                   />
//                 }
//               />
//               <Tab
//                 sx={{
//                   width: "120px",
//                   height: "80px !important",
//                   padding: 0,
//                   borderRadius: "4px",
//                 }}
//                 label={
//                   <CardMedia
//                     component="img"
//                     src="https://adforestpro.scriptsbundle.com/wp-content/uploads/2021/09/33-20-540x400.png"
//                     sx={{ width: "100%", height: "100%" }}
//                   />
//                 }
//               />
//             </Tabs>
//           </Card>
//           <Box sx={{ flexGrow: 1 }}>
//             <Typography
//               variant="h6"
//               sx={{ fontSize: "1rem", color: "#575757" }}
//               gutterBottom
//             >
//               Vehicles
//             </Typography>
//             <Typography
//               variant="h3"
//               component="h2"
//               sx={{
//                 fontSize: "2.2rem",
//                 fontWeight: "600",
//                 color: "secondary.main",
//               }}
//             >
//               Mariner 4 Boat Set Intex
//             </Typography>
//           </Box>
//         </Box>
//       </Container>
//     </div>
//   );
// };

export default AdBanner;
