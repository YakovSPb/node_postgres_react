import React, {FC, useEffect, useState} from "react";
import Carousel from "react-material-ui-carousel";
import {CAROUSEL_ITEMS} from "../../constants";
import Box from "@mui/material/Box";
import Card from "../../components/Card/Card";
import axios from '../../axios'
import {useQuery} from 'react-query'
import {CircularProgress} from "@mui/material";

type ICard = {
    title: string
    content: string
}

const Main:FC = () => {

    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => axios.get('/post?id=16').then((res) =>res.data)
    })

    const cards = data || []

    return(
        <>
            <Carousel className={'mt-10'}>
                {CAROUSEL_ITEMS.map((item, index) =>
                    <Box key={index}>{item.img}</Box>)}
            </Carousel>
            {isLoading && <CircularProgress className={'my-[40px]'}/>}
            {!isLoading && <Box className='flex my-[40px]'>
                {cards.length ? cards.map((c:ICard)=><Card title={c.title} content={c.content} link={""}/>)
                    : <Box className="m-auto text-5xl text-[#1976d2]">No post yet</Box>
                }
            </Box>}
        </>
    )
}

export default Main