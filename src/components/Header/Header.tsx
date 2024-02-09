import React, {FC, useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import {Link, useNavigate} from "react-router-dom";
import {queryClient} from "../../index";
import {PAGES} from "../../constants";
import {IAutData} from "../../types";

const Header:FC = () =>  {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const authData:IAutData|undefined = queryClient.getQueryData(["authme"]);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logout = () => {
        handleCloseNavMenu()
        queryClient.removeQueries()
        window.localStorage.removeItem('token')
        navigate('/login')
    };

    return (
        <AppBar className='header' position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
               <Logo className={'w-10 h-10 mr-5'} title={'it-meet'}/>
                    <Link className={'mr-5 font-bold text-xl'} to="/">
                        IT-MEET
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {PAGES.map((page) => (
                                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                                    <Link to={page.path}><Typography textAlign="center">{page.label}</Typography></Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {PAGES.map((page) => (
                            <Link key={page.label} to={page.path}>
                            <Button

                                // onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.label}
                            </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                {authData? <>
                                        <span className='text-white  text-base mr-4'>{authData.name}</span> <Avatar alt="Remy Sharp" src="/images/avatar.png" />
                                    </>
                                    :<Avatar alt="Remy Sharp" src="" />}
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {/*{SETTINGS.map((setting) => (*/}
                            {/*    <MenuItem key={setting.path} >*/}
                            {/*        <Link to={setting.path}>*/}
                            {/*            <Typography textAlign="center">{setting.label}</Typography>*/}
                            {/*        </Link>*/}
                            {/*    </MenuItem>*/}
                            {/*))}*/}
                                {authData ?  <MenuItem><Typography onClick={logout} textAlign="center">Logout</Typography></MenuItem> :
                                    <MenuItem>
                                        <Link to='/login'>
                                            <Typography textAlign="center">Login</Typography>
                                        </Link>
                                    </MenuItem>
                                }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
