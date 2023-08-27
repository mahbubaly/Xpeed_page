import React from 'react';
import '../../Shared/Style.css';
import { Link } from 'react-router-dom';
import check from '../../../assets/Images/Icon/Check.png'

const UltimateAccess = () => {
    return (
        <>
            <div className=' mx-auto sm:w-[831px] mt-[50px] sm:mt-[80px]'>

                <h1 className='lg:text-[45px]  sm:text-[40px] text-[25px] text-center  font-semibold SemiBold'>Choose The Best Plan For Your Projects Needs & Access Over 10,000 HTML5 & Figma Design Resources

                </h1>

            </div>


            <div className='  mt-[80px]'>
                <div className='grid   sm:grid-cols-2 lg:flex gap-[50px] px-5 lg:px-0 justify-center'>

                    {/* 1 */}
                    <div className='bg-[#F8EAE6] sm:w-[322px] rounded-[10px] ' >
                        <h1 className=' font-normal Normal pt-[30px] text-center'><span className='text-[48px] font-semibold SemiBold'>$66</span></h1>

                        <h2 className='font-semibold SemiBold text-[22px] text-center mt-[14px]'>Paid Every 6 Months</h2>

                        <div className='pl-[30px] '>
                            <div className='flex gap-[10px] mt-[30px] items-center'>
                                <img src={check} className='w-[16px] h-[16px]' />
                                <h3 className='text-[16px] font-normal Normal'> 10 Download Per Day</h3>
                            </div>
                            <div className='flex gap-[10px] my-[15px] items-center'>
                                <img src={check} className='w-[16px] h-[16px]' />
                                <h3 className='text-[16px]  font-normal Normal'> Access To All Design Resources</h3>
                            </div>
                            <div className='flex gap-[10px] items-center'>
                                <img src={check} className='w-[16px] h-[16px]' />
                                <h3 className='text-[16px] font-normal Normal'>  Access To New Releases</h3>
                            </div>
                            <div className='flex gap-[10px] my-[15px] items-center'>
                                <img src={check} className='w-[16px] h-[16px]' />
                                <h3 className='text-[16px] font-normal Normal'> Use personal & commercial</h3>
                            </div>
                            <div className='flex gap-[10px] items-center'>
                                <img src={check} className='w-[16px] h-[16px]' />
                                <h3 className='text-[16px] font-normal Normal'> Priority support </h3>
                            </div>
                            <div className='flex gap-[10px] mt-[15px] items-center'>
                                <img src={check} className='w-[16px] h-[16px]' />
                                <h3 className='text-[16px] font-normal Normal'> 15% Renewal Discount</h3>
                            </div>






                        </div>

                        <Link onClick={() => {
                            window.scrollTo(0, 0);
                        }} to='/viewAllFigmaTemplate' className=' flex justify-center mt-[50px] '>
                            <button className='bg-[#60599E] hover:bg-[#3f3a68] rounded-[4px] mx-auto text-white w-[222px] h-[54px] text-[16px] font-bold Bold'>FIGMA</button>
                        </Link>

                        <p className='mt-[30px] px-[42px] pb-[30px] text-center italicBold text-[14px] font-bold italic'>“This Price Is Only For <Link className='text-primary'>Figma Design</Link> Resources”</p>





                    </div>
                    {/* 2 */}
                    <div className='bg-[#FFDFA4] sm:w-[322px] rounded-[10px] '>
                        <h1 className=' font-normal Normal pt-[30px] text-center'><span className='text-[48px] font-semibold SemiBold'>$119</span></h1>

                        <h2 className='font-semibold SemiBold text-[22px] text-center mt-[14px]'>Paid Every 6 Months</h2>

                        <div className='pl-[30px] '>
                            <div className='flex gap-[10px] mt-[30px] items-center'>
                                <img src={check} className='w-[16px] h-[16px]' />
                                <h3 className='text-[16px] font-normal Normal'> 10 Download Per Day</h3>
                            </div>
                            <div className='flex gap-[10px] my-[15px] items-center'>
                                <img src={check} className='w-[16px] h-[16px]' />
                                <h3 className='text-[16px]  font-normal Normal'> Access To All Design Resources</h3>
                            </div>
                            <div className='flex gap-[10px] items-center'>
                                <img src={check} className='w-[16px] h-[16px]' />
                                <h3 className='text-[16px] font-normal Normal'>  Access To New Releases</h3>
                            </div>
                            <div className='flex gap-[10px] my-[15px] items-center'>
                                <img src={check} className='w-[16px] h-[16px]' />
                                <h3 className='text-[16px] font-normal Normal'> Use personal & commercial</h3>
                            </div>
                            <div className='flex gap-[10px] items-center'>
                                <img src={check} className='w-[16px] h-[16px]' />
                                <h3 className='text-[16px] font-normal Normal'> Priority support </h3>
                            </div>
                            <div className='flex gap-[10px] mt-[15px] items-center'>
                                <img src={check} className='w-[16px] h-[16px]' />
                                <h3 className='text-[16px] font-normal Normal'> 15% Renewal Discount</h3>
                            </div>






                        </div>

                        <Link onClick={() => {
                            window.scrollTo(0, 0);
                        }} to='/viewAllHtmlTemplate' className=' flex justify-center mt-[50px] '>
                            <button className='bg-[#60599E] hover:bg-[#3f3a68] rounded-[4px] mx-auto text-white w-[222px] h-[54px]  text-[16px] font-bold Bold'>HTML5</button>
                        </Link>



                        <p className='mt-[30px] px-[42px] pb-[30px] text-center italicBold text-[14px] font-bold italic'>“This Price Is Only For <Link className='text-primary'>HTML5</Link> Resources”</p>





                    </div>
                    {/* 3 */}
                    <div className='bg-[#B2CEC9] sm:w-[322px] ml-0 sm:ml-[50%] lg:ml-0 rounded-[10px] '>
                        <h1 className=' font-normal Normal pt-[30px] text-center'><span className='text-[48px] font-semibold SemiBold'>$199</span></h1>

                        <h2 className='font-semibold SemiBold text-[22px] text-center mt-[14px]'>Paid Every 12 Months</h2>

                        <div className='pl-[30px] '>
                            <div className='flex gap-[10px] mt-[30px] items-center'>
                                <img src={check} className='w-[16px] h-[16px]' />
                                <h3 className='text-[16px] font-normal Normal'> 10 Download Per Day</h3>
                            </div>
                            <div className='flex gap-[10px] my-[15px] items-center'>
                                <img src={check} className='w-[16px] h-[16px]' />
                                <h3 className='text-[16px]  font-normal Normal'> Access To All Design Resources</h3>
                            </div>
                            <div className='flex gap-[10px] items-center'>
                                <img src={check} className='w-[16px] h-[16px]' />
                                <h3 className='text-[16px] font-normal Normal'>  Access To New Releases</h3>
                            </div>
                            <div className='flex gap-[10px] my-[15px] items-center'>
                                <img src={check} className='w-[16px] h-[16px]' />
                                <h3 className='text-[16px] font-normal Normal'> Use personal & commercial</h3>
                            </div>
                            <div className='flex gap-[10px] items-center'>
                                <img src={check} className='w-[16px] h-[16px]' />
                                <h3 className='text-[16px] font-normal Normal'> Priority support </h3>
                            </div>
                            <div className='flex gap-[10px] mt-[15px] items-center'>
                                <img src={check} className='w-[16px] h-[16px]' />
                                <h3 className='text-[16px] font-normal Normal'> 15% Renewal Discount</h3>
                            </div>






                        </div>
                        <div className='mx-4 sm:mx-0 flex justify-center mt-[50px] pb-[30px]'>
                            <button className='bg-[#60599E] hover:bg-[#3f3a68] rounded-[4px] mx-auto text-white w-[222px] h-[54px]  text-[16px] font-bold Bold'>FIGMA & HTML5</button>
                        </div>








                    </div>



                </div>

            </div>


            <div className='mt-[50px] sm:mt-[150px] '>

                <h1 className='text-center tracking-[3px] uppercase opacity-60 text-[14px]  font-bold Bold'>Xpeed Page Template</h1>

                <h1 className='text-center text-[25px] sm:text-[45px] leading-normal  font-bold Bold mt-5 sm:mt-[30px]'>Let’s Start Project Together</h1>

                <p className='lg:w-[776px] w-[280px] sm:w-[684px] text-center mx-auto mt-[15px] sm:mt-[20px] text-lg font-normal Normal'>Maybe there's an opportunity for your business to find value through a collaboration with Xpeed Page. Please share your thoughts in the form below, and we’ll respond within 48 hours of receiving the inquiry.</p>


                <div className='flex  justify-center mt-[30px] sm:mt-[50px] items-center'>

                    <Link onClick={() => {
                        window.scrollTo(0, 0);
                    }} to='/contact' className='text-[16px] font-bold Bold rounded-[4px]   py-[20px] px-[50px] bg-[#60599E] hover:bg-[#3f3a68] text-white'>Contact Us</Link>
                </div>

            </div>

        </>
    );
};

export default UltimateAccess;