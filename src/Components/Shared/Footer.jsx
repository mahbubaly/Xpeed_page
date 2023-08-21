import React from 'react';
import '../Shared/Style.css'
import logo from '../../assets/Images/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
           



            


            <div className='mt-[80px] mb-[30px] sm:px-[30px] px-5 lg:px-[135px]'>
                <hr className='border-[1px] bg-[#E5DFDC] ' />

            </div>

            <div className='sm:px-[30px] lg:px-[135px] px-5 pb-[50px] sm:flex justify-between items-center pt-[30px]'>
                <Link to='/'>  <img src={logo} className='w-[71px] h-[42px] sm:mx-0 mx-auto  sm:mb-0 mb-[30px]' alt="" /></Link>


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