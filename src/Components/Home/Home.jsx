import React from 'react';
import Navbar from '../Shared/Navbar';
import Cards from './Cards';
import Pricing from './Pricing';
import Footer from '../Shared/Footer';
import Banner from './Banner';

const Home = () => {
    return (
        <>


            <div className='ContainerBG mx-auto '>

                <Banner />


                <Cards />

                <Pricing />










            </div>





        </>
    );
};

export default Home;