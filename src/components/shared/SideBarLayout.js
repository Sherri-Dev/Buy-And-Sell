import { Box, Stack } from '@mui/material'
import React from 'react'

const SideBarLayout = ({ mainContent = null, asideContent = null, options = { asidePos: 'right', asideSize: '20rem', flipVertically: false } }) => {
    const { asidePos, asideSize, flipVertically } = options;
    return (
        <Stack sx={{ flexDirection: { xs: !flipVertically ? 'column' : "column-reverse", md: asidePos === "right" ? 'row' : 'row-reverse' } }} gap={{ xs: '35px', md: "20px" }}>
            <Box flexGrow={1}>{mainContent}</Box>
            <Stack component={'aside'} gap={'20px'} minWidth={{ xs: "auto", sm: asideSize }} maxWidth={{ md: asideSize }} sx={{ ":only-child": { ml: asidePos === 'right' ? 'auto' : '0px', mr: asidePos === 'left' ? 'auto' : '0px', width: { sm: 'auto', xs: '100%' } } }}>{asideContent}</Stack>
        </Stack>
    )
}

export default SideBarLayout