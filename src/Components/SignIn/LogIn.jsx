import React from 'react';
import '../Shared/Style.css';
import { Link } from 'react-router-dom';
import goggleIcon from '../../assets/Images/Icon/Google.png'

const LogIn = () => {
    return (
        <>

            <div>
                <div className='mt-[100px]'>
                    <h1 className='text-center text-[45px] font-bold Bold'>Good To See You Again 👋</h1>

                    <p className='text-[20px] text-center mt-5'>Don’t have an account? <Link className='text-[#60599E] hover:text-[#3f3a68] Bold font-bold text-[]' to='/signUp'>Set one up</Link>.</p>
                </div>

                <form>


                    <div className='flex justify-center mt-[79px]'>
                        <div>
                            <div className=''>
                                <p className='text-[14px] pb-[15px] font-bold Bold'>Email*</p>
                                <input type="email" className='inputBorder w-[600px] py-5 px-[15px] ' placeholder='Enter Your Email' />
                            </div>

                            <div className='mt-[59px]'>
                                <p className='text-[14px] pb-[15px] font-bold Bold'>Email*</p>
                                <input type="email" className='inputBorder w-[600px] py-5 px-[15px] ' placeholder='Enter Your Password' />
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-center mt-5 '>
                        <div className='flex gap-[116px] items-center mr-20'>
                            <div className='flex gap-[10px]  items-center '>
                                <input type="checkbox" className='w-[16px] h-4 ' name="" id="" />


                                <p className='text-[14px] font-semibold SemiBold'>Remember for 30 Days.</p>
                            </div>
                            <Link to='/forgetPass' className='text-[14px] font-semibold SemiBold'>
                                Forgot password?
                            </Link>
                        </div>



                    </div>


                    <div className='flex justify-center mt-[50px]'>

                        <div>
                            <div className=' '>
                                <button type='submit' className='text-center font-bold Bold rounded-[4px] w-[600px] py-5 bg-[#60599E] text-white hover:bg-[#3f3a68]'>
                                    Sign Up

                                </button>
                            </div>
                            <div className=' mt-[30px] SignWithGoogle   rounded-[4px] w-[600px] py-5 flex justify-center gap-[10px] items-center'>
                                <img src={goggleIcon} className='w-[24px] h-[24px]' alt="" />

                                <Link>
                                    <button type='submit' className='text-center text-[16px] hover:text-[#3f3a68] font-bold Bold  text-[#60599E] '>

                                        Sign up with google

                                    </button>


                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='text-center mt-[30px] mr-16'>
                        <p className='text-[16px] font-normal Normal'>Don’t have an account? <Link to='/signUp' className='font-bold Bold'>  Sign Up</Link></p>
                    </div>




                </form>
            </div>

        </>
    );
};

export default LogIn;