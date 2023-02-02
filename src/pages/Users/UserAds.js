import { Grid } from '@mui/material';
import React from 'react'
import Ad from '../../components/global/Ad'
import UserAd from './UserAd';

const UserAds = ({ ads }) => {
    console.log(ads);
    return (
        <Grid container spacing={{ xs: 2, md: 3 }}>
            {ads?.map((ad) => {
                return (
                    <Grid item xs={12} key={ad.id}>
                        <UserAd adData={ad} />
                    </Grid>
                );
            })}
        </Grid>
    )
}

export default UserAds