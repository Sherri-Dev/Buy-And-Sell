import Container from '@mui/material/Container'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import SideBarLayout from '../../components/shared/SideBarLayout'
import qs from 'qs';
import { useEffect } from 'react';
import NotFound from '../../slices/NotFound';
import UserInfo from './UserInfo';
import { Box } from '@mui/system';
import UserAds from './UserAds';
import Loading from '../../slices/Loading';

const User = ({ headerHeight }) => {
    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const { slug } = useParams();
    const strapiQuery = qs.stringify({
        filters: {
            slug: {
                $eq: slug
            }
        },
        populate: 'deep'
    })
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/users/?${strapiQuery}`).then(res => res.json()).then(res => { setUser(res[0]); setIsLoading(false) }).catch(err => { console.log(err); setIsLoading(false) });
    }, []);

    if (!isLoading && !user) {
        return <NotFound />
    } else if (isLoading) {
        return <Loading />
    }



    return (
        <Box sx={{ pt: headerHeight + 50 + 'px', pb: '50px', backgroundColor: '#eeeeee' }} >
            <Container >
                <SideBarLayout
                    mainContent={<UserAds ads={user?.ads} />}
                    asideContent={<UserInfo user={user} />}
                    options={{ asidePos: 'left', asideSize: '22rem', flipVertically: true }}
                />
            </Container>
        </Box>
    )
}

export default User