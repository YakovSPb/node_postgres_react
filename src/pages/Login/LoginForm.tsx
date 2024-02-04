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
import {FC, useState} from "react";
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import {useNavigate} from 'react-router-dom';
import { useSnackbar} from "notistack";

import axios from "../../axios";
import {IDataLoginForm, ILoginFormField} from "../../types";
import {LOGIN_FORM_FIELDS} from "../../constants";

type LoginFormProps = {
    toggle: () => void
}

const LoginForm:FC<LoginFormProps> = ({toggle}) => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar()
    const [data, setDate] = useState<IDataLoginForm | null>(null)

   useQuery({
        queryKey: ['login'],
        enabled: !!(data?.email && data?.password),
        queryFn: () => axios.post('/login', data).then((res) => {
            window.localStorage.setItem('token', res.data.token)
            enqueueSnackbar(`Welcome ${res.data.name}!`, {variant: 'success'})
            navigate('/')
        }).catch(()=>{
            enqueueSnackbar('User not found', {variant: 'error'})
        })
    })

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
                          handleSubmit,
                          dirty,
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
                                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                                    <LockOutlinedIcon/>
                                </Avatar>
                                <Typography component="h1" variant="h5">Login</Typography>
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                                    {LOGIN_FORM_FIELDS.map((field:ILoginFormField)=> (
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            id={field.key}
                                            label={field.label}
                                            name={field.key}
                                            autoComplete={field.key}
                                            error={!!(errors[field.key] && touched[field.key] && dirty)}
                                            helperText={(errors[field.key] && touched[field.key]) && errors[field.key]}
                                            value={values[field.key]}
                                            onChange={handleChange}
                                        />
                                    ))}
                                    {/*<FormControlLabel*/}
                                    {/*    control={<Checkbox value="remember" color="primary" />}*/}
                                    {/*    label="Remember me"*/}
                                    {/*/>*/}
                                    <Button
                                        onClick={() => {
                                            handleSubmit()
                                        }}
                                        fullWidth
                                        variant="contained"
                                        sx={{mt: 3, mb: 2}}
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