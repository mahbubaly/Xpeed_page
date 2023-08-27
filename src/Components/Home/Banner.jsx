import React from 'react';
import html from '../../assets/Images/html.png'
import react from '../../assets/Images/react.png'
import tailwind from '../../assets/Images/tailwind.png'
import Bootstrap from '../../assets/Images/bootrap.png'
import figma from '../../assets/Images/figma.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>

            <div>

                <div className=' mx-auto Choose_width'>

                    <h1 className='lg:text-[50px]  sm:text-[40px] text-[30px] text-center mt-[8.5px] sm:mt-[49.5px] font-bold Bold'>Choose The Best HTML5 Templates For Your Project's
                        <span className='text-[#60599E]'> Only $9.99</span>

                    </h1>

                </div>





                <div className=" mt-[30px] sm:mt-[80px] flex mb-[30px] sm:mb-0  w-[280px] h-[48px] sm:w-[600px] sm:h-[54px] lg:h-[58px]  pl-[15px]  mx-auto bg-[#FFFFFF] border-[1px]  border-[#60599E] items-center  rounded-[4px] justify-between  p-[5px]">


                    <input bg-white
                        type="text"


                        placeholder="e.g. “saas”"
                        className="   py-[10px]  w-[180px] sm:w-[470px]  bg-[#FFFFFF]  "
                    />


                    <button className='bg-[#60599E]  w-[88px] h-[38px]  sm:w-[128px] sm:h-[48px]  hover:bg-[#3f3a68] rounded-[4px] text-white  text-[14px]   font-bold Bold'>Search</button>


                </div>



                {/* Cards */}

                <div className='flex justify-center sm:mt-[50px] mt-[30px]  items-center '>
                    <div className='sm:flex gap-[30px]'>

                        <div className='flex gap-[30px]'>
                            <Link onClick={() => {
                                window.scrollTo(0, 0);
                            }} to='/viewAllHtmlTemplate' className='w-[70px] h-[70px] sm:w-[81px]  sm:h-[81px] CardShadow bg-white px-[26px] pt-[12px] rounded-[10px]'>
                                <img src={html} className='h-[24px] w-[24px] sm:w-[30px] sm:h-[30px]' alt="" />
                                <h1 className='text-[12px] font-bold Bold mt-[10px] pb-[13px]'>HTML</h1>
                            </Link>

                            <Link className='w-[70px] h-[70px] sm:w-[81px]  sm:h-[81px]  CardShadow bg-white px-[26px] pt-[12px] rounded-[10px]'>
                                <img src={react} className='w-[24px] h-[20px] sm:w-[30px] sm:h-[26px]' alt="" />
                                <h1 className='text-[12px] font-bold text-center Bold mt-[10px] pb-[13px]'>React</h1>
                            </Link>

                            <Link className='w-[70px] h-[70px] sm:w-[81px]  sm:h-[81px]  CardShadow bg-white px-[16px] pt-[12px] rounded-[10px]'>
                                <img src={tailwind} className='w-[39px] h-[24px] sm:w-[50px] sm:h-[30.266px] mx-auto ' alt="" />
                                <h1 className='text-[12px] font-bold Bold mt-[10px] pb-[13px]'>Tailwind</h1>
                            </Link>
                        </div>

                        <div className='flex justify-center gap-[30px]  sm:mt-0 mt-5'>
                            <Link className='  w-[70px] h-[70px] sm:w-[81px]  sm:h-[81px]  CardShadow bg-white  pt-[12px] rounded-[10px]'>
                                <img src={Bootstrap} className='w-[30px] h-[24px] sm:w-[38px] mx-auto sm:h-[30px]' alt="" />
                                <h1 className='text-[12px] text-center  font-bold Bold mt-[10px] pb-[13px]'>Bootstrap</h1>
                            </Link>

                            <Link onClick={() => {
                                window.scrollTo(0, 0);
                            }} to='/viewAllFigmaTemplate' className=' w-[70px] h-[70px] sm:w-[81px]  sm:h-[81px]  CardShadow bg-white  pt-[12px] rounded-[10px]'>
                                <img src={figma} className=' sm:w-[20px] w-4 h-[24px]  mx-auto sm:h-[30px]' alt="" />
                                <h1 className='text-[12px] text-center  font-bold Bold mt-[10px] pb-[13px]'>Figma</h1>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;