import * as React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Login = () => {
    const [isRegister, setIsRegister] = useState(false)
    const toggle = () => setIsRegister(!isRegister)

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                {isRegister ? <RegisterForm toggle={toggle}/> : <LoginForm toggle={toggle}/> }
            </Container>
        </ThemeProvider>
    );
}

export default Login