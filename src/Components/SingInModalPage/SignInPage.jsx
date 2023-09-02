import React, { useEffect, useState } from 'react';
import '../SingInModalPage/SingInModal.css'
import { Link } from 'react-router-dom';
import cancel from '../../assets/Images/Icon/remove.png'
import '../Shared/Style.css'

const SignInPage = ({ closeSignModal }) => {

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'scroll';


        }


    }, [])

    const [OpenEye, setOpenEye] = useState(false);

    const [OpenJoinPage, setOpenJoinPage] = useState(false);
    const [OpenForgetPass, setOpenForgetPass] = useState(false);




    return (
        <>

            <div className='modal-wrapper' onClick={closeSignModal}></div>


            <div>
                {
                    OpenJoinPage ? <>

                        <div className='Modal-container h-[462px] w-[970px]'>
                            <div className='crossBar w-[50px] h-[50px]'>
                                <button onClick={closeSignModal} className='border-[2px] rounded-[50%] hover:border-white border-[#E5DFDC] w-[50px] h-[50px]'> <img src={cancel} alt="" className='w-[28px] h-[28px] mx-auto ' /> </button>


                            </div>


                            <div>
                                <div className='flex' >
                                    <div className=' pl-[61px] pr-[81px] sm:mt-[79px]'>
                                        <h1 className='mt-[45px]  text-center text-[25px] sm:text-[35px] font-bold Bold'> Create Your Account</h1>

                                        <p className='text-[18px] text-center w-[303px] mx-auto font-normal Normal mt-[15px]'>Let's Sign Up first enter into Xpeed Page website! </p>
                                    </div>

                                    <hr className=' border-[1px] mt-[60px] h-[204px]' />

                                    <form className='pl-[48px]'>


                                        <div className='flex justify-center  '>
                                            <div>
                                                <div className=''>
                                                    <p className='text-[14px] mb-[10px] font-bold Bold'>Full Name*</p>
                                                    <input type="email" className='  border-[1px]  border-[#E1D8CB]   w-[200px] h-[38px] sm:w-[350px] sm:h-[45px] px-[15px] ' placeholder='Enter Your Email' />
                                                </div>

                                                <div className='mt-[13px]'>
                                                    <p className='text-[14px] mb-[10px] font-bold Bold'>Email*</p>
                                                    <input type="email" className='  border-[1px]  border-[#E1D8CB]   w-[200px] h-[38px] sm:w-[350px] sm:h-[45px] px-[15px] ' placeholder='Enter Your Email' />
                                                </div>

                                                <div className='mt-[13px]'>
                                                    <p className='text-[14px] mb-[10px] font-bold Bold'>Password*</p>

                                                </div>



                                                <div className="  flex  w-[280px] h-[48px] sm:w-[350px] sm:h-[45px]  pl-[15px]  mx-auto bg-[#FFFFFF] border-[1px]  border-[#E1D8CB] items-center  rounded-[4px] ">



                                                    <input type={OpenEye ? "text" : "password"} id='passwordSearch' className="     lg:w-[555px]  bg-[#FFFFFF]  " placeholder='Enter Your Password' />






                                                    <div className='pr-[10px] sm:pr-5' onClick={() => setOpenEye(prev => !prev)}>
                                                        {
                                                            OpenEye == true ? <>
                                                                <p className='text-[#C6C1C0] text-[14px] font-normal Normal'>Hide</p>
                                                            </> :

                                                                <>
                                                                    {/* TODO */}
                                                                    <p className=' text-[14px] text-primary font-bold Bold'>Show</p>
                                                                </>

                                                        }
                                                    </div>


                                                </div>










                                            </div>


                                        </div>


                                        <div className='flex justify-center mt-[28px]'>

                                            <div>
                                                <div className=' '>
                                                    <button type='submit' className='text-center font-bold Bold rounded-[8px]  w-[280px] h-[48px] sm:w-[350px] sm:h-[50px] mx-auto  bg-[#60599E] text-white hover:bg-[#3f3a68]'>
                                                        Create Account

                                                    </button>
                                                </div>

                                            </div>
                                        </div>

                                        <div className='text-center mt-[20px]  '>
                                            <p className='text-[14px] Bold font-bold'>Already have an account?   <Link onClick={() => { setOpenJoinPage(false) }} className='font-bold Bold text-[#60599E] hover:text-[#3f3a68] '>  Sign in</Link></p>
                                        </div>




                                    </form >
                                </div>
                            </div>
                        </div>





                    </> : <>

                        {
                            OpenForgetPass ? <>


                                <div className='Modal-container h-[408px] w-[970px]'>
                                    <div className='crossBar w-[50px] h-[50px]'>
                                        <button onClick={closeSignModal} className='border-[2px] rounded-[50%] hover:border-white border-[#E5DFDC] w-[50px] h-[50px]'> <img src={cancel} alt="" className='w-[28px] h-[28px] mx-auto ' /> </button>


                                    </div>


                                    <div>
                                        <div className='flex' >
                                            <div className=' pl-[61px] pr-[61px] sm:mt-[79px]'>
                                                <h1 className='mt-[3px]  text-center text-[25px] sm:text-[35px] font-bold Bold'>
                                                    Reset Your Password</h1>

                                                <p className='text-[18px] w-[366px] mx-auto text-center font-normal Normal mt-[15px]'>Your password reset link will be sent to the registered email address.</p>
                                            </div>

                                            <hr className=' border-[1px] mt-[60px] h-[204px]' />

                                            <form className='pl-[48px]'>


                                                <div className='flex justify-center  '>
                                                    <div>
                                                        <div className=''>
                                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Full Name*</p>

                                                            <input type="text" className='  border-[1px]  border-[#E1D8CB]   w-[200px] h-[38px] sm:w-[350px] sm:h-[45px] px-[15px] ' placeholder='Your Full Name' />
                                                        </div>

                                                        <div className='mt-[13px]'>
                                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Email*</p>

                                                        </div>



                                                        <div className="  flex  w-[280px] h-[48px] sm:w-[350px] sm:h-[45px]  pl-[15px]  mx-auto bg-[#FFFFFF] border-[1px]  border-[#E1D8CB] items-center  rounded-[4px] ">



                                                            <input type="email" id='passwordSearch' className="     lg:w-[555px]  bg-[#FFFFFF]  " placeholder='Enter Your Email' />







                                                        </div>










                                                    </div>


                                                </div>


                                              


                                                <div className='flex justify-center mt-[28px]'>

                                                    <div>
                                                        <div className=' '>
                                                            <button type='submit' className='text-center font-bold Bold rounded-[8px]  w-[280px] h-[48px] sm:w-[350px] sm:h-[50px] mx-auto  bg-[#60599E] text-white hover:bg-[#3f3a68]'>
                                                            Reset Password

                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='text-center mt-[20px]  '>
                                                    <p className='text-[14px] Bold font-bold'>Remembered your password? <Link onClick={() => {
                                                         setOpenForgetPass(false)}} className='font-bold Bold text-[#60599E] hover:text-[#3f3a68] '>  Sign in </Link></p>
                                                </div>





                                            </form >
                                        </div>
                                    </div>
                                </div>






                            </> : <>



                                <div className='Modal-container h-[408px] w-[970px]'>
                                    <div className='crossBar w-[50px] h-[50px]'>
                                        <button onClick={closeSignModal} className='border-[2px] rounded-[50%] hover:border-white border-[#E5DFDC] w-[50px] h-[50px]'> <img src={cancel} alt="" className='w-[28px] h-[28px] mx-auto ' /> </button>


                                    </div>


                                    <div>
                                        <div className='flex' >
                                            <div className='  pl-[61px] pr-[61px] sm:mt-[79px]'>
                                                <h1 className='mt-[11px] text-center text-[25px] sm:text-[35px] font-bold Bold'> 👋 <br />
                                                    Good To See You Again</h1>

                                                <p className='text-[18px] text-center font-normal Normal mt-[15px]'>Sign in to your account </p>
                                            </div>

                                            <hr className=' border-[1px] mt-[60px] h-[204px]' />

                                            <form className='pl-[48px]'>


                                                <div className='flex justify-center  '>
                                                    <div>
                                                        <div className=''>
                                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Email*</p>
                                                            <input type="email" className='  border-[1px]  border-[#E1D8CB]   w-[200px] h-[38px] sm:w-[350px] sm:h-[45px] px-[15px] ' placeholder='Enter Your Email' />
                                                        </div>

                                                        <div className='mt-[14px]'>
                                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Password*</p>

                                                        </div>



                                                        <div className="  flex  w-[280px] h-[48px] sm:w-[350px] sm:h-[45px]  pl-[15px]  mx-auto bg-[#FFFFFF] border-[1px]  border-[#E1D8CB] items-center  rounded-[4px] ">



                                                            <input type={OpenEye ? "text" : "password"} id='passwordSearch' className="     lg:w-[555px]  bg-[#FFFFFF]  " placeholder='Enter Your Password' />






                                                            <div className='pr-[10px] sm:pr-5' onClick={() => setOpenEye(prev => !prev)}>
                                                                {
                                                                    OpenEye == true ? <>
                                                                        <p className='text-[#C6C1C0] text-[14px] font-normal Normal'>Hide</p>
                                                                    </> :

                                                                        <>
                                                                            {/* TODO */}
                                                                            <p className=' text-[14px] text-primary font-bold Bold'>Show</p>
                                                                        </>

                                                                }
                                                            </div>


                                                        </div>










                                                    </div>


                                                </div>







                                                <div className='sm:w-[350px] w-[280px] mx-auto mt-5 '>
                                                    <div className='sm:flex justify-between items-center '>
                                                        <div className='flex gap-[10px]  items-center '>
                                                            <input type="checkbox" className='w-[16px] h-4 ' name="" id="" />


                                                            <p className='text-[12px] font-semibold SemiBold'>Remember for 30 Days.</p>
                                                        </div>
                                                        <Link onClick={() => {
                                                            setOpenForgetPass(true)
                                                        }} className='text-[12px] hover:underline  sm:mt-0 mt-[5px] sm:text-start text-center font-semibold SemiBold'>
                                                            Forgot password?
                                                        </Link>
                                                    </div>



                                                </div>


                                                <div className='flex justify-center mt-[30px]'>

                                                    <div>
                                                        <div className=' '>
                                                            <button type='submit' className='text-center font-bold Bold rounded-[8px]  w-[280px] h-[48px] sm:w-[350px] sm:h-[50px] mx-auto  bg-[#60599E] text-white hover:bg-[#3f3a68]'>
                                                                Sign in

                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className='text-center mt-[20px]  '>
                                                    <p className='text-[14px] Bold font-bold'>Not Registered?  <Link onClick={() => { setOpenJoinPage(true) }} className='font-bold Bold text-[#60599E] hover:text-[#3f3a68] '>  Join Us</Link></p>
                                                </div>




                                            </form >
                                        </div>
                                    </div>
                                </div>



                            </>
                        }


                    </>
                }

            </div>

        </>
    );
};

export default SignInPage;