import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { Button, FormControl, FormHelperText, Input, InputLabel, SvgIcon, Typography } from '@mui/material';
import Btn from '../shared/Btn';
const Form = ({ formData }) => {
    return (

        formData ? (
            <form>
                <Typography variant='h6' component={'h2'} fontWeight='600' mt={'25px'} mb='10px' > {formData.title}</Typography>
                {
                    formData.inputs.map(inp => {
                        return (<FormControl variant='filled' sx={{ mb: "8px" }} fullWidth key={inp.id}>
                            <InputLabel htmlFor="my-input">{inp?.label}</InputLabel>
                            <Input id="" type={inp?.type} aria-describedby="my-helper-text" multiline={inp?.isTextarea} minRows={3} />
                        </FormControl>)
                    })

                }
                <Btn type="submit" sx={{ mt: "10px" }} color={formData.submitBtn?.themeSelector.theme}
                    variant={formData.submitBtn?.variant}
                    size={formData.submitBtn.size}
                    fullWidth={formData.submitBtn.fullWidth}
                    iconPos={formData.submitBtn?.iconPos}
                    iconPath={formData.submitBtn.icon?.data?.attributes.path}
                    text={formData.submitBtn?.label}
                ></Btn>
            </form>
        ) : null
    )
}

export default Form