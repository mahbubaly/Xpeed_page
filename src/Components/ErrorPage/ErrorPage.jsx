import React, { useState } from 'react';
import '../Shared/Style.css';
import error from '../../assets/Images/illustration.png'
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';
import logo from '../../assets/Images/logo.png'
import { AiOutlineShopping } from 'react-icons/ai';
import Modal from 'react-modal';

const ErrorPage = () => {
    const [Visible, SetOpen] = useState(false);
    return (
        <>

            <div className='BG_color'>

                <div className='container mx-auto'>
                    <div className=' '>
                        <div className=' flex justify-between items-center '>
                            <Link>
                                <img src={logo} className='w-[71px] h-[42px] mt-[29px]' alt="" />


                            </Link>

                            <div className='flex gap-[30px] items-center'>
                                <Link id='addCard' >
                                    <AiOutlineShopping onClick={() => SetOpen(true)} className='w-[28px] h-[28px]' />

                                </Link>

                              





                                <div className='lg:flex gap-[30px] hidden items-center'>
                                    <button className='bg-[#60599E] rounded-[4px] text-white py-[10px] w-[163px] h-[39px] text-[14px] font-bold Bold'>Get Ultimate Access</button>
                                    <Link to='/SignIn' className='font-bold text-[16px] Bold'>Sign In</Link>
                                </div>

                            </div>
                        </div>
                        <div className='flex justify-center'>

                            <div>
                                <img src={error} className='w-[836.161px]' alt="" />
                                <p className='w-[830px] text-center text-[28px] font-medium Medium'>Sorry, the page you are looking for dosn't exist. Go out, take a run around the block or tap the button below.</p>
                            </div>

                        </div>

                        <Link to='/' className='flex justify-center items-end mt-[50px] '>
                            <button className='bg-[#60599E] hover:bg-[#3f3a68] items-end  mx-auto rounded-[4px] text-white w-[314px] h-[65px] text-[20px] pb-0 font-bold Bold'>Back To  Home Page</button>
                        </Link>
                    </div>




                    {/* Footer */}

                    <div className='mt-[80px] '>
                        <hr className='border-[1px] bg-[#E5DFDC] ' />

                    </div>


                    <div className='  sm:flex justify-between items-center pt-[30px]'>
                        <Link to='/'>  <img src={logo} className='w-[59px] h-[35px] sm:mx-0 mx-auto  sm:mb-0 mb-[30px] ' alt="" /></Link>


                        <div className='flex gap-[36px] sm:gap-[40px] items-center'>
                            <Link to='/team'>  <p className='font-normal text-[14px] sm:text-[16px] Normal'>Team</p>  </Link>
                            <Link to='/caseStudies'> <p className='font-normal  text-[14px] sm:text-[16px]  Normal'>Case Studies</p></Link>

                            <Link to='/publications'>
                                <p className='font-normal  text-[14px] sm:text-[16px]  Normal'>Publications</p>


                            </Link>


                        </div>
                    </div>
                </div>






            </div>











        </>
    );
};

export default ErrorPage;