import React, {FC} from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const Contact:FC = () => {
    return(
        <>
            <Typography mt={10} gutterBottom variant="h4" component="div">About</Typography>
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <Typography gutterBottom variant="h5" component="div">Front-end (React, Typescript)</Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography gutterBottom variant="h5" component="div">Back-end (Node.js Express.js)</Typography>
                </Grid>
                <Grid xs={6}>
                    <ul>
                        <li>material design</li>
                        <li>axios</li>
                        <li>formik</li>
                        <li>notistack</li>
                        <li>react-file-drop</li>
                        <li>react-query</li>
                        <li>react-router-do</li>
                        <li>typescript</li>
                        <li>yup</li>
                        <li>tailwindcss</li>
                    </ul>
                </Grid>
                <Grid xs={6}>
                  <ul>
                      <li>bcrypt</li>
                      <li>cookie-parser</li>
                      <li>cors</li>
                      <li>jsonwebtoken</li>
                      <li>follow-redirects</li>
                      <li>multer</li>
                      <li>pg</li>
                      <li>nodemon</li>
                  </ul>
                </Grid>
            </Grid>
        </>
    )
}

export default Contact