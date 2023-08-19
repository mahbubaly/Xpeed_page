import React from 'react';
import Navbar from '../Shared/Navbar';
import Cards from './Cards';
import Pricing from './Pricing';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <>
            <div className='  BG_color'>

                <div className='ContainerBG mx-auto'>
                    <Navbar />

                    <Cards />

                    <Pricing />

                    <Footer />








                </div>


            </div>


        </>
    );
};

export default Home;