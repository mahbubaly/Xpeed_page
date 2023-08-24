import React, { useEffect, useState } from 'react';
import '../../Shared/Style.css';
import SingleCards from '../SingleCards';
import ResourcesSingleCards from './ResourcesSingleCards';



const Resources = () => {

    const [ShowAll, setShowAll] = useState([]);
    const [ShowTablet, setShowTablet] = useState([]);


    useEffect(() => {
        fetch('Resources.json')
            .then(res => res.json())
            .then(data => {

                const sliceMObile = data.slice(0, 4);
                const sliceTablet = data.slice(0, 8);

                setShowTablet(sliceTablet);



                setShowAll(data);


            }
            )

    }, [])
    return (
        <>
            <div className='mt-[100px]'>
                <h1 className='text-center mx-auto lg:w-[770px] lg:text-[45px] font-bold Bold'>
                    Download 10,000+ Figma Design Resources Only $9.99
                </h1>
            </div>



            {/* Laptop desktop */}

            <div className='All_cards   hidden lg:block '>

                <div className='grid mt-[80px] xl:grid-cols-4  md:grid-cols-2  lg:grid-cols-3 grid-cols-1 gap-[30px]'>

                    {
                        ShowAll.map(resourceData => <ResourcesSingleCards
                            key={resourceData._id}
                            resourceData={resourceData}


                        />)
                    }




                </div>


                <div className='flex  justify-center mt-[80px] items-center'>

                    <button className='text-[16px] font-bold Bold rounded-[4px]   py-[20px] px-[50px] bg-[#60599E] hover:bg-[#3f3a68] text-white'>View All Template</button>
                </div>








            </div>


            {/* mobile Tablet */}



            <div className='lg:mt-[84px] sm:mt-[80px] mt-[50px]  block lg:hidden px-5 '>

                <div className='grid   grid-cols-1 sm:grid-cols-2  gap-[30px] rounded-[4px]'>

                    {
                        ShowTablet.map(CardsData => <SingleCards
                            key={CardsData.id}
                            CardsData={CardsData}


                        />)
                    }




                </div>


                <div className='flex  justify-center mt-[80px] items-center'>

                    <button className='text-[16px] font-bold Bold rounded-[4px]   py-[20px] px-[50px] bg-[#60599E] hover:bg-[#3f3a68] text-white'>View All Template</button>
                </div>








            </div>

        </>
    );
};

export default Resources;