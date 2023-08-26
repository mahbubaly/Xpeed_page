import React from 'react';

import '../Shared/Style.css';
import { Link, NavLink } from 'react-router-dom';

const SingleCards = ({ CardsData }) => {

    const { img, title, id } = CardsData;

    return (
        <>
            {
                CardsData ? <> <div className=' px-[4px] pb-[4px] pt-[3px]  bg-white ' >

                    <img src={img} className=' flex-shrink-0' alt="" />





                    <div className='bg-[#fcf7f4]  px-[15px]   mt-5 sm:mt-10  lg:mt-[3px]'>
                        <h1 className='text-[14px] pt-[15px] font-semibold SemiBold'>{title}</h1>

                        <div className=' flex justify-between  py-[20px] '>
                            <Link to={`details/${id}`}    >   <button className='text-[12px] h-[39px] w-[71px] font-bold Bold rounded-[4px] border-[1px] border-[#60599E] py-[8px] leading-[22px]	 hover:bg-[#60599E] hover:text-white'>Details</button> 


                            </Link>

                            <button className='text-[12px] font-bold Bold h-[39px] w-[99px] rounded-[4px] border-[1px] border-[#60599E] py-[8px] leading-[22px]  bg-[#60599E] hover:bg-[#3f3a68] text-white'>Live Preview</button>

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