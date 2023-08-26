import React, { useState } from 'react';
import '../Shared/Style.css';
import { Link } from 'react-router-dom';
import goggleIcon from '../../assets/Images/Icon/Google.png'
import eye from '../../assets/Images/Icon/eye on.png'
import { AiOutlineEyeInvisible } from 'react-icons/ai';

const LogIn = () => {

    const [OpenEye, setOpenEye] = useState(false);
    return (
        <>

            <div>
                <div className='mt-[30px] sm:mt-[99px]'>
                    <h1 className='text-center text-[25px] sm:text-[45px] font-bold Bold'>Good To See You Again 👋</h1>

                    <p className='text-[20px] text-center mt-5'>Don’t have an account? <Link className='text-[#60599E] hover:text-[#3f3a68] Bold font-bold text-[]' to='/signUp'>Set one up</Link>.</p>
                </div>

                <form>


                    <div className='flex justify-center mt-[50px]'>
                        <div>
                            <div className=''>
                                <p className='text-[14px] pb-[15px] font-bold Bold'>Email*</p>
                                <input type="email" className='inputBorder w-[280px] h-[48px] sm:w-[600px] sm:h-[54px] px-[15px] ' placeholder='Enter Your Email' />
                            </div>

                            <div className='mt-[28.5px]'>
                                <p className='text-[14px] pb-[15px] font-bold Bold'>Password*</p>

                            </div>



                            <div className="  flex  w-[280px] h-[48px] sm:w-[600px] sm:h-[54px] lg:h-[58px]  pl-[15px]  mx-auto bg-[#FFFFFF] border-[1px]  border-[#60599E] items-center  rounded-[4px] ">

                              

                                    <input type={OpenEye ? "text" : "password"} className="   py-[10px]   w-[555px]  bg-[#FFFFFF]  " placeholder='Enter Your Password' />
                                





                                <div className='-mr-[50px]' onClick={() => setOpenEye(prev => !prev)}>
                                    {
                                        OpenEye == true ? <>
                                            <span
                                                class=""
                                            >
                                                <AiOutlineEyeInvisible className='w-[18px] text-[#B4B7C2] h-[18px]>' />
                                            </span>
                                        </> :

                                            <>  <span
                                                class=" "
                                            >
                                                <img src={eye} className='w-[18px] h-[18px] ' alt="" />
                                            </span>
                                            </>

                                    }
                                </div>


                            </div>










                        </div>


                    </div>







                    <div className='sm:w-[600px] w-[280px] mx-auto mt-5 '>
                        <div className='sm:flex justify-between items-center '>
                            <div className='flex gap-[10px]  items-center '>
                                <input type="checkbox" className='w-[16px] h-4 ' name="" id="" />


                                <p className='text-[14px] font-semibold SemiBold'>Remember for 30 Days.</p>
                            </div>
                            <Link to='/forgetPass' className='text-[14px]  sm:mt-0 mt-[5px] sm:text-start text-center font-semibold SemiBold'>
                                Forgot password?
                            </Link>
                        </div>



                    </div>


                    <div className='flex justify-center mt-[50px]'>

                        <div>
                            <div className=' '>
                                <button type='submit' className='text-center font-bold Bold rounded-[4px]  w-[280px] h-[48px] sm:w-[600px] sm:h-[54px] mx-auto  bg-[#60599E] text-white hover:bg-[#3f3a68]'>
                                    Sign in

                                </button>
                            </div>
                            <div className=' mt-[30px] SignWithGoogle   rounded-[4px] w-[280px] h-[48px] sm:w-[600px] sm:h-[54px] py-5 flex justify-center gap-[10px] items-center'>
                                <img src={goggleIcon} className='w-[24px] h-[24px]' alt="" />

                                <Link>
                                    <button type='submit' className='text-center text-[16px] hover:text-[#3f3a68] font-bold Bold  text-[#60599E] '>

                                        Sign up with google

                                    </button>


                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='text-center mt-[30px] '>
                        <p className='text-[16px] font-normal Normal'>Don’t have an account? <Link to='/signUp' className='font-bold Bold text-[#60599E] hover:text-[#3f3a68] '>  Sign Up</Link></p>
                    </div>




                </form >
            </div >

        </>
    );
};

export default LogIn;