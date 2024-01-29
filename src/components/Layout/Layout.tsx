import {FC} from "react";
import Container from '@mui/material/Container';

import Header from '../Header/Header'

type LayoutProps = {
    children: React.ReactNode
}

const Layout:FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header/>
            <Container maxWidth="lg">{children}</Container>
        </>
    );
}

export default  Layout