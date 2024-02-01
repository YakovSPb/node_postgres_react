import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {FC, useState} from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

type LoginFormProps = {
    toggle: () => void
}

const LoginForm:FC<LoginFormProps> = ({toggle}) => {

    const FormikSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
        .min(5, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    });
      return (
                <Formik
                    initialValues={{
                        email: '',
                        password: '' }}
                    validationSchema={FormikSchema}
                    onSubmit={(values) => {

                            console.log('value', values)
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          dirty,
                          isValid
                          /* and other goodies */
                      }) => (
                        <Form onSubmit={(e)=> {
                            e.preventDefault()
                        }}>
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">Login</Typography>
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && touched.email && errors.email}
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    {errors.password && touched.password && errors.password}
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                    <Button
                                        onClick={()=> handleSubmit()}
                                        fullWidth
                                        variant="contained"
                                        disabled={isSubmitting || !dirty ||!isValid}
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Login
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="#" variant="body2">
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link className={'cursor-pointer'} onClick={toggle} variant="body2">
                                                Don't have an account? Register
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Form>
                    )}
                </Formik>
    );
}

export default LoginForm