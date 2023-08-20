import React from 'react';
import Home from '../Home/Home';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <>

            <Navbar />
            <Outlet />
            <Footer />

        </>
    );
};

export default Main;