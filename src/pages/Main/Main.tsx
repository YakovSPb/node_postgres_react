import React, {FC, useState} from "react";
import Carousel from "react-material-ui-carousel";
import {CAROUSEL_ITEMS} from "../../constants";
import Box from "@mui/material/Box";
import Card from "../../components/Card/Card";
import axios from '../../axios'
import {useQuery} from 'react-query'
import {CircularProgress} from "@mui/material";
import {queryClient} from "../../index";
import {IAutData, ICard} from "../../types";
import Button from "@mui/material/Button";
import PostForm from "./PostForm";
import {Link} from "react-router-dom";

const Main:FC = () => {
    const [isPostFormShow, setIsPostFormShow] = useState(false)
    const authData:IAutData|undefined = queryClient.getQueryData(["authme"]);

    const { isLoading, data } = useQuery({
        queryKey: ['posts'],
        enabled: !!(authData?.id),
        queryFn: () => axios.get(`/posts?id=${authData?.id}`).then((res) =>res.data)
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
            {authData ? <>
            {isPostFormShow && <PostForm/>}
            <Button
                onClick={() => setIsPostFormShow(!isPostFormShow)}
                variant="contained"
                sx={{mt: 5, mb: 7}}
            >
                {isPostFormShow ? 'Hide add post form' : 'Add post'}
            </Button>
            </>
                : <>
                    <Box className="m-auto text-5xl text-[#1976d2]">You are not authorized. Please login or register.</Box>
                   <Link to={'/login'}>
                    <Button
                        variant="contained"
                        sx={{mt: 5, mb: 7}}
                    >
                        Login
                    </Button>
                </Link>
                </>}
            {!isLoading && <Box className='flex flex-wrap my-[40px]'>
                {cards.length ? cards.map((c:ICard)=><Card data={c} isOwner={c.user_id === authData?.id} />)
                    : <Box className="m-auto text-5xl text-[#1976d2]">No post yet</Box>
                }
            </Box>}
        </>
    )
}

export default Main