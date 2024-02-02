import * as React from 'react';
import {useQuery} from "react-query";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {FC, useEffect, useState} from "react";
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import {useNavigate} from 'react-router-dom';
import axios from "../../axios";

type LoginFormProps = {
    toggle: () => void
}

type IData = {
    email: string
    password: string
}

const LoginForm:FC<LoginFormProps> = ({toggle}) => {
    const navigate = useNavigate();
    const [data, setDate] = useState<IData | null>(null)

    const { data: dataAuth } = useQuery({
        queryKey: ['login'],
        enabled: !!(data?.email && data?.password),
        queryFn: () => axios.post('/login', data).then((res) => res.data)
    })

    useEffect(() => {
        if(dataAuth){
            navigate('/')
        }
    }, [dataAuth]);


    const FormikSchema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Required'),
        password: yup.string()
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
                    onSubmit={(values) => setDate(values)}
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
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        error={!!(errors.email && touched.email && dirty)}
                                        helperText={(errors.email && touched.email) && errors.email}
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        error={!!(errors.password && touched.password)}
                                        helperText={errors.password}
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    {/*<FormControlLabel*/}
                                    {/*    control={<Checkbox value="remember" color="primary" />}*/}
                                    {/*    label="Remember me"*/}
                                    {/*/>*/}
                                    <Button
                                        onClick={()=> {
                                            handleSubmit()
                                        }}
                                        fullWidth
                                        variant="contained"
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