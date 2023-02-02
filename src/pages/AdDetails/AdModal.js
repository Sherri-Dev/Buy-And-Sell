import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Snackbar, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const AdModal = ({ isOpen, handleClose, content }) => {
    const [isSnackBar, setIsSnackBar] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText(content?.url);
        setIsSnackBar(true)
    }
    return (
        <Dialog
            open={isOpen}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            maxWidth='sm'
        >
            <DialogActions sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1.5px solid rgb(0 0 0 / 18%)' }}>
                <Typography color='secondary'>Share</Typography>
                <IconButton onClick={handleClose} sx={{ color: 'rgb(0 0 0 / 25%)' }}><CloseIcon /></IconButton>
            </DialogActions>
            <Stack flexDirection={{ sm: 'row' }} sx={{ margin: '20px' }}>
                <img src={`${process.env.REACT_APP_BACKEND_URL}${content?.img.url}`} alt={content?.alt} style={{ borderRadius: '4px', maxWidth: '350px', minWidth: "220px", height: '100%', maxHeight: '200px', overflow: 'hidden' }} />
                <DialogContent sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', p: { xs: '10px 0px', sm: '0px 10px' } }}>
                    <DialogContentText id="alert-dialog-slide-description">
                        <DialogTitle pl='0px !important' pt='0px !important' color='secondary'>{content?.title}</DialogTitle>
                        <Typography color={'primary'} variant='h6' fontWeight={'500'}>{content?.priceTag} Price</Typography>
                    </DialogContentText>
                    <Typography sx={{ color: 'grey !important', backgroundColor: 'rgb( 0 0 0 / 90%)', p: '5px 10px', borderRadius: '4px', mt: '10px', cursor: 'pointer' }} onClick={handleCopy}>{content?.url}</Typography>
                </DialogContent>
            </Stack>
            <Snackbar
                open={isSnackBar}
                autoHideDuration={3000}
                onClose={() => setIsSnackBar(false)}
                message="Copied to clibboard"
                anchorOrigin={{ vertical: "center", horizontal: "center" }}
                sx={{ '.css-1d9qac8-MuiPaper-root-MuiSnackbarContent-root': { backgroundColor: 'success.main' } }}
            />
        </Dialog>
    )
}

export default AdModal