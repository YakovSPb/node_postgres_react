import React, {FC} from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";
import {Grid} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const Footer:FC = () =>  {
    const socialMediaLinks = {
        facebook: '#',
        twitter: '#',
        instagram: '#',
    };

    return (
        <Box
            className={'footer'}
            sx={{
                bgcolor: '#1976d2',
                color: 'text.secondary',
                py: 3,
                borderTop: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={2} justifyContent="space-between">
                    <Grid item xs={12} sm={6} md={3}>
                        <Box className='flex'>
                        <Logo className={'w-10 h-10 mr-5'} title={'it-meet'}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            IT-MEET
                        </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3} md={6}>
                        <Typography variant="subtitle1" color="text.primary" gutterBottom>
                            MENU
                        </Typography>
                        <Link to="/" className="mr-4">Home</Link>
                        <Link to="/about" className="mr-4">About</Link>
                        <Link to="/contact" className="mr-4">Contact</Link>
                        <Link to="/login" className="mr-4">Login</Link>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" color="text.primary" gutterBottom>
                            SOCIAL MEDIA
                        </Typography>
                        <IconButton aria-label="Facebook" color="inherit" component="a" href={socialMediaLinks.facebook}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="Twitter" color="inherit" component="a" href={socialMediaLinks.twitter}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton aria-label="Instagram" color="inherit" component="a" href={socialMediaLinks.instagram}>
                            <InstagramIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
                    © 2024 Yakov Kondratev . All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}
export default Footer;
