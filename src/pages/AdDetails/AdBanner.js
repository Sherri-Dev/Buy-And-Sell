import React, { useState } from "react";
import ArrowBackIosNewRounded from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded";
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Container,
  IconButton,
  List,
  ListItem,
  ListSubheader,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import Carousel from "../../components/shared/Carousel";
import LocationOn from "@mui/icons-material/LocationOn";
import IconBox from "../../components/shared/IconBox";
import PersonIcon from '@mui/icons-material/Person';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
 let offset = '5rem'
  return (

      <Stack
        sx={{
          width: "100%",
          backgroundColor:'#eeeeee'
        }}
        gap='30px'
      >
        <Stack sx={{backgroundColor:'secondary.main'}}>
        <Container

>
  <Stack
    sx={{
      flexDirection:{xs:'column',md:"row"},
      justifyContent: "center",
      gap: "1rem",
      width: "100%",
      backgroundColor: "white",
      p: "16px 24px",
      borderRadius: "8px",
      boxShadow: 0,
      position:'relative',
        top:offset,
        zIndex:1
    }}
  >
    <Card
      sx={{
        width: {xs:"100%",md:"40%"},
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
        [1,2,3,4,5].map(tab => (
          <Tab
          sx={{
            width: "100%",
            height: {xs:'200px !important',sm:'400px !important', md:"260px !important"},
            maxWidth:'none',
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
    <Box sx={{ flexGrow: 1,paddingLeft:'15px' }}>
      <Stack flexDirection={'row'} gap={'10px'}  marginBottom={'10px'}>
      <Typography
        variant="h6"
        sx={{ fontSize: "1rem", color: "#575757" }}
       
      >
        Vehicles
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontSize: "1rem", color: "#575757" }}
       
      >
        Services
      </Typography>
      </Stack>
      
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

    <Box>
      <Stack flexDirection={'row'} alignItems='center' gap='30px' marginTop={'20px'} marginBottom={'12px'}>
        <Stack flexDirection={'row'} alignItems='center' gap='10px'>
          <Typography variant="subtitle1" fontSize={'18px'} fontWeight={'500'}>
          Posted :
          </Typography>
          <Typography variant="body1" color={'GrayText'}>November 13, 2022</Typography>
        </Stack>
        <Stack flexDirection={'row'} alignItems='center' gap='10px'>
          <Typography variant="subtitle1" fontSize={'18px'} fontWeight={'500'}>
          Views :
          </Typography>
          <Typography variant="body1" color={'GrayText'}>6608</Typography>
        </Stack>
      </Stack>
      <Stack flexDirection={'row'} alignItems='center' gap='10px' marginBottom={'35px'}>
          <LocationOn color="action" />
          <Typography variant="body1" color={'GrayText'}>November 13, 2022</Typography>  
      </Stack>
      <Stack flexDirection={'row'} alignItems='center' gap='30px' mb={'40px'}>
      <Stack flexDirection={'row'} alignItems='center' gap='10px'>
          <Typography variant="subtitle1" fontSize={'18px'} fontWeight={'500'}>
          Price :
          </Typography>
          <Typography variant="body1" color={'GrayText'}>Rs. 5000</Typography>
        </Stack>
        <Typography color={'primary'} variant='h5' fontWeight={'500'}>Fixed Price</Typography>
      </Stack>

      <IconBox/>
    </Box>
    </Box>
  </Stack>
</Container>
      </Stack>
        
      <Container sx={{mt:offset}}>
        <Stack sx={{flexDirection:{xs:'column',md:'row'}}} gap='20px'>
          <Box flexGrow={1} component='article' sx={{backgroundColor:'white',p: "36px 30px",
      borderRadius: "8px",
      boxShadow: 0,}}>
            <Typography component={'h2'} variant='h5' fontWeight={'500'} gutterBottom>Description</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sapiente totam dolor. Mollitia quisquam porro, quidem molestiae fugit qui debitis odit, cupiditate quae molestias voluptatibus tempore velit facilis, sint reprehenderit reiciendis! Ducimus, et! Ab possimus nulla quo veritatis. Repudiandae, dolorum sit dolor tempore est voluptate, dolore molestias eaque nihil dolorem similique voluptatibus accusamus iste quisquam corporis excepturi! Molestiae nam iste tempora harum, excepturi mollitia optio. Assumenda repudiandae vero minus adipisci dolorem sit? Nemo, facere? Nostrum laborum praesentium maxime tempore accusantium, pariatur totam, deserunt voluptates in mollitia accusamus. Deserunt, inventore similique? Sit accusantium, dolorum nam quam quis, pariatur velit soluta doloribus ipsam excepturi quos veniam in maiores natus possimus. Tempore, aspernatur. Placeat atque, odio tempora aspernatur labore voluptatibus aliquid magni quas suscipit quos deserunt incidunt doloremque ab excepturi? Ipsum facilis maxime incidunt voluptatem nobis praesentium modi eligendi dolores nostrum sit? Expedita dignissimos ab officiis accusamus dicta consectetur exercitationem possimus aspernatur rem nihil minus nisi ipsa doloremque, adipisci placeat tempore ex quae voluptatum voluptas! Aut, sint perspiciatis! Repellat earum vitae iste, dolorem libero laborum optio similique harum ea iusto, dolore deleniti perspiciatis odit reiciendis. Veritatis iusto neque at molestiae laborum quas aspernatur ut, natus voluptatem minus! Quae, necessitatibus. Non, molestiae. Quia fugit dicta iusto saepe itaque voluptas sunt modi temporibus ratione quo voluptates voluptate aperiam perspiciatis, commodi sed corrupti ea libero molestias culpa earum provident aliquid. Eos explicabo saepe natus fugiat, similique corporis cum voluptatem aspernatur dicta praesentium, quam modi sunt totam accusantium deserunt possimus! Dolor nam voluptatem nostrum eum similique vel illo deserunt, officia facilis nihil libero molestias distinctio cupiditate nisi alias ipsam pariatur laborum saepe excepturi adipisci sit? Inventore cumque laudantium repellendus? Nostrum nobis facilis deserunt at! Dignissimos commodi in labore eveniet, ipsum hic expedita voluptatem non ut nulla totam quasi minima laborum, vero deleniti? Facilis dolore tempore consequatur voluptate.
            </Typography>
          </Box>
          <Stack component={'aside'}  gap={'20px'} minWidth='20rem'>
            <Stack flexDirection={'row'} height='fit-content' gap='20px' justifyContent={'center'}  sx={{backgroundColor:'white',p: "20px",boxShadow:0,borderRadius:'8px',width:'100%'}}>
              <IconButton sx={{fontSize:'30px',p:'12px', backgroundColor:'#eef3f7',borderRadius:'8px',"&:hover":{color:'primary.main',backgroundColor:'secondary.main'}}}>
                <PersonIcon fontSize="inherit"/>
              </IconButton>
              <IconButton sx={{fontSize:'30px',p:'12px', backgroundColor:'#eef3f7',borderRadius:'8px',"&:hover":{color:'primary.main',backgroundColor:'secondary.main'}}}>
                <ShareIcon />
              </IconButton>
              <IconButton sx={{fontSize:'30px',p:'12px', backgroundColor:'#eef3f7',borderRadius:'8px',"&:hover":{color:'primary.main',backgroundColor:'secondary.main'}}}>
                <FavoriteIcon />
              </IconButton>
            </Stack>
            <Stack flexDirection={'row'} height='fit-content' gap='20px' alignItems={'center'}  sx={{backgroundColor:'white',p: "20px",boxShadow:0,borderRadius:'8px',width:'100%'}}>
          <Avatar sx={{width:'80px',height:'80px',backgroundColor:'secondary.main',fontSize:'40px'}} alt='Sheraz' src='/broken.jpg'/>
          <Typography variant="h6">Sheraz Saeed</Typography>
            </Stack>
            <Stack flexDirection={'row'} height='fit-content' gap='20px' alignItems={'center'}  sx={{backgroundColor:'white',p: "20px",boxShadow:0,borderRadius:'8px',width:'100%'}}>
          
          <List>
            <ListSubheader sx={{mb:'10px'}}>
              <Typography color={'ActiveBorder'} fontSize={'22px'} fontWeight='500'>
            Safety Tips for deal
              </Typography>
            </ListSubheader>
            <ListItem >
              <Typography component='p' variant="body1">
             1. Lorem ipsum dolor sit amet. 
              </Typography>
            </ListItem>
            <ListItem >
              <Typography component='p' variant="body1">
             1. Lorem ipsum dolor sit amet. 
              </Typography>
            </ListItem>
            <ListItem >
              <Typography component='p' variant="body1">
             1. Lorem ipsum dolor sit amet. 
              </Typography>
            </ListItem>
          
            </List>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      </Stack>
    
  );
};



export default AdBanner;
