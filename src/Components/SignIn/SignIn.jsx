import React from 'react';
import '../Shared/Style.css';
import googleIcon from '../../assets/Images/Icon/Google.png'
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <>


            <div className='xl:w-[700px] mx-auto mt-[100px]'>
                <h1 className='font-bold Bold text-[45px] text-center '>Let's Sign Up first enter into Xpeed Page website!</h1>

            </div>

            <form className='flex justify-center'>
                <div className=''>



                    <div className='flex gap-[30px] mt-[59px]'>
                        <div className=''>
                            <p className='text-[14px] pb-[15px] font-bold Bold'>First Name*</p>
                            <input type="text" className='inputBorder w-[285px] py-5 px-[15px] ' placeholder='Your First Name' />
                        </div>
                        <div className=''>
                            <p className='text-[14px] pb-[15px] font-bold Bold'>Last Name*</p>
                            <input type="text" className='inputBorder w-[285px] py-5 px-[15px] ' placeholder='Your Last Name' />
                        </div>
                    </div>



                    <div className='mt-[59px]'>
                        <p className='text-[14px] pb-[15px] font-bold Bold'>Email*</p>
                        <input type="email" className='inputBorder w-[600px] py-5 px-[15px] ' placeholder='Your Last Name' />
                    </div>



                    <div className='flex gap-[30px] mt-[59px]'>
                        <div className=''>
                            <p className='text-[14px] pb-[15px] font-bold Bold'>Password*</p>
                            <input type="password" className='inputBorder w-[285px] py-5 px-[15px] ' placeholder='Your First Name' />
                        </div>
                        <div className=''>
                            <p className='text-[14px] pb-[15px] font-bold Bold'>Confirm Password*</p>
                            <input type="password" className='inputBorder w-[285px] py-5 px-[15px] ' placeholder='Your Last Name' />
                        </div>
                    </div>



                    <div className='flex gap-[10px] mt-[31px] items-center '>
                        <input type="checkbox" className='w-[16px] h-4 ' name="" id="" />


                        <p className='text-[14px] font-semibold SemiBold'>I agree to all Terms and Privacy Policy.</p>
                    </div>


                    <div className=' mt-[50px]'>
                        <button type='submit' className='text-center font-bold Bold rounded-[4px] w-[600px] py-5 bg-[#60599E] text-white hover:bg-[#3f3a68]'>
                            Sign Up

                        </button>
                    </div>
                    <div className=' mt-[30px] SignWithGoogle   rounded-[4px] w-[600px] py-5 flex justify-center gap-[10px] items-center'>
                        <img src={googleIcon} className='w-[24px] h-[24px]' alt="" />

                        <Link>
                            <button type='submit' className='text-center text-[16px] hover:text-[#3f3a68] font-bold Bold  text-[#60599E] '>

                                Sign up with google

                            </button>


                        </Link>
                    </div>

                    <div className='text-center mt-[30px] mr-16'>
                        <p className='text-[16px] font-normal Normal'>Already have an account? <Link to='/signIn' className='font-bold Bold'> Sign In</Link></p>
                    </div>

                </div>
            </form>

        </>
    );
};

export default SignIn;