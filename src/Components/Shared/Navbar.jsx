import React from 'react';
import logo from '../../assets/Images/logo 1.png'
import '../Shared/Style.css'
import html from '../../assets/Images/html.png'
import react from '../../assets/Images/react.png'
import tailwind from '../../assets/Images/tailwind.png'
import Bootstrap from '../../assets/Images/bootrap.png'

const Navbar = () => {
    return (
        <>

            <div className='xl:px-[135px] '>

                <div className='pb-[29px] flex justify-between items-center pt-[30px]'>
                    <img src={logo} className='w-[177px] h-[40px]' alt="" />

                    <div className='flex gap-[30px] items-center'>
                        <h1 className='font-bold text-[16px] Bold'>Sign In</h1>
                        <button className='bg-[#60599E] rounded-[4px] text-white py-[10px] w-[163px] h-[39px] text-[14px] font-bold Bold'>Get Ultimate Access</button>

                    </div>
                </div>

                <div>
                    <hr className='border-[1px] bg-[#1A0702] opacity-10' />

                </div>




            </div>

            <div className='w-[770px] mx-auto'>

                <h1 className='lg:text-[50px] text-center mt-[80px] font-bold Bold'>Choose The Best HTML5 Templates For Your Project's
                    <span className='text-[#60599E]'> Only $9.99</span>

                </h1>

            </div>





            <div className="flex lg:ml-16 justify-center mt-[80px] pb-[50px]">


                <input
                    type="text"

                    placeholder="e.g. “saas”"
                    className="w-[634px] py-[19px] pl-[17px]  h-[58px]  rounded-[4px] border-[1px] border-[#60599E]  shadow-sm "
                />
                <button className='bg-[#60599E] h-[48px] relative rounded-[4px] text-white py-[15px] px-[40px]  text-[14px] right-[132px] top-[5px] font-bold Bold'>Search</button>


            </div>


            {/* Cards */}

            <div className='flex justify-center'>
                <div className='flex gap-[30px] '>
                    <div className='w-[81px] bg-white px-[26px] pt-[12px] rounded-[10px]'>
                        <img src={html} className='w-[30] h-[30px]' alt="" />
                        <h1 className='text-[12px] font-bold Bold mt-[10px] pb-[13px]'>HTML</h1>
                    </div>
                    <div className='w-[81px] bg-white px-[26px] pt-[12px] rounded-[10px]'>
                        <img src={react} className='w-[30] h-[26px]' alt="" />
                        <h1 className='text-[12px] font-bold Bold mt-[10px] pb-[13px]'>React</h1>
                    </div>
                    <div className='w-[81px] bg-white px-[16px] pt-[12px] rounded-[10px]'>
                        <img src={tailwind} className='w-[50] mx-auto h-[30.266px]' alt="" />
                        <h1 className='text-[12px] font-bold Bold mt-[10px] pb-[13px]'>Tailwind</h1>
                    </div>
                    <div className='w-[81px] bg-white  pt-[12px] mx-auto rounded-[10px]'>
                        <img src={Bootstrap} className='w-[38] mx-auto h-[30px]' alt="" />
                        <h1 className='text-[12px] text-center  font-bold Bold mt-[10px] pb-[13px]'>Bootstrap</h1>
                    </div>
                    

                </div>
            </div>





        </>
    );
};

export default Navbar;