import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import eye from '../../../assets/Images/Icon/eye 2.png'
import download from '../../../assets/Images/Icon/download.png'
import fileName from '../../../assets/Images/Icon/file-copies 1.png'
import calender from '../../../assets/Images/Icon/calendar-date 1.png'
import { AiFillCheckCircle } from 'react-icons/ai';

const ResourceCardDetails = () => {

    const ResourceCardDetails = useParams();


    const [allData, setAllData] = useState([]);




    const { id } = ResourceCardDetails;
    console.log(id);





    useEffect(() => {
        fetch('/Resources.json')
            .then(res => res.json())
            .then(data => setAllData(data));


    }, [])

    const selectedData = allData.find((data) => data.id == id);
    console.log(selectedData);

    return (
        <>
            <div className='mt-[18.5px] container mx-auto'>
                {
                    selectedData && <>

                        <h1 className='font-bold text-[30px] Bold'>{selectedData.title}</h1>

                        <div className='mt-[30px] flex gap-5 items-center'>
                            <div className='flex gap-[10px] items-center'>
                                <img src={eye} className='w-[16.389px] h-[16px]' alt="" />
                                <p className='text-[16px] font-semibold SemiBold'>{selectedData.view} views</p>
                            </div>
                            <div className='flex gap-[10px] items-center'>
                                <img src={download} className='w-[16.389px] h-[16px]' alt="" />
                                <p className='text-[16px] font-semibold SemiBold'>{selectedData.download} views</p>
                            </div>
                        </div>
                        <div className='flex  mt-[50px] gap-[34px]'>
                            <div className='overflow-scroll Scroll_content  rounded-[4px]  w-[762px] h-[762px]'>
                                <img src={selectedData.long_img} className='object-contain' alt="" />
                            </div>

                            <div className='w-[370px] bg-[#60599E] p-[30px] rounded-[4px]'>
                                <h1 className='font-bold text-white text-[20px] Bold'>{selectedData.title}</h1>
                                <p className='mt-5 text-[16px] font-normal Normal opacity-75 text-white'>{selectedData.description}</p>
                                <hr className='mt-[30px] opacity-25 ' />

                                <p className='mt-[30px] text-[40px] font-bold Bold  text-center text-white  '>${selectedData.price}</p>
                                <hr className='w-[112px] mx-auto border-[1px] -mt-[5px]' />


                                <div className='flex gap-[15px] mt-[56px] items-center'>
                                    <img src={fileName} className='w-[16.389px] h-[16px]' alt="" />
                                    <p className='text-[16px] font-semibold SemiBold text-white'>HTML5, Figma</p>
                                </div>
                                <div className='flex gap-[15px] mt-[30px] items-center'>
                                    <img src={calender} className='w-[16.389px] h-[16px]' alt="" />
                                    <p className='text-[16px] font-semibold SemiBold text-white'>April 18th 2023</p>
                                </div>

                                <div className='mt-[57px] '>
                                    <Link><button className='text-center text-[18px] text-white hover:text-slate-200 OpenSans font-bold w-[310px] h-[65px] border-[1px] rounded-[4px]'>Live View</button></Link>

                                    <Link><button className='bg-white mt-[30px] text-center text-[18px] text-[#60599E] hover:text-[#3f3a68] OpenSans font-bold w-[310px] h-[65px] border-[1px] rounded-[4px]'>Add To Cart</button></Link>
                                </div>
                            </div>
                        </div>


                    </>
                }

                <div className='mt-[100px]'>
                    <h1 className='text-[25px] sm:text-[45px] text-center font-semibold SemiBold'>Affordable Pricing</h1>
                    <p className='text-center mt-[20px] font-normal Normal'>
                        Unlimited HTML5 Template For Your Creative Projects
                    </p>
                </div>

                {/* Pricing cards */}

                <div className='  mt-[80px]'>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-[50px]'>

                        {/* 1 */}
                        <div className='bg-[#F8EAE6] rounded-[10px] ' >
                            <h1 className=' font-normal Normal pt-[30px] text-center'><span className='text-[48px] font-semibold SemiBold'>$66</span></h1>

                            <h2 className='font-semibold SemiBold text-[22px] text-center mt-[14px]'>Paid Every 6 Months</h2>

                            <div className='pl-[30px] '>
                                <div className='flex gap-[10px] mt-[30px] items-center'>
                                    <AiFillCheckCircle className='w-[16px] h-[16px]' />
                                    <h3 className='text-[16px] font-normal Normal'> 10 Download Per Day</h3>
                                </div>
                                <div className='flex gap-[10px] my-[15px] items-center'>
                                    <AiFillCheckCircle className='w-[16px] h-[16px]' />
                                    <h3 className='text-[16px]  font-normal Normal'> Access To All Design Resources</h3>
                                </div>
                                <div className='flex gap-[10px] items-center'>
                                    <AiFillCheckCircle className='w-[16px] h-[16px]' />
                                    <h3 className='text-[16px] font-normal Normal'>  Access To New Releases</h3>
                                </div>
                                <div className='flex gap-[10px] my-[15px] items-center'>
                                    <AiFillCheckCircle className='w-[16px] h-[16px]' />
                                    <h3 className='text-[16px] font-normal Normal'> Use personal & commercial</h3>
                                </div>
                                <div className='flex gap-[10px] items-center'>
                                    <AiFillCheckCircle className='w-[16px] h-[16px]' />
                                    <h3 className='text-[16px] font-normal Normal'> Priority support </h3>
                                </div>
                                <div className='flex gap-[10px] mt-[15px] items-center'>
                                    <AiFillCheckCircle className='w-[16px] h-[16px]' />
                                    <h3 className='text-[16px] font-normal Normal'> 15% Renewal Discount</h3>
                                </div>






                            </div>

                            <div className=' flex justify-center mt-[50px] pb-[30px]'>
                                <button className='bg-[#60599E] hover:bg-[#3f3a68] rounded-[4px] mx-auto text-white px-[65px] py-[15px] text-[16px] font-bold Bold'>Get started</button>
                            </div>





                        </div>
                        {/* 2 */}
                        <div className='bg-[#FFDFA4] rounded-[10px] '>
                            <h1 className=' font-normal Normal pt-[30px] text-center'><span className='text-[48px] font-semibold SemiBold'>$119</span></h1>

                            <h2 className='font-semibold SemiBold text-[22px] text-center mt-[14px]'>Paid Every 6 Months</h2>

                            <div className='pl-[30px] '>
                                <div className='flex gap-[10px] mt-[30px] items-center'>
                                    <AiFillCheckCircle className='w-[16px] h-[16px]' />
                                    <h3 className='text-[16px] font-normal Normal'> 10 Download Per Day</h3>
                                </div>
                                <div className='flex gap-[10px] my-[15px] items-center'>
                                    <AiFillCheckCircle className='w-[16px] h-[16px]' />
                                    <h3 className='text-[16px]  font-normal Normal'> Access To All Design Resources</h3>
                                </div>
                                <div className='flex gap-[10px] items-center'>
                                    <AiFillCheckCircle className='w-[16px] h-[16px]' />
                                    <h3 className='text-[16px] font-normal Normal'>  Access To New Releases</h3>
                                </div>
                                <div className='flex gap-[10px] my-[15px] items-center'>
                                    <AiFillCheckCircle className='w-[16px] h-[16px]' />
                                    <h3 className='text-[16px] font-normal Normal'> Use personal & commercial</h3>
                                </div>
                                <div className='flex gap-[10px] items-center'>
                                    <AiFillCheckCircle className='w-[16px] h-[16px]' />
                                    <h3 className='text-[16px] font-normal Normal'> Priority support </h3>
                                </div>
                                <div className='flex gap-[10px] mt-[15px] items-center'>
                                    <AiFillCheckCircle className='w-[16px] h-[16px]' />
                                    <h3 className='text-[16px] font-normal Normal'> 15% Renewal Discount</h3>
                                </div>






                            </div>

                            <div className=' flex justify-center mt-[50px] pb-[30px]'>
                                <button className='bg-[#60599E] hover:bg-[#3f3a68] rounded-[4px] mx-auto text-white px-[65px] py-[15px]  text-[16px] font-bold Bold'>Get started</button>
                            </div>





                        </div>
                        {/* 3 */}
                        <div className='bg-[#B2CEC9] sm:ml-[60%] lg:ml-0 sm:w-[302px] lg:w-auto rounded-[10px] '>
                            <h1 className=' font-normal Normal pt-[30px] text-center'><span className='text-[48px] font-semibold SemiBold'>$199</span></h1>

                            <h2 className='font-semibold SemiBold text-[22px] text-center mt-[14px]'>Paid Every 12 Months</h2>

                            <div className='pl-[30px] '>
                                <div className='flex gap-[10px] mt-[30px] items-center'>
                                    <AiFillCheckCircle className='w-[16px] h-[16px]' />
                                    <h3 className='text-[16px] font-normal Normal'> 10 Download Per Day</h3>
                                </div>
                                <div className='flex gap-[10px] my-[15px] items-center'>
                                    <AiFillCheckCircle className='w-[16px] h-[16px]' />
                                    <h3 className='text-[16px]  font-normal Normal'> Access To All Design Resources</h3>
                                </div>
                                <div className='flex gap-[10px] items-center'>
                                    <AiFillCheckCircle className='w-[16px] h-[16px]' />
                                    <h3 className='text-[16px] font-normal Normal'>  Access To New Releases</h3>
                                </div>
                                <div className='flex gap-[10px] my-[15px] items-center'>
                                    <AiFillCheckCircle className='w-[16px] h-[16px]' />
                                    <h3 className='text-[16px] font-normal Normal'> Use personal & commercial</h3>
                                </div>
                                <div className='flex gap-[10px] items-center'>
                                    <AiFillCheckCircle className='w-[16px] h-[16px]' />
                                    <h3 className='text-[16px] font-normal Normal'> Priority support </h3>
                                </div>
                                <div className='flex gap-[10px] mt-[15px] items-center'>
                                    <AiFillCheckCircle className='w-[16px] h-[16px]' />
                                    <h3 className='text-[16px] font-normal Normal'> 15% Renewal Discount</h3>
                                </div>






                            </div>
                            <div className='mx-4 sm:mx-0 flex justify-center mt-[50px] pb-[30px]'>
                                <button className='bg-[#60599E] hover:bg-[#3f3a68] rounded-[4px] mx-auto text-white px-[65px] py-[15px]  text-[16px] font-bold Bold'>Get started</button>
                            </div>





                        </div>



                    </div>

                </div>


                <div className='mt-[150px] '>

                    <h1 className='text-center tracking-[3px] uppercase opacity-60 text-[14px] XpeedText font-bold Bold'>Xpeed Page Template</h1>

                    <h1 className='text-center text-[25px] sm:text-[45px] leading-normal  font-bold Bold mt-[30px]'>Let’s Start Project Together</h1>

                    <p className='lg:w-[776px] w-[280px] sm:w-[684px] text-center mx-auto mt-[14px] text-lg font-normal Normal'>Maybe there's an opportunity for your business to find value through a collaboration with Xpeed Page. Please share your thoughts in the form below, and we’ll respond within 48 hours of receiving the inquiry.</p>


                    <div className='flex  justify-center mt-[50px] items-center'>

                        <button className='text-[16px] font-bold Bold rounded-[4px]   py-[20px] px-[50px] bg-[#60599E] hover:bg-[#3f3a68] text-white'>Contact Us</button>
                    </div>

                </div>

            </div>





        </>
    );
};

export default ResourceCardDetails;