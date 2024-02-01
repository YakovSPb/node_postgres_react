import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from "@mui/material/Box";
import {FC} from "react";

type CardPort = {
    title: string;
    content: string;
    link: string
}
const Card:FC<CardPort> = ({title, content, link}) => {
    return (
        <Box className='w-2/6'>
            <CardActionArea>
                {/*<CardMedia*/}
                {/*    component="img"*/}
                {/*    height="140"*/}
                {/*    image="/static/images/cards/contemplative-reptile.jpg"*/}
                {/*    alt="green iguana"*/}
                {/*/>*/}
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
    );
}

export default Card