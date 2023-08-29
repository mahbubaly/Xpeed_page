import React from 'react';

import '../Shared/Style.css';
import { Link, NavLink } from 'react-router-dom';

const SingleCards = ({ CardsData }) => {

    const { img, title, id } = CardsData;

    return (
        <>
            {
                CardsData ? <> 
                <div className=' px-[4px] pb-[4px] pt-[3px]  bg-white rounded-[4px]' >

                    <img src={img} className=' flex-shrink-0 ' alt="" />







                    <div className='bg-[#fcf7f4]  px-[15px]   mt-5 sm:mt-10  lg:mt-[3px]'>
                        <h1 className='text-[14px] w-[232px] pt-[15px] leading-[22px] font-semibold SemiBold'>{title}</h1>

                        <div className=' flex justify-between  py-[20px] '>
                            <Link onClick={() => {
                                window.scrollTo(0, 0);
                            }} to={`details/${id}`}    >   <button className='text-[12px] h-[38px] w-[71px] font-bold Bold rounded-[4px] border-[1px] border-[#60599E] text-primary py-[8px]  hover:bg-[#60599E] hover:text-white'>Details</button>


                            </Link>

                            <button className='text-[12px] font-bold Bold h-[38px] w-[98px] rounded-[4px] border-[1px] border-[#60599E] py-[8px] leading-[22px]   hover:bg-[#60599E] text-primary hover:text-white'>Live Preview</button>

                        </div>

                    </div>

                </div>



                </> : <>
                    <p>Loading..........</p>


                </>
            }



        </>
    );
};

export default SingleCards;