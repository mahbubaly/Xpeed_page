import React from 'react';
import '../Shared/Style.css';
import { Link } from 'react-router-dom';

const ForgetPass = () => {
    return (
        <>
            <div className='mt-[149px] '>
                <h1 className='text-center font-bold text-[45px] Bold'>Forgot your password?</h1>
                <p className='text-center w-[570px] mx-auto mt-5 text-[20px] font-normal Normal'>Please enter your email address so we can send you a link to reset your password.</p>
            </div>

            <div className='flex justify-center mt-[50px] pb-[269.5px]'>

                <div>

                    <div className=''>
                        <p className='text-[14px] pb-[15px] font-bold Bold'>Email*</p>
                        <input type="email" className='inputBorder  w-[280px] h-[48px] sm:w-[600px] sm:h-[54px] px-[15px] ' placeholder='e.g. john@gmail.com' />
                    </div>
                    <div className=' mt-[50px]'>
                        <button type='submit' className='text-center font-bold  w-[280px] h-[48px] sm:w-[600px] sm:h-[54px] Bold rounded-[4px]   bg-[#60599E] text-white hover:bg-[#3f3a68]'>
                            Send Email

                        </button>
                    </div>

                </div>
            </div>


        </>
    );
};

export default ForgetPass;