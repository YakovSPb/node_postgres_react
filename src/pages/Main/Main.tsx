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
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Main:FC = () => {
    const [isPostFormShow, setIsPostFormShow] = useState(false)
    const authData:IAutData|undefined = queryClient.getQueryData(["authme"]);
    const [page, setPage] = useState(1)

    const { isLoading, data } = useQuery({
        queryKey: ['posts', page],
        enabled: !!(authData?.id),
        queryFn: () => axios.get(`/posts?page=${page}`).then((res) =>res.data)
    })

   const cards = data?.posts || []
   const count = data?.count || 0
   const pageSize = 6;

    const handlePageChange = (event:any, value:number) => setPage(value);

    return(
        <>
            <Carousel className={'mt-10'}>
                {CAROUSEL_ITEMS.map((item, index) =>
                    <Box key={index}>{item.img}</Box>)}
            </Carousel>
            {isLoading && <CircularProgress className={'my-[40px]'}/>}
            <Box className="text-lg my-[40px]">
                <Box>Hello! My names is Yakov Kondratev.</Box>
                <Box>I am FullStack Developer and can do tasks related to PHP, CSS, HTML, JavaScript, TypeScript, SQL, <b>React and Node.js</b></Box>
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
            <Stack spacing={2} className={'mb-10'}>
                <Pagination onChange={handlePageChange} className={'flex justify-center'} count={Math.ceil(count / pageSize)} color="primary" />
            </Stack>
        </>
    )
}

export default Main