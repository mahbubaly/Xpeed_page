import React, { useState } from 'react';
import logo from '../../assets/Images/logo.png'
import '../Shared/Style.css'

import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';


const Navbar = () => {

    const [Visible, SetOpen] = useState(false);
    const [cart, SetCart] = useState(false);
    return (
        <>

            <div className='container mx-auto '>

                <div className=' flex justify-between items-center '>
                    <Link>
                        <img src={logo} className='w-[50px] h-[35px]' alt="" />


                    </Link>

                    <div className='flex gap-[30px] items-center'>
                        <Link id='addCard' >
                            <AiOutlineShopping onClick={() => SetCart(prev=>!prev)} className='w-[28px] h-[28px]' />

                        </Link>

                        {
                            cart && <>
                                <div className='items p-[30px]'>

                                    <p className='text-lg font-bold Bold mb-[30px]'>Your Cart (2)</p>








                                    <div className='flex justify-center items-end mt-[126px] '>
                                        <button className='bg-[#60599E] hover:bg-[#3f3a68] items-end  mx-auto rounded-[4px] text-white w-[270px] h-[48px] text-[14px] pb-0 font-bold Bold'>Continue Checkout $39.96</button>
                                    </div>


                                </div>


                            </>
                        }







                        <div className='lg:flex gap-[30px] hidden items-center'>
                            <button className='bg-[#60599E] rounded-[4px] text-white py-[12px] px-5 text-[14px] font-bold Bold '>Get Ultimate Access</button>

                            <Link to='/signIn' className='font-bold text-[16px] Bold'>Sign In</Link>
                        </div>

                    </div>
                </div>

                <div className='pt-4 sm:pt-[29px]'>
                    <hr className='border-[1px] bg-[#E5DFDC] opacity-[]' />

                </div>




            </div>












        </>
    );
};

export default Navbar;