import React, { useEffect, useState } from 'react';
import '../SingInModalPage/SingInModal.css'
import { Link } from 'react-router-dom';
import cancel from '../../assets/Images/Icon/remove.png'
import MobileCancel from '../../assets/Images/Icon/MobileRemove.png'
import logo from '../../assets/Images/logo.png'
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

                        <div className='Modal-container h-[680px] w-[320px] sm:h-[462px] sm:w-[970px]'>
                            <div className='crossBar hidden sm:block'>
                                <button onClick={closeSignModal} className='border-[2px] rounded-[50%] sm:hover:border-white hover:border-[#28244c] sm:border-[#E5DFDC] border-primary w-[42px] h-[42px] sm:w-[50px] sm:h-[50px]'> <img src={cancel} alt="" className='w-[28px]  h-[28px] mx-auto ' />

                                </button>


                            </div>


                            {/* mobile logo and cancel icon  */}


                            <div className='sm:hidden block'>

                                <div className='flex justify-between items-center pt-[30px] px-5'>
                                    <img src={logo} alt="" className='w-[40px] h-[24px]' />
                                    <button onClick={closeSignModal} className='border-[2px] rounded-[50%] sm:hover:border-white hover:border-[#28244c] sm:border-[#E5DFDC] border-primary w-[42px] h-[42px] sm:w-[50px] sm:h-[50px]'>

                                        <img src={MobileCancel} alt="" className='w-[28px] sm:hidden block h-[28px] mx-auto ' />


                                    </button>
                                </div>


                            </div>



                            <div>
                                <div className='sm:flex p-5 sm:p-0' >
                                    <div className=' sm:pl-[61px] sm:pr-[81px] sm:mt-[79px]'>
                                        <h1 className='mt-[45px]  sm:text-center text-[25px] sm:text-[35px] font-bold Bold'> Create Your Account</h1>

                                        <p className='text-[14px] sm:text-[18px] sm:text-center sm:w-[303px] mx-auto font-normal Normal mt-[15px]'>Let's Sign Up first enter into Xpeed Page website! </p>
                                    </div>

                                    <hr className=' border-[1px] sm:block hidden mt-[60px] h-[204px]' />

                                    <form className='sm:pl-[48px]'>


                                        <div className='flex justify-center  '>
                                            <div>
                                                <div className='mt-[30px] sm:mt-0'>
                                                    <p className='text-[14px] mb-[10px] font-bold Bold'>Full Name*</p>
                                                </div>

                                                <div className="  flex  w-[280px] h-[45px] sm:w-[352px] sm:h-[47px]  pl-[15px]  mx-auto bg-[#FFFFFF] border-[1px]  border-[#E1D8CB] items-center  rounded-[8px] ">

                                                    <input type="text" id='passwordSearch' className="  w-[200px] h-[38px] sm:w-[350px]  bg-[#FFFFFF]  " placeholder='Your Full Name' />

                                                </div>

                                                <div className='mt-[13px]'>
                                                    <p className='text-[14px] mb-[10px] font-bold Bold'>Email*</p>
                                                </div>

                                                <div className="  flex w-[280px] h-[45px] sm:w-[352px] sm:h-[47px]  pl-[15px]  mx-auto bg-[#FFFFFF] border-[1px]  border-[#E1D8CB] items-center  rounded-[8px] ">



                                                    <input type="email" id='passwordSearch' className="  w-[200px] h-[38px] sm:w-[350px]  bg-[#FFFFFF]  " placeholder='Enter your Email' />







                                                </div>

                                                <div className='mt-[13px]'>
                                                    <p className='text-[14px] mb-[10px] font-bold Bold'>Password*</p>

                                                </div>



                                                <div className="  flex  w-[280px] h-[45px] sm:w-[350px] sm:h-[45px]  pl-[15px]  mx-auto bg-[#FFFFFF] border-[1px]  border-[#E1D8CB] items-center  rounded-[8px] ">



                                                    <input type={OpenEye ? "text" : "password"} id='passwordSearch' className="      w-[200px] h-[38px] sm:w-[350px]  bg-[#FFFFFF]  " placeholder='Enter Your Password' />






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

                                        <div className='sm:text-center mt-[20px]  '>
                                            <p className='text-[14px] Bold font-bold'>Already have an account?   <Link onClick={() => { setOpenJoinPage(false) }} className='font-bold Bold text-[#60599E] hover:text-[#3f3a68] '>  Sign in</Link></p>
                                        </div>




                                    </form >
                                </div>
                            </div>
                        </div>





                    </> : <>

                        {
                            OpenForgetPass ? <>


                                <div className='Modal-container w-[320px] h-[568px] sm:h-[408px] sm:w-[970px]'>
                                    <div className='crossBar hidden sm:block'>
                                        <button onClick={closeSignModal} className='border-[2px] rounded-[50%] sm:hover:border-white hover:border-[#28244c] sm:border-[#E5DFDC] border-primary w-[42px] h-[42px] sm:w-[50px] sm:h-[50px]'> <img src={cancel} alt="" className='w-[28px]  h-[28px] mx-auto ' />

                                        </button>


                                    </div>


                                    {/* mobile logo and cancel icon  */}


                                    <div className='sm:hidden block'>

                                        <div className='flex justify-between items-center pt-[30px] px-5'>
                                            <img src={logo} alt="" className='w-[40px] h-[24px]' />
                                            <button onClick={closeSignModal} className='border-[2px] rounded-[50%] sm:hover:border-white hover:border-[#28244c] sm:border-[#E5DFDC] border-primary w-[42px] h-[42px] sm:w-[50px] sm:h-[50px]'>

                                                <img src={MobileCancel} alt="" className='w-[28px] sm:hidden block h-[28px] mx-auto ' />


                                            </button>
                                        </div>


                                    </div>


                                    <div>
                                        <div className='sm:flex p-5 sm:p-0' >
                                            <div className=' sm:pl-[61px] sm:pr-[61px] mt-[15px] sm:mt-[79px]'>
                                                <h1 className='mt-[3px]  sm:text-center text-[25px] sm:text-[35px] font-bold Bold'>
                                                    Reset Your Password</h1>

                                                <p className='text-[14px] sm:text-[18px] sm:w-[366px] mx-auto sm:text-center font-normal Normal mt-[15px]'>Your password reset link will be sent to the registered email address.</p>
                                            </div>

                                            <hr className=' border-[1px] hidden sm:block mt-[60px] h-[204px]' />

                                            <form className='sm:pl-[48px]'>


                                                <div className='flex justify-center  '>
                                                    <div>
                                                        <div className='mt-[30px] sm:mt-0'>
                                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Full Name*</p>
                                                        </div>

                                                        <div className="  flex  w-[280px] h-[45px] sm:w-[352px] sm:h-[47px]  pl-[15px]  mx-auto bg-[#FFFFFF] border-[1px]  border-[#E1D8CB] items-center  rounded-[8px] ">



                                                            <input type="text" id='passwordSearch' className="  w-[200px] h-[38px] sm:w-[350px]  bg-[#FFFFFF]  " placeholder='Your Full Name' />







                                                        </div>




                                                        <div className='mt-[13px]'>
                                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Email*</p>

                                                        </div>



                                                        <div className="  flex  w-[280px] h-[45px] sm:w-[352px] sm:h-[47px]  pl-[15px]  mx-auto bg-[#FFFFFF] border-[1px]  border-[#E1D8CB] items-center  rounded-[8px] ">
                                                            <input type="email" id='passwordSearch' className="      w-[200px] h-[38px] sm:w-[350px]  bg-[#FFFFFF]  " placeholder='Enter Your Email' />

                                                        </div>


                                                    </div>


                                                </div>





                                                <div className='flex justify-center mt-[28px]'>

                                                    <div>
                                                        <div className=' '>
                                                            <button type='submit' className='text-center font-bold Bold rounded-[8px]  w-[280px] h-[45px] sm:w-[350px] sm:h-[50px] mx-auto  bg-[#60599E] text-white hover:bg-[#3f3a68]'>
                                                                Reset Password

                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='sm:text-center mt-[20px]  '>
                                                    <p className='text-[14px] Bold font-bold'>Remembered your password? <Link onClick={() => {
                                                        setOpenForgetPass(false)
                                                    }} className='font-bold Bold text-[#60599E] hover:text-[#3f3a68] '>  Sign in </Link></p>
                                                </div>





                                            </form >
                                        </div>
                                    </div>
                                </div>






                            </> : <>



                                <div className='Modal-container w-[320px] h-[620px] sm:h-[408px] sm:w-[970px]'>

                                    {/* desktop logo and cancel icon  */}
                                    <div className='crossBar hidden sm:block'>
                                        <button onClick={closeSignModal} className='border-[2px] rounded-[50%] sm:hover:border-white hover:border-[#28244c] sm:border-[#E5DFDC] border-primary w-[42px] h-[42px] sm:w-[50px] sm:h-[50px]'> <img src={cancel} alt="" className='w-[28px]  h-[28px] mx-auto ' />

                                        </button>


                                    </div>


                                    {/* mobile logo and cancel icon  */}


                                    <div className='sm:hidden block'>

                                        <div className='flex justify-between items-center pt-[30px] px-5'>
                                            <img src={logo} alt="" className='w-[40px] h-[24px]' />
                                            <button onClick={closeSignModal} className='border-[2px] rounded-[50%] sm:hover:border-white hover:border-[#28244c] sm:border-[#E5DFDC] border-primary w-[42px] h-[42px] sm:w-[50px] sm:h-[50px]'>

                                                <img src={MobileCancel} alt="" className='w-[28px] sm:hidden block h-[28px] mx-auto ' />


                                            </button>
                                        </div>


                                    </div>


                                    <div>
                                        <div className='sm:flex sm:p-0 px-5 pt-5' >
                                            <div className='  sm:pl-[61px] sm:pr-[61px] sm:mt-[79px]'>
                                                <h1 className='mt-[11px] sm:text-center text-[25px] sm:text-[35px] font-bold Bold '> 👋 <br />
                                                    Good To See You Again</h1>

                                                <p className='text-[14px] sm:text-[18px] sm:text-center font-normal Normal mt-[15px]'>Sign in to your account </p>
                                            </div>

                                            <hr className='hidden sm:block border-[1px] mt-[60px] h-[204px]' />

                                            <form className='sm:pl-[48px]'>


                                                <div className='flex justify-center  '>
                                                    <div>
                                                        <div className='sm:mt-0 mt-[30px]'>
                                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Email*</p>
                                                        </div>

                                                        <div className="  flex  w-[280px] h-[45px] sm:w-[352px] sm:h-[47px]  pl-[15px]  mx-auto bg-[#FFFFFF] border-[1px]  border-[#E1D8CB] items-center  rounded-[8px] ">



                                                            <input type="email" id='passwordSearch' className="  w-[200px] h-[38px] sm:w-[350px]  bg-[#FFFFFF]  " placeholder='Enter Your Email' />







                                                        </div>

                                                        <div className='mt-[13px]'>
                                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Password*</p>

                                                        </div>



                                                        <div className="  flex   w-[280px] h-[45px] sm:w-[352px] sm:h-[47px]  pl-[15px]  mx-auto bg-[#FFFFFF] border-[1px]  border-[#E1D8CB] items-center  rounded-[8px] ">



                                                            <input type={OpenEye ? "text" : "password"} id='passwordSearch' className="      w-[200px] h-[38px] sm:w-[350px]  bg-[#FFFFFF]  " placeholder='Enter Your Password' />






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

                                                <div className='sm:w-[350px] w-[280px] mx-auto mt-[13.5px] '>
                                                    <div className='flex justify-between items-center '>
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


                                                <div className='flex justify-center my-[30px] '>

                                                    <div>
                                                        <div className=' '>
                                                            <button type='submit' className='text-center font-bold Bold rounded-[8px]  w-[280px] h-[48px] sm:w-[350px] sm:h-[50px] mx-auto  bg-[#60599E] text-white hover:bg-[#3f3a68]'>
                                                                Sign in

                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className='sm:text-center mt-[20px] '>
                                                    <p className='text-[14px] Bold font-bold '>Not Registered?  <Link onClick={() => { setOpenJoinPage(true) }} className='font-bold Bold text-[#60599E] hover:text-[#3f3a68] '>  Join Us</Link></p>
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