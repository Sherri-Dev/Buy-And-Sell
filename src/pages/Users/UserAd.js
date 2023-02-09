import { Box, Button, Card, CardContent, CardHeader, CardMedia, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import VisibilityIcon from "@mui/icons-material/Visibility"
import { Link } from 'react-router-dom';
const UserAd = ({ adData }) => {
    const isFeatured = adData?.categories?.find(
        (ctg) => ctg.name === "Featured"
    );
    return (
        <Card sx={{ display: 'flex', flexDirection: { xs: "column", sm: "row", md: "column", lg: "row" } }}>
            <CardMedia image={`${process.env.REACT_APP_BACKEND_URL}${adData?.images[0].url
                }`}
                sx={{ flex: 1, position: 'relative', minHeight: "180px" }}>
                <CardHeader avatar={
                    isFeatured && (
                        <Typography
                            sx={{
                                position: "absolute",
                                top: "-18px",
                                left: "-1.7rem",
                                width: "5rem",
                                fontSize: "0.875rem",
                                textAlign: "left",
                                color: "white",
                                backgroundColor: "danger.main",
                                paddingTop: '18px',
                                paddingLeft: "22px",
                                transform: "rotate(-45deg)",
                                zIndex: 1,
                            }}
                            variant="subtitle2"
                        >
                            <StarIcon />
                        </Typography>
                    )
                }
                    action={
                        <>
                            <IconButton
                                aria-label="add to favorites"
                                sx={{
                                    backgroundColor: "white",
                                    padding: "8px",
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
                    } />
            </CardMedia>
            <CardContent sx={{ flex: 1 }}>
                <Stack flexDirection={"row"} justifyContent="space-between">
                    <Stack flexDirection={"row"} gap="10px" flexWrap={"wrap"} >
                        {
                            adData?.categories?.map((cat) =>
                            (<Typography
                                variant="h6"
                                sx={{ fontSize: "1rem", color: "gray", fontWeight: "normal" }}
                                key={cat.id}
                            >
                                {cat.name}
                            </Typography>
                            ))
                        }
                    </Stack>
                    <Tooltip
                        title="340 views"
                        arrow
                        placement="top"
                        leaveDelay={1500}
                        enterTouchDelay={0}
                        sx={{ cursor: "pointer" }}
                    >
                        <VisibilityIcon sx={{ color: "gray" }} />
                    </Tooltip>
                </Stack>
                <Typography
                    component={Link}
                    to={`/ads/${adData?.slug}`}
                    variant="h5"
                    sx={{
                        fontWeight: "500",
                        fontSize: { xs: "23px", sm: "25px" },
                        color: "secondary.main",
                        textDecoration: "none",
                        "&:hover": {
                            color: "primary.main",
                        },
                    }}
                    noWrap
                >
                    {adData.title}
                </Typography>
                <Stack
                    direction={"row"}
                    alignItems="center"
                    spacing={1}
                    sx={{ color: "gray" }}
                    mt="10px"
                >
                    <AccessTimeIcon
                        sx={{ fontSize: "1.5rem" }}
                    />
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: "normal",
                            fontSize: { xs: "14px", sm: "16px" },

                        }}
                        noWrap
                    >
                        {new Date(adData?.publishedAt).toDateString()}
                    </Typography>
                </Stack>
                <Stack flexDirection={"row"} flexWrap="wrap" gap="15px" justifyContent={"space-between"} alignItems={"flex-start"} mt={"20px"}>
                    <Box flexDirection={"column"} justifyContent={"space-between"}>
                        <Typography
                            variant="subtitle1"
                            color="primary"
                            sx={{
                                fontSize: { xs: "17px", sm: "19px" },
                            }}
                        >
                            {`${adData?.price?.currency} ${adData?.price?.value} (${adData?.price?.tag})`}
                        </Typography>
                        <Stack
                            direction={"row"}
                            alignItems="center"
                            spacing={1}
                            sx={{ color: "gray", position: "relative" }}
                        >
                            <LocationOnIcon
                                sx={{ fontSize: "1.5rem" }}
                            />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: "normal",
                                    fontSize: { xs: "16px", sm: "18px" },
                                }}
                                noWrap
                            >
                                {adData?.location?.address}
                            </Typography>
                        </Stack>
                    </Box>
                    <Button component={Link}
                        to={`/ads/${adData?.slug}`} sx={{ py: "10px" }} variant="contained">
                        View Details
                    </Button>
                </Stack>

            </CardContent>
        </Card>
    )
}

export default UserAd