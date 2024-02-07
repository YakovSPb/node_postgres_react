import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardHeader, CardMedia} from '@mui/material';
import Box from "@mui/material/Box";
import {FC, useState} from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {ICard} from "../../types";
import ModalDelete from "../ModalDelete/ModalDelete";
import ModalEdit from "../ModalEdit/ModalEdit";
import {Link} from "react-router-dom";
type CardPort = {
    isOwner: boolean
    data: ICard
}
const Card:FC<CardPort> = ({data, isOwner}) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const {id, title,content, url} = data

    return (
        <>
            <ModalDelete id={id} isDeleteModalOpen={isDeleteModalOpen} setIsDeleteModalOpen={setIsDeleteModalOpen}/>
            <ModalEdit defaultData={data} isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen}/>
        <Box className='w-2/6 mb-4'>
            <CardHeader
                action={
                    isOwner && <>
                        <IconButton aria-label="settings">
                            <EditIcon onClick={()=> setIsEditModalOpen(true)} sx={{ fontSize: 17 }} />
                        </IconButton>
                        <IconButton aria-label="settings">
                            <DeleteForeverIcon onClick={()=> setIsDeleteModalOpen(true)} sx={{ fontSize: 17 }}/>
                        </IconButton>
                    </>
                }
            />
                <CardMedia
                    component="img"
                    height="140"
                    image={url || '/images/empty.jpg'}
                    alt="green iguana"
                    className={'p-4 bg-cover h-[250px]'}
                />
               <Link to={`/post/${data.id}`}><CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography className={'max-h-[300px] overflow-hidden'} variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
               </Link>
        </Box>
            </>
    );
}

export default Card