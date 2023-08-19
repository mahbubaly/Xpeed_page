import React, { useEffect, useState } from 'react';
import img1 from '../../assets/Images/1.png'
import '../Shared/Style.css'
import SingleCards from './SingleCards';

const Cards = () => {

    const [ShowAll, setShowAll] = useState([]);

    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => {

                const sliceMObile = data.slice(0, 4);

                setShowAll(data);


            }
            )

    }, [])
    return (
        <>

            <div className='pt-[84px] px-[135px]'>

                <div className='grid lg:grid-cols-4 grid-cols-1 gap-[30px]'>

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



        </>
    );
};

export default Cards;