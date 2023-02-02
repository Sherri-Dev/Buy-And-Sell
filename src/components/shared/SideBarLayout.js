import { Box, Stack } from '@mui/material'
import React from 'react'

const SideBarLayout = ({ mainContent = null, asideContent = null, options = { asidePos: 'right', asideSize: '20rem' } }) => {
    const { asidePos, asideSize } = options;
    return (
        <Stack sx={{ flexDirection: { xs: 'column', md: asidePos === "right" ? 'row' : 'row-reverse' } }} gap='20px'>
            <Box flexGrow={1}>{mainContent}</Box>
            <Stack component={'aside'} gap={'20px'} minWidth={asideSize} width={asideSize} sx={{ ":only-child": { ml: asidePos === 'right' ? 'auto' : '0px', mr: asidePos === 'left' ? 'auto' : '0px', width: { sm: 'auto', xs: '100%' } } }}>{asideContent}</Stack>
        </Stack>
    )
}

export default SideBarLayout