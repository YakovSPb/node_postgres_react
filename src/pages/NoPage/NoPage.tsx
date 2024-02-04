import React, {FC} from "react";
import Typography from "@mui/material/Typography";

const NoPage:FC = () => {
    return(
        <>
            <Typography mt={10} gutterBottom variant="h1" component="div">404</Typography>
            <Typography variant="body1" color="text.secondary">We can't seem to find the page you're looking for.</Typography>
        </>
    )
}

export default NoPage