import {FC, useEffect} from "react";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";

import Header from '../Header/Header'
import Footer from "../Footer/Footer";
import {queryClient} from "../../index";
import {useNavigate} from "react-router-dom";

type LayoutProps = {
    children: React.ReactNode
}

const Layout:FC<LayoutProps> = ({ children }) => {
    const navigate = useNavigate();
    const authData = queryClient.getQueryData(["login"]);

    useEffect(() => {
        if(!authData){
            navigate('/login')
        }
    }, [authData]);



    return (
        <Box className='body'>
            <Header />
            <Container className={'main'} maxWidth="lg">{children}</Container>
            <Footer />
        </Box>
    );
}

export default  Layout