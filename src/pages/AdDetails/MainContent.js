import { Box, Typography } from '@mui/material'
import React from 'react'

const MainContent = ({ content }) => {
    return (
        <Box flexGrow={1} component='article' sx={{
            backgroundColor: 'white', p: "36px 30px",
            borderRadius: "8px",
            boxShadow: 0,
        }}>
            <Box sx={{ "& h2": { fontWeight: 500, mb: '15px' } }}>
                {content}
            </Box>
        </Box>

    )
}

export default MainContent