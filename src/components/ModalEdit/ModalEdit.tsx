import * as React from 'react';
import {Modal} from '@mui/material';
import Box from "@mui/material/Box";
import {FC} from "react";
import PostForm from "../../pages/Main/PostForm";
import {ICard} from "../../types";
type CardPort = {
    isEditModalOpen: boolean
    setIsEditModalOpen: (value: boolean) => void
    defaultData: ICard
}
const ModalEdit:FC<CardPort> = ({defaultData, isEditModalOpen, setIsEditModalOpen}) => {
    return (
        <>
            <Modal
                open={isEditModalOpen}
                onClose={()=>setIsEditModalOpen(false)}
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
                     <PostForm defaultData={defaultData} setIsEditModalOpen={setIsEditModalOpen}/>
                </Box>
            </Modal>
            </>
    );
}

export default ModalEdit;