import React from 'react';
import { Link } from 'react-router-dom';

const ResourcesSingleCards = ({ resourceData }) => {
    const { img, title, id } = resourceData;
    return (
        <>

            <div className=' px-[4px] pb-[4px] pt-[3px]  bg-white ' >

                <img src={img} className=' flex-shrink-0 rounded-[4px]' alt="" />





                <div className='bg-[#fcf7f4]  px-[15px]   mt-5 sm:mt-10  lg:mt-[3px]'>
                    <h1 className='text-[14px] pt-[15px] font-semibold SemiBold'>{title}</h1>

                    <div className=' flex justify-between  py-[20px] '>
                        <Link onClick={() => {
                            window.scrollTo(0, 0);
                        }} to={`resource/${id}`} >   <button className='text-[12px] h-[39px] w-[71px] font-bold Bold rounded-[4px] border-[1px] border-[#60599E] py-[8px] leading-[22px]	 hover:bg-[#60599E] hover:text-white'>Details</button>


                        </Link>

                        <button className='text-[12px] font-bold Bold h-[39px] w-[99px] rounded-[4px] border-[1px] border-[#60599E] py-[8px] leading-[22px]  bg-[#60599E] hover:bg-[#3f3a68] text-white'>Add To Cart</button>

                    </div>

                </div>

            </div>


        </>
    );
};

export default ResourcesSingleCards;