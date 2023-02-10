import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { Button, FormControl, FormHelperText, Input, InputLabel, SvgIcon, Typography } from '@mui/material';
import Btn from '../shared/Btn';
const Form = ({ formData }) => {
    const { title, inputs, links } = formData || { title: "", inputs: [], links: [] };
    console.log(formData);
    return (

        formData ? (
            <form>
                <Typography variant='h6' component={'h2'} fontWeight='600' mt={'25px'} mb='10px' > {title}</Typography>
                {
                    inputs?.map(inp => {
                        return (<FormControl variant='filled' sx={{ mb: "8px" }} fullWidth key={inp.id}>
                            <InputLabel htmlFor="my-input">{inp?.label}</InputLabel>
                            <Input id="" type={inp?.type} aria-describedby="my-helper-text" multiline={inp?.isTextarea} minRows={3} />
                        </FormControl>)
                    })

                }
                <Btn type="submit" sx={{ mt: "10px" }} color={links[0]?.themeSelector.theme}
                    variant={links[0]?.variant}
                    size={links[0]?.size}
                    fullWidth={links[0]?.fullWidth}
                    iconPos={links[0]?.iconPos}
                    iconPath={links[0]?.icon?.data?.attributes.path}
                    text={links[0]?.label}
                ></Btn>
            </form>
        ) : null
    )
}

export default Form