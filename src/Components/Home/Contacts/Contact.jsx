import React from 'react';
import '../../Shared/Style.css';

const Contact = () => {
    return (
        <>


            <div className='mt-[178px]'>
                <h1 className='text-[25px] sm:w-[672px] mx-auto sm:text-[45px] text-center font-semibold SemiBold'>Let’s Start Landing Page Only $99.99

                </h1>
                <p className='text-center text-lg sm:w-[720px] mx-auto mt-[25px] font-normal Normal'>
                    Maybe there's an opportunity for your business to find value through a collaboration with Xpeed Page. Please share your thoughts in the form below, and we’ll respond within 48 hours of receiving the inquiry.
                </p>
            </div>

            <div className='flex justify-center'>
                <div className='mt-[80px]'>

                    <div className='sm:flex gap-[30px] '>
                        <div className=''>
                            <p className='text-[14px] pb-[15px] font-bold Bold'>First Name*</p>
                            <input type="text" className='inputBorder w-[285px] h-[48px]  py-5 px-[15px] ' placeholder='Your First Name' />
                        </div>
                        <div className=''>
                            <p className='text-[14px] pb-[15px] font-bold Bold'>Last Name*</p>
                            <input type="text" className='inputBorder w-[285px] h-[48px] py-5 px-[15px] ' placeholder='Your Last Name' />
                        </div>
                    </div>



                    <div className='mt-[28.5px]'>
                        <p className='text-[14px] pb-[15px] font-bold Bold'>Email*</p>
                        <input type="email" className='inputBorder w-[280px] h-[48px] sm:w-[600px] sm:h-[54px] py-5 px-[15px] ' placeholder='Enter Your Email' />
                    </div>

                    <div className='mt-[30px]'>
                        <p className='text-[14px] pb-[15px] font-bold Bold '>Landing Page Details *</p>
                        <textarea className='py-5 px-[15px] w-[601px] h-[284px]' name="" placeholder='Write your landing page details' id="" ></textarea>
                    </div>


                    {/* check */}


                    <div className='flex gap-[10px] mt-[20px] items-center '>
                        <input type="checkbox" className='w-[16px] h-4 ' name="" id="" />


                        <p className='text-[14px] font-semibold SemiBold'>I agree to all Terms and Privacy Policy.</p>
                    </div>



                    {/*  */}

                    <div className=' mt-[50px] mb-[263px]'>
                        <button type='submit' className='text-center font-bold Bold rounded-[4px]
                         w-[280px] h-[48px] sm:w-[600px] sm:h-[54px]  bg-[#60599E] text-white hover:bg-[#3f3a68]'>
                            Send

                        </button>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Contact;