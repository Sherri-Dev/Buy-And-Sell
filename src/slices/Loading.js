import { Box } from '@mui/system'
import React from 'react'
import RingLoader from "react-spinners/RingLoader";
const Loading = ({ loading = true, rmBg, color = "#FFF200", size = 15, ...props }) => {
    return (
        <Box sx={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            backgroundColor: rmBg ? "transparent" : "rgb(0,0,0, 80%)",
            zIndex: 10000000000,
            color: "white",
            fontSize: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            <RingLoader
                color={color}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </Box>
    )
}

export default Loading