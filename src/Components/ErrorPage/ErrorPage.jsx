import React, { useState } from 'react';
import '../Shared/Style.css';
import error from '../../assets/Images/illustration.png'
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';
import logo from '../../assets/Images/logo 1.png'
import { AiOutlineShopping } from 'react-icons/ai';
import Modal from 'react-modal';

const ErrorPage = () => {
    const [Visible, SetOpen] = useState(false);
    return (
        <>

            <div className='BG_color'>

                <div className='ContainerBG mx-auto'>
                    <div className='xl:px-[135px] sm:px-[30px] px-5 '>
                        <div className='pb-[29px] flex justify-between items-center pt-[30px]'>
                            <Link>
                                <img src={logo} className='w-[177px] h-[40px]' alt="" />


                            </Link>

                            <div className='flex gap-[30px] items-center'>
                                <Link id='addCard' >
                                    <AiOutlineShopping onClick={() => SetOpen(true)} className='w-[28px] h-[28px]' />

                                </Link>

                                <Modal isOpen={Visible} onRequestClose={() => SetOpen(false)}

                                    style={{
                                        overlay: {



                                        },

                                        content: {
                                            width: '330px',
                                            left: '50%',
                                            right: '0px',
                                            top: '75px',






                                        },

                                    }} >
                                    <div className='custom-modal'>

                                        <p className='text-lg font-bold Bold mb-[30px]'>Your Cart (2)</p>

                                        <div className='pt-[100px]'>
                                            <h1 className='text-[25px] sm:text-[45px] text-center font-semibold SemiBold'>Affordable Pricing</h1>
                                            <p className='text-center mt-[30px] font-normal Normal'>
                                                Unlimited HTML5 Template For Your Creative Projects
                                            </p>
                                        </div>
                                        <div className='pt-[100px]'>
                                            <h1 className='text-[25px] sm:text-[45px] text-center font-semibold SemiBold'>Affordable Pricing</h1>
                                            <p className='text-center mt-[30px] font-normal Normal'>
                                                Unlimited HTML5 Template For Your Creative Projects
                                            </p>
                                        </div>






                                        <div className='flex justify-center items-end mt-[126px] '>
                                            <button className='bg-[#60599E] hover:bg-[#3f3a68] items-end  mx-auto rounded-[4px] text-white w-[270px] h-[48px] text-[14px] pb-0 font-bold Bold'>Continue Checkout $39.96</button>
                                        </div>


                                    </div>


                                </Modal>





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
                </div>






            </div>











        </>
    );
};

export default ErrorPage;