import {FC} from "react";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";

import Header from '../Header/Header'
import Footer from "../Footer/Footer";

type LayoutProps = {
    children: React.ReactNode
}

const Layout:FC<LayoutProps> = ({ children }) => {
    return (
        <Box className='body'>
            <Header />
            <Container className={'main'} maxWidth="lg">{children}</Container>
            <Footer />
        </Box>
    );
}

export default  Layout