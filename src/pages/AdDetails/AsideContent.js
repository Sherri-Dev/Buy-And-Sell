import { Avatar, Button, IconButton, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { getImages, getImg } from '../../helpers/formatApi';
import ReactHtmlParser from 'react-html-parser'
import AdSlider from '../SearchResults/AdSlider';
import AdModal from './AdModal';
import Icon from '../../components/shared/Icon';
import { Link } from 'react-router-dom';

const AsideContent = ({ content, iconList, sideDesc, relatedAds }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { origin: siteUrl } = window.location;
    return (
        <>
            {iconList?.icons.data?.length && <Stack flexDirection={'row'} height='fit-content' gap='20px' justifyContent={'center'} sx={{ backgroundColor: 'white', p: "20px", boxShadow: 0, borderRadius: '8px', width: '100%' }}>
                <IconButton sx={{ fontSize: '30px', p: '12px', backgroundColor: '#eef3f7', borderRadius: '8px', "&:hover": { color: 'primary.main', backgroundColor: 'secondary.main' } }}
                    component={Link}
                    to={`/users/${content?.attributes?.author?.data?.attributes?.slug}`} >
                    <Icon list={iconList?.icons.data} name='person' />
                </IconButton>
                <IconButton
                    onClick={() => setIsOpen(true)}
                    sx={{ fontSize: '30px', p: '12px', backgroundColor: '#eef3f7', borderRadius: '8px', "&:hover": { color: 'primary.main', backgroundColor: 'secondary.main' } }} >
                    <Icon list={iconList?.icons.data} name='share' />
                </IconButton>
                <IconButton sx={{ fontSize: '30px', p: '12px', backgroundColor: '#eef3f7', borderRadius: '8px', "&:hover": { color: 'primary.main', backgroundColor: 'secondary.main' } }}>
                    <Icon list={iconList?.icons.data} name='favorite' />
                </IconButton>
            </Stack>}
            <Box sx={{ backgroundColor: 'white', p: "20px", boxShadow: 0, borderRadius: '8px', width: '100%' }}>
                <Link to={`/users/${content?.attributes?.author?.data?.attributes?.slug}`} style={{ textDecoration: 'none' }}>
                    <Stack flexDirection={'row'} height='fit-content' gap='20px' alignItems={'center'} >
                        <Avatar sx={{ width: '60px', height: '60px', backgroundColor: 'secondary.main', fontSize: '40px' }} alt={content?.attributes?.author?.data?.attributes?.username} src={`${process.env.REACT_APP_BACKEND_URL}${getImg(content?.attributes?.author.data?.attributes?.avatar, 'thumbnail').url}`} />
                        <Typography variant="h6" sx={{ color: 'secondary.main' }}>{content?.attributes?.author?.data?.attributes?.username}</Typography>
                    </Stack>
                </Link>
                <Button href={`https://api.whatsapp.com/send?phone=${content?.attributes?.author?.data?.attributes?.phone}`} variant='contained' color='success' disableElevation sx={{ mt: '25px', width: '100%', py: '10px', }} startIcon={<Icon list={iconList?.icons.data} name='whatsApp' />} target='_blank'>
                    WhatsApp
                </Button>
            </Box>
            {sideDesc?.desc && <Typography sx={{
                backgroundColor: 'white', p: "20px", boxShadow: 0, borderRadius: '8px', width: '100%', "& h2": { fontWeight: 500 }, '& ol': {
                    listStylePosition: 'inside',
                    mt: '10px'
                }
            }}>
                {ReactHtmlParser(sideDesc?.desc)}
            </Typography>}
            {relatedAds && <Box sx={{ backgroundColor: 'white', p: "5px", boxShadow: 0, borderRadius: '8px', width: '100%' }}>
                <AdSlider title={'Related Ads'} content={relatedAds} />
            </Box>}
            <AdModal isOpen={isOpen} handleClose={() => setIsOpen(false)} content={{ img: getImages(content?.attributes?.images, 'full')[0], title: content?.attributes?.title, url: `${siteUrl}/ads/${content?.attributes?.slug}`, priceTag: content?.attributes?.price?.tag }} />
        </>
    )
}

export default AsideContent