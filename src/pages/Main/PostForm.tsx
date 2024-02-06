import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import {FC, useEffect, useState} from "react";
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import axios from "../../axios";
import {useSnackbar} from "notistack";
import {
    IAutData, ICard,
    IPostFormField,
} from "../../types";
import {POST_FORM_FIELDS} from "../../constants";
import {queryClient} from "../../index";
import FileDrop from "../../components/FileDrop/FilteDrop";

type IPostFormProps = {
    defaultData?:ICard
    setIsEditModalOpen?: (value: boolean) => void
}

const PostForm:FC<IPostFormProps> = ({defaultData, setIsEditModalOpen}) => {
    const { enqueueSnackbar } = useSnackbar()
    const authData:IAutData|undefined = queryClient.getQueryData(["authme"]);
    const [isLoading, setIsloading] = useState(false)
    const [selectedFile, setSelectedFile] = useState<any>(null)

    const handleFileUpload = async () =>{
        if(!selectedFile) return
        // @ts-ignore
        const formData = new FormData()
        formData.append('image', selectedFile);
       return axios.post('/upload', formData)
    }

    useEffect(() => {
        console.log('selectedFile',selectedFile)
    }, [selectedFile]);


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
                        title: defaultData?.title || '',
                        content: defaultData?.content || '',
                    }}
                    validationSchema={FormikSchema}
                    onSubmit={(values,{setSubmitting, resetForm}) => {
                        setIsloading(true)

                            handleFileUpload().then(res=> {
                                    console.log(res)
                            })
                        console.log('promise')

                        //     if(defaultData) {
                        //     axios.put(`/post`, {data:{
                        //         id: defaultData.id,
                        //         ...values
                        //         }}).then((res) => {
                        //         enqueueSnackbar('Post has been updated', {variant: 'success'})
                        //         queryClient.refetchQueries(['posts'], { active: true })
                        //         if(setIsEditModalOpen) {
                        //             setIsEditModalOpen(false)
                        //         }
                        //         queryClient.refetchQueries(['posts'], { active: true })
                        //     }).catch(()=>{
                        //         enqueueSnackbar('Update post error', {variant: 'error'})
                        //     })
                        //     } else {
                        //         axios.post('/post', {...values, userId: authData?.id}).then((res) => {
                        //             enqueueSnackbar('Post has been created', {variant: 'success'})
                        //             queryClient.refetchQueries(['posts'], { active: true })
                        //             return res.data
                        //         }).catch(()=>{
                        //             enqueueSnackbar('Create post error', {variant: 'error'})
                        //         })
                        // }
                        // resetForm()
                        // setSubmitting(false);
                        // setIsloading(false)
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
                                <Typography component="h1" variant="h5">{defaultData ? 'Edit post' : 'Add new post'}</Typography>
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                                    {POST_FORM_FIELDS.map((field:IPostFormField)=> (
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            label={field.label}
                                            name={field.key}
                                            error={!!(errors[field.key] && touched[field.key] && dirty)}
                                            helperText={(errors[field.key] && touched[field.key]) && errors[field.key]}
                                            value={values[field.key]}
                                            onChange={handleChange}
                                        />
                                    ))}

                                    <Box sx={{mt: 2}}>
                                    <TextField
                                        variant={"outlined"}
                                        fullWidth
                                        label={'Image file'}
                                        name={'fileName'}
                                        value={selectedFile?.name}
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                      />
                                    <FileDrop selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
                                    </Box>
                                    <Box className="flex justify-center">
                                    <Button
                                        onClick={() => handleSubmit()}
                                        disabled={isLoading}
                                        fullWidth={!defaultData}
                                        color={defaultData ? 'success' : 'secondary'}
                                        variant="contained"
                                        sx={{mt: 3, mb: 2}}
                                    >
                                        {defaultData ? 'Edite' : 'Add'}  post
                                    </Button>
                                    {setIsEditModalOpen && <Button
                                        variant="contained"
                                        sx={{mt: 3, mb: 2, ml:5}}
                                        onClick={()=> setIsEditModalOpen(false)}
                                    >Cancel</Button>}
                                    </Box>
                                </Box>
                            </Box>
                        </Form>
                    )}
                </Formik>
      );
}

export default PostForm