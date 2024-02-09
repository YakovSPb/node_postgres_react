import React, {FC} from "react";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import {SOCIAL_MEDIA_LINKS} from "../../constants";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

const Contact:FC = () => {
    return(
        <>
            <Typography mt={10} gutterBottom variant="h5" component="div">Contact</Typography>
            <Typography variant="body2" color="text.secondary">
                <Grid item xs={6} sm={3} md={2}>
                    <Typography variant="subtitle1" color="text.primary" gutterBottom>
                        SOCIAL MEDIA
                    </Typography>
                    {SOCIAL_MEDIA_LINKS.map(s=> (
                        <IconButton aria-label={s.label} component="a" target={'_blank'} href={s.link}>
                            {s.icon}
                        </IconButton>
                    ))}
                </Grid>
                <Box className={'mt-5'}>
                    <Typography>email: <a href="mailto:itmeetm@gmail.com">itmeetm@gmail.com</a></Typography>
                </Box>
            </Typography>
        </>
    )
}

export default Contact