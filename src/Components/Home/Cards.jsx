import React, { useEffect, useState } from 'react';
import img1 from '../../assets/Images/1.png'
import '../Shared/Style.css'
import SingleCards from './SingleCards';

const Cards = () => {

    const [ShowAll, setShowAll] = useState([]);
    const [ShowTablet, setShowTablet] = useState([]);
    

    useEffect(() => {
        fetch('Data.json')
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

            {/* Laptop desktop */}

            <div className='All_cards   hidden lg:block '>

                <div className='grid mt-[84px] xl:grid-cols-4  md:grid-cols-2  lg:grid-cols-3 grid-cols-1 gap-[30px]'>

                    {
                        ShowAll.map(CardsData => <SingleCards
                            key={CardsData._id}
                            CardsData={CardsData}


                        />)
                    }




                </div>


                <div className='flex  justify-center mt-[84px] items-center'>

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


                <div className='flex  justify-center mt-[84px] items-center'>

                    <button  className='text-[16px] font-bold Bold rounded-[4px]   py-[20px] px-[50px] bg-[#60599E] hover:bg-[#3f3a68] text-white'>View All Template</button>
                </div>








            </div>



        </>
    );
};

export default Cards;