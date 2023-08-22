import React from 'react';
import html from '../../assets/Images/html.png'
import react from '../../assets/Images/react.png'
import tailwind from '../../assets/Images/tailwind.png'
import Bootstrap from '../../assets/Images/bootrap.png'

const Banner = () => {
    return (
        <>

            <div>

                <div className=' mx-auto Choose_width'>

                    <h1 className='lg:text-[50px] leading-[75px] sm:text-[40px] text-[30px] text-center mt-[18.5px] font-bold Bold'>Choose The Best HTML5 Templates For Your Project's
                        <span className='text-[#60599E]'> Only $9.99</span>

                    </h1>

                </div>



               

                    <div className="flex     justify-center my-[30px] sm:my-0  sm:mt-[80px] ">


                        <input
                            type="text"

                            placeholder="e.g. “saas”"
                            className="w-[280px]  sm:w-[500px]  lg:w-[634px] h-[48px] sm:py-[19px] pl-[15px] ml-[17px] py-[14px]  sm:h-[58px]  rounded-[4px]  border-[1px] border-[#60599E]  shadow-sm "
                        />


                        <button className='bg-[#60599E] Search_btn hover:bg-[#3f3a68] rounded-[4px] text-white  text-[14px]   font-bold Bold'>Search</button>


                    </div>
             


                {/* Cards */}

                <div className='flex justify-center sm:mt-[54px] items-center '>
                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-[30px] '>

                        <div className='w-[81px] h-[81px] CardShadow bg-white px-[26px] pt-[12px] rounded-[10px]'>
                            <img src={html} className='w-[30px] h-[30px]' alt="" />
                            <h1 className='text-[12px] font-bold Bold mt-[10px] pb-[13px]'>HTML</h1>
                        </div>
                        <div className='w-[81px] h-[81px] CardShadow bg-white px-[26px] pt-[12px] rounded-[10px]'>
                            <img src={react} className='w-[30px] h-[26px]' alt="" />
                            <h1 className='text-[12px] font-bold Bold mt-[10px] pb-[13px]'>React</h1>
                        </div>
                        <div className='w-[81px] h-[81px] CardShadow bg-white px-[16px] pt-[12px] rounded-[10px]'>
                            <img src={tailwind} className='w-[50px] mx-auto h-[30.266px]' alt="" />
                            <h1 className='text-[12px] font-bold Bold mt-[10px] pb-[13px]'>Tailwind</h1>
                        </div>
                        <div className='w-[81px] h-[81px] CardShadow bg-white  pt-[12px] mx-auto rounded-[10px]'>
                            <img src={Bootstrap} className='w-[38px] mx-auto h-[30px]' alt="" />
                            <h1 className='text-[12px] text-center  font-bold Bold mt-[10px] pb-[13px]'>Bootstrap</h1>
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;