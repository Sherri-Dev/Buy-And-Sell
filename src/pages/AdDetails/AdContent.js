import { Avatar, Box, Button, Container, IconButton, List, ListItem, ListSubheader, Stack, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import ReactHtmlParser from 'react-html-parser'
import { getComponentsFromDZ, getImages, getImg } from '../../helpers/formatApi';
import AdSlider from '../SearchResults/AdSlider';
import AdModal from './AdModal';
import { useLocation } from 'react-router-dom';

const AdContent = ({ content, offset }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { origin: siteUrl } = window.location;
    const { 'related-ads': relatedAds } = useMemo(() => getComponentsFromDZ(content?.attributes?.details), [content]);
    return (
        <Container sx={{ mt: `calc(${offset} + 3rem)` }}>
            <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }} gap='20px'>
                <Box flexGrow={1} component='article' sx={{
                    backgroundColor: 'white', p: "36px 30px",
                    borderRadius: "8px",
                    boxShadow: 0,
                }}>
                    <Typography component={'h2'} variant='h5' fontWeight={'500'} mb='20px'>Description</Typography>
                    <Typography>
                        {ReactHtmlParser(content?.attributes?.description)}
                    </Typography>
                </Box>
                <Stack component={'aside'} gap={'20px'} minWidth='20rem'>
                    <Stack flexDirection={'row'} height='fit-content' gap='20px' justifyContent={'center'} sx={{ backgroundColor: 'white', p: "20px", boxShadow: 0, borderRadius: '8px', width: '100%' }}>
                        <IconButton sx={{ fontSize: '30px', p: '12px', backgroundColor: '#eef3f7', borderRadius: '8px', "&:hover": { color: 'primary.main', backgroundColor: 'secondary.main' } }}>
                            <PersonIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton
                            onClick={() => setIsOpen(true)}
                            sx={{ fontSize: '30px', p: '12px', backgroundColor: '#eef3f7', borderRadius: '8px', "&:hover": { color: 'primary.main', backgroundColor: 'secondary.main' } }} >
                            <ShareIcon />
                        </IconButton>
                        <IconButton sx={{ fontSize: '30px', p: '12px', backgroundColor: '#eef3f7', borderRadius: '8px', "&:hover": { color: 'primary.main', backgroundColor: 'secondary.main' } }}>
                            <FavoriteIcon />
                        </IconButton>
                    </Stack>
                    <Box sx={{ backgroundColor: 'white', p: "20px", boxShadow: 0, borderRadius: '8px', width: '100%' }}>
                        <Stack flexDirection={'row'} height='fit-content' gap='20px' alignItems={'center'} >
                            <Avatar sx={{ width: '60px', height: '60px', backgroundColor: 'secondary.main', fontSize: '40px' }} alt={content?.attributes?.author?.data?.attributes?.username} src={`${process.env.REACT_APP_BACKEND_URL}${getImg(content?.attributes?.author.data?.attributes?.avatar, 'thumbnail').url}`} />
                            <Typography variant="h6">{content?.attributes?.author?.data?.attributes?.username}</Typography>

                        </Stack>
                        <Button href={`https://api.whatsapp.com/send?phone=${content?.attributes?.author?.data?.attributes?.phone}`} variant='contained' color='success' disableElevation sx={{ mt: '15px', width: '100%', py: '10px', }} startIcon={<WhatsAppIcon />} target='_blank'>
                            WhatsApp
                        </Button>
                    </Box>
                    <Box sx={{ backgroundColor: 'white', p: "20px", boxShadow: 0, borderRadius: '8px', width: '100%' }}>

                        <List >
                            <ListSubheader sx={{ mb: '10px' }}>
                                <Typography color={'secondary'} fontSize={'22px'} fontWeight='500'>
                                    Safety Tips for deal
                                </Typography>
                            </ListSubheader>
                            <ListItem >
                                <Typography component='p' variant="body1" color={'GrayText'}>
                                    1. Use a safe location to meet seller.
                                </Typography>
                            </ListItem>
                            <ListItem >
                                <Typography component='p' variant="body1" color={'GrayText'}>
                                    2. Avoid cash transactions
                                </Typography>
                            </ListItem>
                            <ListItem >
                                <Typography component='p' variant="body1" color={'GrayText'}>
                                    3. Use a safe location to meet seller.
                                </Typography>
                            </ListItem>
                        </List>
                    </Box>
                    <Box sx={{ backgroundColor: 'white', p: "5px", boxShadow: 0, borderRadius: '8px', width: '100%' }}>

                        <AdSlider title={'Related Ads'} content={relatedAds} />
                    </Box>
                </Stack>
            </Stack>
            <AdModal isOpen={isOpen} handleClose={() => setIsOpen(false)} content={{ img: getImages(content?.attributes?.images, 'full')[0], title: content?.attributes?.title, url: `${siteUrl}/ads/${content?.attributes?.slug}`, priceTag: content?.attributes?.price?.tag }} />
        </Container >
    )
}

export default AdContent