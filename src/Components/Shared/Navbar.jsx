import React, { useState } from 'react';
import logo from '../../assets/Images/logo.png'
import '../Shared/Style.css'
import { Link } from 'react-router-dom';
import cardCorn from '../../assets/Images/Icon/Polygon 1.png'
import shoppingCard from '../../assets/Images/Icon/shoppingCard.png'


const Navbar = () => {

    const [Visible, SetOpen] = useState(false);
    const [cart, SetCart] = useState(false);


    return (
        <>

            <div className='container mx-auto '>

                <div className=' flex justify-between items-center '>
                    <Link to='/'>
                        <img src={logo} className='w-[59px] h-[35px]' alt="" />


                    </Link>

                    <div className='flex gap-[30px] items-center'>
                        <div className='flex gap-5 items-center'>
                            <Link id='addCard' >
                                <img src={shoppingCard} onClick={() => SetCart(prev => !prev)} className='w-[28px] h-[28px]' />

                            </Link>

                            {
                                cart && <>
                                    <div className='items z-20'>
                                        <div className='flex justify-end mr-5 -mt-5'>
                                            <img src={cardCorn} className='w-[32px] z-10 h-[32px]' alt="" />
                                        </div>

                                        <div className=' p-[30px]'>
                                            <p className='text-lg font-bold Bold mb-[30px]'>Your Cart (0)</p>

                                            <div className='flex justify-center items-end  '>
                                                <button className='bg-[#60599E] hover:bg-[#3f3a68] items-end  mx-auto rounded-[4px] text-white w-[270px] h-[48px] text-[14px] pb-0 font-bold Bold'>Continue Checkout $0</button>
                                            </div>

                                        </div>

                                    </div>


                                </>
                            }
                            <Link to='/signIn' className='font-bold text-[16px] Bold'>Sign In</Link>
                        </div>








                        <div className='lg:flex gap-[30px] hidden items-center'>
                            <button className='bg-[#60599E] rounded-[4px]  text-white w-[179px] h-[42px] text-[14px] font-bold Bold '>Get Ultimate Access</button>


                        </div>

                    </div>
                </div>






            </div>
            <div className=' mx-auto xl:px-[50px]'>
                <hr className='hrWid  ' />

            </div>











        </>
    );
};

export default Navbar;