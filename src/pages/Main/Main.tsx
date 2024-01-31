import React, {FC, useEffect} from "react";
import Carousel from "react-material-ui-carousel";
import {CAROUSEL_ITEMS} from "../../constants";
import Box from "@mui/material/Box";
import Card from "../../components/Card/Card";
import axios from '../../axios'

const Main:FC = () => {
    const CARDS = [
        {
            title: 'Lizard',
            text: 'Lizards are a widespread group of squamate reptiles, with over 6,000\n species, ranging across all continents except Antarctica',
            link: ''
        },
        {
            title: 'Lizard2',
            text: 'Lizards are a widespread group of squamate reptiles, with over 6,000\n species, ranging across all continents except Antarctica',
            link: ''
        },
        {
            title: 'Lizard3',
            text: 'Lizards are a widespread group of squamate reptiles, with over 6,000\n species, ranging across all continents except Antarctica',
            link: ''
        },
    ]


    useEffect(() => {
        axios.get('/user').then(data=>{
            console.log('data',data)
        }).catch(err=>console.log(err))
    }, []);

    return(
        <>
            <Carousel className={'mt-10'}>
                {CAROUSEL_ITEMS.map((item, index) =>
                    <Box key={index}>{item.img}</Box>)}
            </Carousel>
            <Box className='flex my-[40px]'>
                {CARDS.map(c=><Card title={c.title} text={c.text} link={c.link}/>)}
            </Box>
        </>
    )
}

export default Main