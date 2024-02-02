import React, {FC, useEffect, useState} from "react";
import Carousel from "react-material-ui-carousel";
import {CAROUSEL_ITEMS} from "../../constants";
import Box from "@mui/material/Box";
import Card from "../../components/Card/Card";
import axios from '../../axios'
import {useQuery} from 'react-query'
import {CircularProgress} from "@mui/material";
import {queryClient} from "../../index";
import {IAutData, ICard} from "../../types";

const Main:FC = () => {

    const authData:IAutData|undefined = queryClient.getQueryData(["login"]);

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
            <Box className="text-lg my-[40px]">
                <Box>Hello! My names is Yakov Kondratev.</Box>
                <Box>I am FullStack Developer and can do tasks related to PHP, CSS, HTML, JS, SQL, <b>React and Node.js</b></Box>
                <Box>It's my pet project. You can create new posts, set avatar or visit my social networks.</Box>
            </Box>
            {!isLoading && <Box className='flex my-[40px]'>
                {cards.length ? cards.map((c:ICard)=><Card title={c.title} content={c.content} link={""}/>)
                    : <Box className="m-auto text-5xl text-[#1976d2]">No post yet</Box>
                }
            </Box>}
        </>
    )
}

export default Main