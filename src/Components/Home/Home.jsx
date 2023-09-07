import React, { useEffect, useState } from 'react';
import Pricing from './Pricing';
import Banner from './Banner';
import { Jelly } from '@uiball/loaders';
import { Lines } from 'react-preloaders';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    const [isLoading, setIsLoading] = useState(true);


    return (
        <>





            <div className='container mx-auto '>

                <Banner />






                <Pricing />

               












            </div>






        </>
    );
};

export default Home;