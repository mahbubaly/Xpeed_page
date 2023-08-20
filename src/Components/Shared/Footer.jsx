import React from 'react';
import '../Shared/Style.css'
import logo from '../../assets/Images/logo 1.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='mt-[100px] sm:mt-[150px]'>

                <h1 className='text-center tracking-[3px] uppercase opacity-60 text-[14px] XpeedText font-bold Bold'>Xpeed Page Template</h1>

                <h1 className='text-center text-[25px] sm:text-[45px] font-bold Bold mt-[30px]'>Let’s Start Project Together</h1>

                <p className='lg:w-[776px] w-[280px] sm:w-[684px] text-center mx-auto mt-5 text-lg font-normal Normal'>Maybe there's an opportunity for your business to find value through a collaboration with Xpeed Page. Please share your thoughts in the form below, and we’ll respond within 48 hours of receiving the inquiry.</p>


                <div className='flex  justify-center mt-[50px] items-center'>

                    <button className='text-[16px] font-bold Bold rounded-[4px]   py-[20px] px-[50px] bg-[#60599E] hover:bg-[#3f3a68] text-white'>Contact Us</button>
                </div>

            </div>


            <div className='mt-[80px] mb-[30px] sm:px-[30px] px-5 lg:px-[135px]'>
                <hr className='border-[1px] bg-[#E5DFDC] ' />

            </div>

            <div className='sm:px-[30px] lg:px-[135px] px-5 pb-[50px] sm:flex justify-between items-center pt-[30px]'>
                <Link to='/'>  <img src={logo} className='w-[177px] sm:mx-0 mx-auto  sm:mb-0 mb-[30px] h-[40px]' alt="" /></Link>


                <div className='flex gap-[36px] sm:gap-[40px] items-center'>
                    <Link to='/team'>  <p className='font-normal text-[14px] sm:text-[16px] Normal'>Team</p>  </Link>
                    <Link to='/caseStudies'> <p className='font-normal  text-[14px] sm:text-[16px]  Normal'>Case Studies</p></Link>

                    <Link to='/publications'>
                        <p className='font-normal  text-[14px] sm:text-[16px]  Normal'>Publications</p>


                    </Link>


                </div>
            </div>



        </>
    );
};

export default Footer;