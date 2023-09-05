import React from 'react';
import '../Shared/Style.css'
import logo from '../../assets/Images/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>







            <div className=' hrDiv mt-[50px]'>
                <hr className='hrWid  ' />

            </div>

            <div className='container mx-auto  gap-[48px] flex justify-center sm:justify-between items-center '>
                <Link onClick={() => {
                    window.scrollTo(0, 0);
                }}
                    to='/'>  <img src={logo} className='w-[40px] h-[24px] sm:w-[59px] sm:h-[35px] sm:mx-0 mx-auto  sm:mb-0 ' alt="" /></Link>


                <div className='flex gap-[10px] justify-center sm:gap-[40px] items-center'>
                    <Link to='/team'>  <p className='font-normal text-[11px] sm:text-[16px] Normal'>Team</p>  </Link>
                    <Link to='/caseStudies'> <p className='font-normal  text-[11px] sm:text-[16px]  Normal'>Refund Policy</p></Link>

                    <Link to='/publications'>
                        <p className='font-normal  text-[11px] sm:text-[16px]  Normal'>Privacy Policy</p>


                    </Link>


                </div>
            </div>



        </>
    );
};

export default Footer;