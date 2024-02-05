import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Modal} from '@mui/material';
import Box from "@mui/material/Box";
import {FC, useState} from "react";
import Button from "@mui/material/Button";
import axios from "../../axios";
import {useSnackbar} from "notistack";
import {queryClient} from "../../index";
type CardPort = {
    isDeleteModalOpen: boolean
    setIsDeleteModalOpen: (value: boolean) => void
    id: number
}
const ModalDelete:FC<CardPort> = ({id, isDeleteModalOpen, setIsDeleteModalOpen}) => {
    const { enqueueSnackbar } = useSnackbar()
    const deletePost = () => {
            console.log(id)
            axios.delete(`/post?id=${id}`).then((res) =>{
            enqueueSnackbar(`Post has been deleted`, {variant: 'success'})
            queryClient.refetchQueries(['posts'], { active: true })
            setIsDeleteModalOpen(false)
        }).catch((e)=>{
            enqueueSnackbar(`Delete error`, {variant: 'error'})
        })
    }

    return (
        <>
            <Modal
                open={isDeleteModalOpen}
                onClose={()=>setIsDeleteModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    borderRadius: '5px',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Do you want to delete post?
                    </Typography>
                    <Box className="mt-4 flex justify-center">
                        <Button
                            color="error"
                            variant="contained"
                            style={{marginRight: '20px'}}
                            onClick={deletePost}
                        >Yes</Button>
                        <Button
                            variant="contained"
                            onClick={()=> setIsDeleteModalOpen(false)}
                        >No</Button>
                    </Box>
                </Box>
            </Modal>
            </>
    );
}

export default ModalDelete;