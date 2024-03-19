import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import {Footer} from "../Footer/Footer.tsx";

export const Layout = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
