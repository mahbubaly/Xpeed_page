import React from 'react';
import '../Shared/Style.css'
import logo from '../../assets/Images/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
           



            


            <div className='   '>
                <hr className='hrWid  mt-[49px]' />

            </div>

            <div className='container mx-auto  pb-[50px] sm:flex justify-between items-center '>
                <Link to='/'>  <img src={logo} className='w-[50px] h-[35px] sm:mx-0 mx-auto  sm:mb-0 mb-[30px]' alt="" /></Link>


                <div className='flex gap-[36px] justify-center sm:gap-[40px] items-center'>
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