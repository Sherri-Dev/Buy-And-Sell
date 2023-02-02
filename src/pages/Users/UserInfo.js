import { Avatar, Divider, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useMemo } from 'react'
import IconBox from '../../components/shared/IconBox';
import { getComponentsFromDZ, getImg } from '../../helpers/formatApi';
import ReactHtmlParser from 'react-html-parser'

const UserInfo = ({ user }) => {
    return (
        <Box sx={{ backgroundColor: 'white', py: '20px', borderRadius: '8px', border: '1px solid lightgrey' }}>
            <Box >
                <Avatar sx={{ width: '80px', height: '80px', backgroundColor: 'secondary.main', fontSize: '40px', mx: 'auto' }} alt={user?.username} src={`${process.env.REACT_APP_BACKEND_URL}${getImg(user?.avatar, 'thumbnail').url}`} />
                <Typography variant="h6" sx={{ color: 'secondary.main', textAlign: 'center', mt: '10px', fontWeight: 500 }}>{user?.username}</Typography>
                <Stack flexDirection={'row'} mt='20px'>
                    <Box sx={{ textAlign: 'center', backgroundColor: '#fdebec', flex: 1, p: '20px' }}>
                        <Typography fontSize='24px' sx={{ color: 'danger.main' }} fontWeight='600'>
                            0
                        </Typography>
                        <Typography fontSize='20px' fontWeight='500' >
                            Ad Sold
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', backgroundColor: '#ebf6fc', flex: 1, p: '20px' }}>
                        <Typography fontSize='24px' sx={{ color: 'info.main' }} fontWeight='600'>
                            9
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
                <Typography variant='h6' component={'h2'} fontWeight='600' mt={'30px'} mb='10px' >
                    Introduction
                </Typography>
                <Typography >
                    {ReactHtmlParser(user?.intro)}
                </Typography>
            </Box>

        </Box>
    )
}

export default UserInfo