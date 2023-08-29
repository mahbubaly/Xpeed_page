import React, { useEffect } from 'react';
import '../Shared/Modal.css'
import popUpCart from '../../assets/Images/popCart.png'

const Modal = ({ closeModal }) => {

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'scroll';


        }


    }, [])


    return (
        <>
            <div className='Modal-wrapper' onClick={closeModal}>

            </div>
            <div className='modal-container  '>

                <div className=' flex'>
                    <div className='flex pl-[29px] pt-[30px] '>
                        <div className=''>
                            <p className='text-lg font-bold Bold'>Your Cart (2)</p>


                            <div className='mt-[30px] overflow-y-scroll ScrollBar h-[450px]  pr-[10px]'>

                                <div className=' h-[281px] w-[270px] px-[4px] pb-[4px] pt-[3px]  rounded-[4px] bg-white PopShadow  ' >

                                    <img src={popUpCart} className=' rounded-[4px] flex-shrink-0 ' alt="" />







                                    <div className='bg-[#fcf7f4] pb-[15px] px-[15px]   mt-5 sm:mt-10  lg:mt-[3px]'>
                                        <h1 className='text-[14px] pt-[15px] font-semibold SemiBold'>Gravity - Multi-Purpose HTML Template</h1>



                                    </div>



                                </div>
                                <div className='mt-[30px] w-[270px] px-[4px] pb-[4px] pt-[3px]  rounded-[4px] bg-white PopShadow  ' >

                                    <img src={popUpCart} className=' rounded-[4px] flex-shrink-0 ' alt="" />







                                    <div className='bg-[#fcf7f4] pb-[15px] px-[15px]   mt-5 sm:mt-10  lg:mt-[3px]'>
                                        <h1 className='text-[14px] pt-[15px] font-semibold SemiBold'>Gravity - Multi-Purpose HTML Template</h1>



                                    </div>



                                </div>
                             
                            </div>


                        </div>




                    </div>

                    <hr className='w-[1px]  h-[593px] ml-[13px] bg-[#EFEEF5]' />

                    {/* pay system */}

                    <div className='  p-5 '>
                        <div className='flex justify-between gap-[189px] items-center'>
                            <p className='text-lg font-bold Bold '>Checkout</p>
                            <button className='w-[80px] h-[35px] text-[#60599E] text-[12px] font-bold Bold border-[1px] rounded-[4px] border-[#60599E]'>Paypal</button>
                        </div>

                        <div className='mt-[24px]'>
                            <p className='text-[14px] pb-[15px] font-bold Bold'>Email*</p>
                            <input type="email" className='inputOutline w-[280px] h-[48px] sm:w-[356px] sm:h-[44px] py-5 px-[15px] ' placeholder='Enter Your Email' />
                        </div>
                        <div className='mt-[15px]'>
                            <p className='text-[14px] pb-[15px] font-bold Bold'>Card Information*</p>

                            <input type="text"  className='rounded-t-[4px] w-[280px] h-[48px] sm:w-[356px] sm:h-[44px] py-5 px-[15px] ' placeholder='Name On Card'  />

                            <input type="text" className=' w-[280px] h-[48px] sm:w-[356px] sm:h-[44px] py-5 px-[15px] ' placeholder='1234 1234 1234 1234' data-mask="000 000 000 0000" />

                            <div >
                                <input type="text" className='rounded-s-[4px] w-[280px] h-[48px] sm:w-[178px] sm:h-[44px] py-5 px-[15px] ' placeholder='MM / YY' />
                                <input type="number" className=' rounded-e-[4px] w-[280px] h-[48px] sm:w-[178px] sm:h-[44px] py-5 px-[15px] ' placeholder='CVC' />
                            </div>
                        </div>

                        <div className='mt-[15px]'>
                            <p className='text-[14px] pb-[15px] font-bold Bold'>Set Account Password*</p>
                            <input type="password" className='inputOutline w-[280px] h-[48px] sm:w-[356px] sm:h-[44px] py-5 px-[15px] ' placeholder='Password' />
                        </div>


                        <p className='text-[14px] mt-5 text-center w-[324px] mx-auto font-normal Normal'>Paying a total of $19.98 for 2 products. Download with All-Access instead?</p>

                        <button type='submit' className='mt-[30px] text-center font-bold Bold rounded-[4px]
                         w-[280px] h-[48px] sm:w-[356px] sm:h-[48px]  bg-[#60599E] text-white hover:bg-[#3f3a68]'>
                            Pay $19.98

                        </button>
                    </div>



                </div>

            </div>

        </>
    );
};

export default Modal;