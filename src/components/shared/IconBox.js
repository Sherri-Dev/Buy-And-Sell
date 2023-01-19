import { Icon, IconButton, Stack, SvgIcon, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useState } from 'react';
const IconBox = ({ title = 'Phone :', desc = '453646', theme = "advertise", iconPath, icon = <LocalPhoneIcon fontSize='inherit' />, hideDesc = true }) => {
    const [showDesc, setShowDesc] = useState(!hideDesc)

    const themes = useMemo(() => ({
        info: {
            bg: '#edf7ed',
            border: '#a3e0af',
            icon: '#4dae51'
        },
        advertise: {
            bg: '#fff9e8',
            border: '#ffc220',
            icon: '#ffc220'
        }
    }), []);
    return (
        <Stack flexDirection={'row'} flexWrap='wrap' gap='15px' padding={'20px 22px'} sx={{ backgroundColor: themes[theme].bg, border: `2px dashed ${themes[theme].border}`, borderRadius: '8px', width: 'fit-content', cursor: 'pointer' }} onClick={() => setShowDesc(() => !showDesc)}>

            {
                iconPath ? (
                    <SvgIcon sx={{ color: themes[theme].icon, fontSize: '28px' }}>

                    </SvgIcon>
                ) :
                    (
                        <Icon sx={{ color: themes[theme].icon, fontSize: '28px' }}>
                            {icon}
                        </Icon>
                    )

            }

            <Typography sx={{ color: 'black' }} fontSize='18px' fontWeight={'500'}>{title}</Typography>

            {
                !showDesc ? (
                    <Typography variant='subtitle1' sx={{ textDecoration: 'underline' }} color={'GrayText'} >Click to Show</Typography>
                ) : (
                    <Typography variant='subtitle1' color={'GrayText'}>{desc}</Typography>
                )
            }

        </Stack>
    )
}

export default IconBox