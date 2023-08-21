import React from 'react';
import html from '../../assets/Images/html.png'
import react from '../../assets/Images/react.png'
import tailwind from '../../assets/Images/tailwind.png'
import Bootstrap from '../../assets/Images/bootrap.png'

const Banner = () => {
    return (
        <>

            <div>

                <div className='sm:w-[557px] lg:w-[770px] mx-auto w-[280px]'>

                    <h1 className='lg:text-[50px] sm:text-[40px] text-[30px] text-center mt-[80px] font-bold Bold'>Choose The Best HTML5 Templates For Your Project's
                        <span className='text-[#60599E]'> Only $9.99</span>

                    </h1>

                </div>
                <div className=' flex justify-center ml-32 sm:ml-24 lg:ml-28'>

                    <div className="flex w-[280xp] sm:w-auto  justify-center mt-[80px] pb-[50px]">


                        <input
                            type="text"

                            placeholder="e.g. “saas”"
                            className="sm:w-[634px] w-[280px] py-[19px] pl-[17px]  h-[58px]  rounded-[4px] border-[1px] border-[#60599E]  shadow-sm "
                        />
                        <button className='bg-[#60599E] h-[48px] relative rounded-[4px] text-white py-[15px] px-[40px]  text-[14px] right-[132px] top-[5px] font-bold Bold'>Search</button>


                    </div>
                </div>


                {/* Cards */}

                <div className='flex justify-center items-center'>
                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-[30px] '>

                        <div className='w-[81px]  CardShadow bg-white px-[26px] pt-[12px] rounded-[10px]'>
                            <img src={html} className='w-[30] h-[30px]' alt="" />
                            <h1 className='text-[12px] font-bold Bold mt-[10px] pb-[13px]'>HTML</h1>
                        </div>
                        <div className='w-[81px] CardShadow bg-white px-[26px] pt-[12px] rounded-[10px]'>
                            <img src={react} className='w-[30] h-[26px]' alt="" />
                            <h1 className='text-[12px] font-bold Bold mt-[10px] pb-[13px]'>React</h1>
                        </div>
                        <div className='w-[81px] CardShadow bg-white px-[16px] pt-[12px] rounded-[10px]'>
                            <img src={tailwind} className='w-[50] mx-auto h-[30.266px]' alt="" />
                            <h1 className='text-[12px] font-bold Bold mt-[10px] pb-[13px]'>Tailwind</h1>
                        </div>
                        <div className='w-[81px] CardShadow bg-white  pt-[12px] mx-auto rounded-[10px]'>
                            <img src={Bootstrap} className='w-[38] mx-auto h-[30px]' alt="" />
                            <h1 className='text-[12px] text-center  font-bold Bold mt-[10px] pb-[13px]'>Bootstrap</h1>
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;