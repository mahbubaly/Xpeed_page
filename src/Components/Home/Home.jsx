import React, { useEffect } from 'react';
import Navbar from '../Shared/Navbar';
import Cards from './Cards';
import Pricing from './Pricing';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Resources from './Resources/Resources';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <>


            {
                <div className='container mx-auto '>

                    <Banner />


                    <Cards />

                    <Resources />

                    <Pricing />










                </div> ? <> <div className='container mx-auto '>

                    <Banner />


                    <Cards />

                    <Resources />

                    <Pricing />










                </div>   </> : <>  <h1>Loading............</h1></>
            }





        </>
    );
};

export default Home;