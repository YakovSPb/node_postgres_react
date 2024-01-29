import React, {FC} from "react";
import Carousel from "react-material-ui-carousel";
import {CAROUSEL_ITEMS} from "../../constants";
import Box from "@mui/material/Box";

const Main:FC = () => {
    return(
        <Carousel className={'mt-10'}>
            {CAROUSEL_ITEMS.map((item, index) =>
                <Box key={index}>{item.img}</Box>)}
        </Carousel>
    )
}

export default Main