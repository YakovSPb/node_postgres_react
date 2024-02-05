import React, {FC} from "react";
import Typography from "@mui/material/Typography";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import axios from "../../axios";

const Post:FC = () => {
    const params = useParams();

    const { isLoading, data } = useQuery({
        queryKey: ['post', params.id],
        enabled: !!(params.id),
        queryFn: () => axios.get(`/post?id=${params?.id}`).then((res) =>res.data)
    })

    if(!data) return null

    console.log(data)
    return(
        <>
            <Typography mt={10} gutterBottom variant="h5" component="div">{data.title}</Typography>
            <Typography className={"text-left"} variant="body2" color="text.secondary">{data.content}</Typography>
        </>
    )
}

export default Post