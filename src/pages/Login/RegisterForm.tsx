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
import {FC, useState} from "react";
import {Form, Formik} from 'formik';
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import {useSnackbar} from "notistack";
import {useQuery} from "react-query";

import {IDataRegisterForm, IRegisterFormField} from "../../types";
import axios from "../../axios";
import {REGISTER_FORM_FIELDS} from "../../constants";

type LoginFormProps = {
    toggle: () => void
}

const LoginForm:FC<LoginFormProps> = ({toggle}) => {
    const { enqueueSnackbar } = useSnackbar()
    const [data, setDate] = useState<IDataRegisterForm | null>(null)

    useQuery({
        queryKey: ['register'],
        enabled: !!(data?.email && data?.password),
        queryFn: () => axios.post('/singup', data).then((res) => {
            enqueueSnackbar('User has been register', {variant: 'success'})
            toggle()
           return res.data
        }).catch(()=>{
            enqueueSnackbar('Mail is already in use', {variant: 'error'})
        })
    })

    const FormikSchema = yup.object().shape({
        name: yup.string().required('Required'),
        email: yup.string().email('Invalid email').required('Required'),
        password: yup.string()
            .min(5, 'Too Short!')
            .max(15, 'Too Long!')
            .required('Required'),
        repeatPassword: yup.string()
            .required('')
            .oneOf([yup.ref('password')], 'Passwords must match')
    });
      return (
          <Formik
              initialValues={{
                  name: '',
                  email: '',
                  password: '',
                  repeatPassword: ','
          }}
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
                          <Typography component="h1" variant="h5">Register</Typography>
                          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                              {REGISTER_FORM_FIELDS.map((field:IRegisterFormField)=> (
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
                              <FormControlLabel
                                  control={<Checkbox value="remember" color="primary" />}
                                  label="Remember me"
                              />
                              <Button
                                  onClick={() => {
                                      handleSubmit()
                                  }}
                                  fullWidth
                                  variant="contained"
                                  sx={{ mt: 3, mb: 2 }}
                              >
                                  Register
                              </Button>
                              <Grid container>
                                  <Grid item xs>
                                      <Link href="#" variant="body2">
                                          Forgot password?
                                      </Link>
                                  </Grid>
                                  <Grid item>
                                      <Link className={'cursor-pointer'} onClick={toggle} variant="body2">
                                          Do have an account? Login
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