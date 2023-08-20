import React, { useState } from 'react';
import logo from '../../assets/Images/logo 1.png'
import '../Shared/Style.css'
import html from '../../assets/Images/html.png'
import react from '../../assets/Images/react.png'
import tailwind from '../../assets/Images/tailwind.png'
import Bootstrap from '../../assets/Images/bootrap.png'
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';
import Modal from 'react-modal';
import popUp from '../../assets/Images/popUp.png'

const Navbar = () => {

    const [Visible, SetOpen] = useState(false);
    return (
        <>

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

                <div>
                    <hr className='border-[1px] bg-[#E5DFDC] opacity-[]' />

                </div>




            </div>

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





        </>
    );
};

export default Navbar;