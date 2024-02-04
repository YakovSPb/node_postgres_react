import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardHeader, Fade, Modal} from '@mui/material';
import Box from "@mui/material/Box";
import {FC, useState} from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from "@mui/material/Button";
import axios from "../../axios";
import {ICard} from "../../types";
import {useSnackbar} from "notistack";
import {queryClient} from "../../index";
type CardPort = {
    isOwner: boolean
    data: ICard
}
const Card:FC<CardPort> = ({data, isOwner}) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const {id, title, content} = data
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
        <Box className='w-2/6 mb-4'>
            <CardActionArea>
                {/*<CardMedia*/}
                {/*    component="img"*/}
                {/*    height="140"*/}
                {/*    image="/static/images/cards/contemplative-reptile.jpg"*/}
                {/*    alt="green iguana"*/}
                {/*/>*/}
                <CardHeader
                    action={
                        isOwner && <>
                        <IconButton aria-label="settings">
                            <EditIcon sx={{ fontSize: 17 }} />
                        </IconButton>
                        <IconButton aria-label="settings">
                            <DeleteForeverIcon onClick={()=> setIsDeleteModalOpen(true)}sx={{ fontSize: 17 }}/>
                        </IconButton>
                    </>
                    }
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Box>
            </>
    );
}

export default Card