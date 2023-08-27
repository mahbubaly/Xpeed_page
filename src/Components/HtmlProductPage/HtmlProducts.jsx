import React, { useEffect, useState } from 'react';
import '../Shared/Style.css';
import SingleCards from '../Home/SingleCards';
import { Link } from 'react-router-dom';
import Pricing from '../Home/Pricing';

const HtmlProducts = () => {

    const [ShowAll, setShowAll] = useState([]);
    const [ShowTablet, setShowTablet] = useState([]);
    const [ShowDesktop, setSliceDesktop] = useState([]);
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => {
                const sliceMObile = data.slice(0, 4);
                const sliceTablet = data.slice(0, 8);
                const SliceDesktop = data.slice(0, 16);
                setSliceDesktop(SliceDesktop); // home page show 0 to 16


                setShowTablet(sliceTablet);
                setShowAll(data);// Show all
            }
            )

    }, [])


    return (
        <>
            <div className=' mx-auto Choose_width'>

                <h1 className='lg:text-[50px] leading-[75px] sm:text-[40px] text-[30px] text-center mt-[79.5px] font-bold Bold'>10,000 HTML5 Templates


                </h1>
                <p className='text-center mt-5 text-lg font-normal Normal'>Choose The Best HTML5 Templates For Your Projects</p>

            </div>

            <div className=" mt-[30px] sm:mt-[50px] flex mb-[30px] sm:mb-0  w-[280px] h-[48px] sm:w-[600px] sm:h-[54px] lg:h-[58px]  pl-[15px]  mx-auto bg-[#FFFFFF] border-[1px]  border-[#60599E] items-center  rounded-[4px] justify-between  p-[5px]">


                <input bg-white
                    type="text"


                    placeholder="e.g. “saas”"
                    className="   py-[10px]  w-[180px] sm:w-[470px]  bg-[#FFFFFF]  "
                />


                <button className='bg-[#60599E]  w-[88px] h-[38px]  sm:w-[128px] sm:h-[48px]  hover:bg-[#3f3a68] rounded-[4px] text-white  text-[14px]   font-bold Bold'>Search</button>


            </div>


            {/* Cards */}



            <div className='container mx-auto'>
                <div className='All_cards   hidden lg:block '>

                    <div className='grid mt-[80px] xl:grid-cols-4  md:grid-cols-2  lg:grid-cols-3 grid-cols-1 gap-[30px]'>

                        {
                            ShowAll.map(CardsData =>
                                <SingleCards
                                    key={CardsData.id}
                                    CardsData={CardsData}


                                />)
                        }




                    </div>


                    <div className='flex  justify-center mt-[80px] items-center'>

                        <Link to='/viewAllTemplate' className='text-[16px] font-bold Bold rounded-[4px]   py-[20px] px-[50px] bg-[#60599E] hover:bg-[#3f3a68] text-white'>View All Template</Link>
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
            </div>



            {/* pricing section */}

            <Pricing />







        </>
    );
};

export default HtmlProducts;