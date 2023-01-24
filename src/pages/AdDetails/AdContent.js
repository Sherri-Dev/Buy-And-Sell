import { Avatar, Box, Button, Container, IconButton, List, ListItem, ListSubheader, Stack, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { getComponentsFromDZ, getImages, getImg } from '../../helpers/formatApi';
import AdSlider from '../SearchResults/AdSlider';
import AdModal from './AdModal';
import useFetch from '../../hooks/useFetch';
import Icon from '../../components/shared/Icon';

const AdContent = ({ content, offset }) => {
    const { data: singleAdContent } = useFetch(`${process.env.REACT_APP_API_URL}/single-ad?populate=deep`);
    const [isOpen, setIsOpen] = useState(false);
    const { origin: siteUrl } = window.location;
    const { 'related-ads': relatedAds, edito: adDesc } = useMemo(() => getComponentsFromDZ(content?.attributes?.details), [content]);
    const { icon: iconList, edito: sideDesc } = useMemo(() => getComponentsFromDZ(singleAdContent?.attributes?.content), [singleAdContent]);
    return (
        <Container sx={{ mt: `calc(${offset} + 3rem)` }}>
            <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }} gap='20px'>
                {adDesc?.desc && <Box flexGrow={1} component='article' sx={{
                    backgroundColor: 'white', p: "36px 30px",
                    borderRadius: "8px",
                    boxShadow: 0,
                }}>
                    <Typography sx={{ "& h2": { fontWeight: 500, mb: '15px' } }}>
                        {ReactHtmlParser(adDesc?.desc)}
                    </Typography>
                </Box>}

                <Stack component={'aside'} gap={'20px'} minWidth='20rem' sx={{ ml: 'auto', ":only-of-type": { width: { sm: 'auto', xs: '100%' } } }}>
                    {iconList?.icons.data?.length && <Stack flexDirection={'row'} height='fit-content' gap='20px' justifyContent={'center'} sx={{ backgroundColor: 'white', p: "20px", boxShadow: 0, borderRadius: '8px', width: '100%' }}>
                        <IconButton sx={{ fontSize: '30px', p: '12px', backgroundColor: '#eef3f7', borderRadius: '8px', "&:hover": { color: 'primary.main', backgroundColor: 'secondary.main' } }} href={`/users/${content?.attributes?.author?.data?.attributes?.username}`}>
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
                        <Stack flexDirection={'row'} height='fit-content' gap='20px' alignItems={'center'} >
                            <Avatar sx={{ width: '60px', height: '60px', backgroundColor: 'secondary.main', fontSize: '40px' }} alt={content?.attributes?.author?.data?.attributes?.username} src={`${process.env.REACT_APP_BACKEND_URL}${getImg(content?.attributes?.author.data?.attributes?.avatar, 'thumbnail').url}`} />
                            <Typography variant="h6">{content?.attributes?.author?.data?.attributes?.username}</Typography>

                        </Stack>
                        <Button href={`https://api.whatsapp.com/send?phone=${content?.attributes?.author?.data?.attributes?.phone}`} variant='contained' color='success' disableElevation sx={{ mt: '15px', width: '100%', py: '10px', }} startIcon={<Icon list={iconList?.icons.data} name='whatsApp' />} target='_blank'>
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
                </Stack>
            </Stack>
            <AdModal isOpen={isOpen} handleClose={() => setIsOpen(false)} content={{ img: getImages(content?.attributes?.images, 'full')[0], title: content?.attributes?.title, url: `${siteUrl}/ads/${content?.attributes?.slug}`, priceTag: content?.attributes?.price?.tag }} />
        </Container >
    )
}

export default AdContent