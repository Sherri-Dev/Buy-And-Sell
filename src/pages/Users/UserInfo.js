import { Avatar, Divider, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import IconBox from '../../components/shared/IconBox';
import { getImg } from '../../helpers/formatApi';
import ReactHtmlParser from 'react-html-parser'
import Form from '../../components/global/Form';
import useForm from '../../hooks/useForm';

const UserInfo = ({ user }) => {
    const { formData } = useForm("contact-form")
    const soldAds = user?.ads.filter(ad => ad.isSold)
    return (
        <Box sx={{ backgroundColor: 'white', py: '20px', borderRadius: '8px', border: '1px solid lightgrey' }}>
            <Box >
                <Avatar sx={{ width: '80px', height: '80px', backgroundColor: 'secondary.main', fontSize: '40px', mx: 'auto' }} alt={user?.username} src={`${process.env.REACT_APP_BACKEND_URL}${getImg(user?.avatar, 'thumbnail').url}`} />
                <Typography variant="h6" sx={{ color: 'secondary.main', textAlign: 'center', mt: '10px', fontWeight: 500 }}>{user?.username}</Typography>
                <Stack flexDirection={'row'} mt='20px'>
                    <Box sx={{ textAlign: 'center', backgroundColor: '#fdebec', flex: 1, p: '20px' }}>
                        <Typography fontSize='24px' sx={{ color: 'danger.main' }} fontWeight='600'>
                            {soldAds?.length}
                        </Typography>
                        <Typography fontSize='20px' fontWeight='500' >
                            Ad Sold
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', backgroundColor: '#ebf6fc', flex: 1, p: '20px' }}>
                        <Typography fontSize='24px' sx={{ color: 'info.main' }} fontWeight='600'>
                            {user?.ads?.length}
                        </Typography>
                        <Typography fontSize='20px' fontWeight='500'>
                            Total Listings
                        </Typography>
                    </Box>
                </Stack>
            </Box>
            <Box sx={{ px: '20px' }}>
                {user?.iconBoxes?.map(iconBox =>
                (<>
                    <IconBox iconComp={iconBox} />
                    <Divider />
                </>)
                )}
                <Typography variant='h6' component={'h2'} fontWeight='600' mt={'25px'} mb='10px' >
                    Introduction
                </Typography>
                <Typography >
                    {ReactHtmlParser(user?.intro)}
                </Typography>
            </Box>
            <Box sx={{ px: "20px", mt: "10px" }}>
                <Form formData={formData} />
            </Box>
        </Box>
    )
}

export default UserInfo