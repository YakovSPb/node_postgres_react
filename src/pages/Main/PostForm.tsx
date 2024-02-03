import * as React from 'react';
import {useQuery} from "react-query";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import {FC, useState} from "react";
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import axios from "../../axios";
import {useSnackbar} from "notistack";
import {
    IAutData,
    IDataPostForm,
    IPostFormField,
} from "../../types";
import {POST_FORM_FIELDS} from "../../constants";
import {queryClient} from "../../index";

const PostForm:FC = () => {
    const { enqueueSnackbar } = useSnackbar()
    const authData:IAutData|undefined = queryClient.getQueryData(["login"]);
    const [data, setDate] = useState<IDataPostForm | null>(null)

    const { data: dataPost, isLoading } = useQuery({
        queryKey: ['login'],
        enabled: !!(data?.title && data?.content),
        queryFn: () => axios.post('/post', {...data, userId: authData?.id}).then((res) => {
            enqueueSnackbar('Post has been created', {variant: 'success'})
            queryClient.refetchQueries(['posts'], { active: true })
            setDate(null)
           return res.data
        }).catch(()=>{
            enqueueSnackbar('Create post error', {variant: 'error'})
        })
    })

    const FormikSchema = yup.object().shape({
        title: yup.string().required('Required').min(5, 'Too Short!').max(50, 'Too Long!'),
        content: yup.string()
        .min(5, 'Too Short!')
        .max(2000, 'Too Long!')
        .required('Required'),
    });
      return (
                <Formik
                    initialValues={{
                        title: '',
                        content: '' }}
                    validationSchema={FormikSchema}
                    onSubmit={(values,{setSubmitting, resetForm}) => {
                        setDate(values)
                        resetForm()
                        setSubmitting(false);
                    }}
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
                                <Typography component="h1" variant="h5">Add new post</Typography>
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                                    {POST_FORM_FIELDS.map((field:IPostFormField)=> (
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            id={field.key}
                                            label={field.label}
                                            name={field.key}
                                            multiline={!!field.type}
                                            rows={field.type && 4}
                                            maxRows={field.type && 8}
                                            autoComplete={field.key}
                                            error={!!(errors[field.key] && touched[field.key] && dirty)}
                                            helperText={(errors[field.key] && touched[field.key]) && errors[field.key]}
                                            value={values[field.key]}
                                            onChange={handleChange}
                                        />
                                    ))}
                                    <Button
                                        onClick={() => {
                                            handleSubmit()
                                        }}
                                        disabled={isLoading}
                                        fullWidth
                                        variant="contained"
                                        sx={{mt: 3, mb: 2}}
                                    >
                                        Add post
                                    </Button>
                                </Box>
                            </Box>
                        </Form>
                    )}
                </Formik>
      );
}

export default PostForm