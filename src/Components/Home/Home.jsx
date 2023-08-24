import React from 'react';
import Navbar from '../Shared/Navbar';
import Cards from './Cards';
import Pricing from './Pricing';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Resources from './Resources/Resources';

const Home = () => {
    return (
        <>


            <div className='container mx-auto '>

                <Banner />


                <Cards />

                <Resources />

                <Pricing />










            </div>





        </>
    );
};

export default Home;