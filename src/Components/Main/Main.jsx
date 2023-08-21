import React from 'react';
import Home from '../Home/Home';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import '../Shared/Style.css'

const Main = () => {
    return (
        <>

            <div className='BG_color'>
                <Navbar />


                <Outlet />
                <Footer />
            </div>

        </>
    );
};

export default Main;