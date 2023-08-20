import React from 'react';
import '../Shared/Style.css'
import logo from '../../assets/Images/logo 1.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='mt-[150px]'>

                <h1 className='text-center tracking-[3px] uppercase opacity-60 text-[14px] XpeedText font-bold Bold'>Xpeed Page Template</h1>

                <h1 className='text-center text-[45px] font-bold Bold mt-[30px]'>Let’s Start Project Together</h1>

                <p className='lg:w-[776px] text-center mx-auto mt-5 text-lg font-normal Normal'>Maybe there's an opportunity for your business to find value through a collaboration with Xpeed Page. Please share your thoughts in the form below, and we’ll respond within 48 hours of receiving the inquiry.</p>


                <div className='flex  justify-center mt-[50px] items-center'>

                    <button className='text-[16px] font-bold Bold rounded-[4px]   py-[20px] px-[50px] bg-[#60599E] hover:bg-[#3f3a68] text-white'>Contact Us</button>
                </div>

            </div>


            <div className='mt-[80px] mb-[30px] px-[135px]'>
                <hr className='border-[1px] bg-[#E5DFDC] ' />

            </div>

            <div className='px-[135px] pb-[50px] flex justify-between items-center pt-[30px]'>
                <Link to='/'>  <img src={logo} className='w-[177px] h-[40px]' alt="" /></Link>


                <div className='flex gap-[40px] items-center'>
                    <Link to='/team'>  <p className='font-normal text-[16px] Normal'>Team</p>  </Link>
                    <Link to='/caseStudies'> <p className='font-normal text-[16px] Normal'>Case Studies</p></Link>

                    <Link to='/publications'>
                        <p className='font-normal text-[16px] Normal'>Publications</p>


                    </Link>


                </div>
            </div>



        </>
    );
};

export default Footer;