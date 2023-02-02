import { Icon, IconButton, Stack, SvgIcon, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import ReactHtmlParser from 'react-html-parser';
import { useState } from 'react';
const IconBox = ({ iconComp }) => {
    const { title, desc, theme, hideDesc, isBorder, isBg, icon } = iconComp;
    const iconPath = icon?.data?.attributes.path || icon?.path;
    const [showDesc, setShowDesc] = useState(!hideDesc);
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
        },
        alert: {
            bg: '#fdebec',
            border: '#e3262f',
            icon: '#e3262f'
        },

    }), []);

    return (
        <Stack flexDirection={'row'} flexWrap='wrap' gap={isBorder ? '15px' : '7px'} padding={isBorder ? '20px 22px' : '20px 0px'} sx={{ backgroundColor: isBg && themes[theme].bg, border: isBorder && `2px dashed ${themes[theme].border}`, borderRadius: '8px', width: 'fit-content', cursor: hideDesc && 'pointer' }} onClick={() => hideDesc && setShowDesc(() => !showDesc)}>

            {
                iconPath && (
                    <SvgIcon sx={{ color: themes[theme].icon, fontSize: '28px' }}>
                        {ReactHtmlParser(iconPath)}
                    </SvgIcon>
                )
            }

            <Typography sx={{ color: themes[theme].icon }} fontSize='18px' fontWeight={'500'}>{title}</Typography>

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