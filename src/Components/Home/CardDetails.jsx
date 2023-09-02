import React, { useEffect, useState } from 'react';
import '../Shared/Style.css';
import { Link, useParams } from 'react-router-dom';
import eye from '../../assets/Images/Icon/eye 2.png'
import download from '../../assets/Images/Icon/download.png'
import fileName from '../../assets/Images/Icon/file-copies 1.png'
import calender from '../../assets/Images/Icon/calendar-date 1.png'
import img1 from '../../assets/Images/5.png'
import img2 from '../../assets/Images/6.png'
import img3 from '../../assets/Images/7.png'
import img4 from '../../assets/Images/8.png'
import download2 from '../../assets/Images/Icon/download.png'
import Pricing from './Pricing';

const CardDetails = () => {

    const cardDetails = useParams();


    const [allData, setAllData] = useState([]);




    const { id } = cardDetails;






    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => setAllData(data));


    }, [])

    const selectedData = allData.find((data) => data.id == id);














    return (
        <>

            <div className='flex justify-center'>
                <div id='details' className='mt-[80px]  '>
                    {
                        selectedData ? <>

                            <h1 className='font-bold text-[30px] Bold'>{selectedData.title}</h1>

                            <div className='mt-[30px] flex gap-5 items-center opacity-50'>
                                <div className='flex gap-[10px] items-center'>
                                    <img src={eye} className='w-[16.389px] h-[16px]' alt="" />
                                    <p className='text-[16px] font-semibold SemiBold'>{selectedData.view} views</p>
                                </div>
                                <div className='flex gap-[10px] items-center'>
                                    <img src={download} className='w-[20px] h-[20px]' alt="" />
                                    <p className='text-[16px] font-semibold SemiBold'>{selectedData.download} download</p>
                                </div>
                            </div>
                            <div className='flex  mt-[50px] gap-[34px]'>
                                <div className='overflow-scroll Scroll_content scroll-smooth bg-white p-[4px] rounded-[4px]  w-[762px] h-[762px]'>
                                    <img src={selectedData.long_img} className='rounded-[4px] ' alt="" />
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


                        </> : <>

                            <div className='flex justify-center items-center mt-[10%]'>

                                <span className="loading loading-spinner loading-md"></span>
                                <h1 className='text-center '>Loading..........</h1>
                            </div>

                        </>
                    }




                </div>

            </div>




            <div className='flex justify-center px-[30px] sm:px-[50px] 2xl:px-[135px]'>
                <div className=' mt-5'>
                    <div className='mt-[100px]'>
                        <h1 className='text-[25px] sm:text-[45px] text-center font-semibold SemiBold'>You May Also Like</h1>
                        <p className='text-center w-[576px] mx-auto text-lg mt-[20px] font-normal Normal'>
                            Check the latest products added to the marketplace. Fresh designs with the finest HTML5 CSS3 coding.
                        </p>
                    </div>



                    {/* Related products list */}


                    <div className='grid lg:grid-cols-4 gap-[30px] mt-[50px] '>

                        {/* 1 */}
                        <div className=' px-[4px] pb-[4px] pt-[3px]  bg-white rounded-[4px]' >

                            <img src={img1} className=' h-[262px] flex-shrink-0 ' alt="" />

                            <div className='bg-[#fcf7f4]  px-[15px]   mt-[3px]'>

                                <div className='flex justify-between  items-center pt-[15px]'>
                                    <div className='flex gap-[10px] items-center opacity-50'>
                                        <img src={download2} className='w-[14px] h-[14px]' alt="" />
                                        <p className='text-[12px] font-semibold SemiBold'>202 Downloads</p>
                                    </div>

                                    <button className='text-[12px] font-bold Bold h-[27px] w-[50px] rounded-[4px] bg-[#60599E]  text-white'>$9.99</button>
                                </div>

                                <div className='mt-[15px]'>
                                    <hr className='hrWid h-[1px]' />

                                </div>

                                <h1 className='text-[14px] w-[232px] mt-[14px] leading-[22px] font-semibold SemiBold'>Gravity - Multi-Purpose HTML Template</h1>

                                <div className=' flex justify-between  py-[20px] '>
                                    <Link onClick={() => {
                                        window.scrollTo(0, 0);
                                    }} to={`details/${id}`}    >   <button className='text-[12px] h-[38px] w-[71px] font-bold Bold rounded-[4px] border-[1px] border-[#60599E] text-primary py-[8px]  hover:bg-[#60599E] hover:text-white'>Details</button>


                                    </Link>

                                    <button className='text-[12px] font-bold Bold h-[38px] w-[98px] rounded-[4px] border-[1px] border-[#60599E] py-[8px] leading-[22px]   hover:bg-[#60599E] text-primary hover:text-white'>Live Preview</button>

                                </div>

                            </div>

                        </div>

                        {/* 2 */}
                        <div className=' px-[4px] pb-[4px] pt-[3px]  bg-white rounded-[4px]' >

                            <img src={img2} className=' h-[262px] flex-shrink-0 ' alt="" />

                            <div className='bg-[#fcf7f4]  px-[15px]   mt-[3px]'>

                                <div className='flex justify-between  items-center pt-[15px]'>
                                    <div className='flex gap-[10px] items-center opacity-50'>
                                        <img src={download2} className='w-[14px] h-[14px]' alt="" />
                                        <p className='text-[12px] font-semibold SemiBold'>202 Downloads</p>
                                    </div>

                                    <button className='text-[12px] font-bold Bold h-[27px] w-[50px] rounded-[4px] bg-[#60599E]  text-white'>$9.99</button>
                                </div>

                                <div className='mt-[15px]'>
                                    <hr className='hrWid h-[1px]' />

                                </div>

                                <h1 className='text-[14px] w-[232px] mt-[14px] leading-[22px] font-semibold SemiBold'>Gravity - Multi-Purpose HTML Template</h1>

                                <div className=' flex justify-between  py-[20px] '>
                                    <Link onClick={() => {
                                        window.scrollTo(0, 0);
                                    }} to={`details/${id}`}    >   <button className='text-[12px] h-[38px] w-[71px] font-bold Bold rounded-[4px] border-[1px] border-[#60599E] text-primary py-[8px]  hover:bg-[#60599E] hover:text-white'>Details</button>


                                    </Link>

                                    <button className='text-[12px] font-bold Bold h-[38px] w-[98px] rounded-[4px] border-[1px] border-[#60599E] py-[8px] leading-[22px]   hover:bg-[#60599E] text-primary hover:text-white'>Live Preview</button>

                                </div>

                            </div>

                        </div>

                        {/* 3 */}

                        <div className=' px-[4px] pb-[4px] pt-[3px]  bg-white rounded-[4px]' >

                            <img src={img3} className=' h-[262px] flex-shrink-0 ' alt="" />

                            <div className='bg-[#fcf7f4]  px-[15px]   mt-[3px]'>

                                <div className='flex justify-between  items-center pt-[15px]'>
                                    <div className='flex gap-[10px] items-center opacity-50'>
                                        <img src={download2} className='w-[14px] h-[14px]' alt="" />
                                        <p className='text-[12px] font-semibold SemiBold'>202 Downloads</p>
                                    </div>

                                    <button className='text-[12px] font-bold Bold h-[27px] w-[50px] rounded-[4px] bg-[#60599E]  text-white'>$9.99</button>
                                </div>

                                <div className='mt-[15px]'>
                                    <hr className='hrWid h-[1px]' />

                                </div>

                                <h1 className='text-[14px] w-[232px] mt-[14px] leading-[22px] font-semibold SemiBold'>Gravity - Multi-Purpose HTML Template</h1>

                                <div className=' flex justify-between  py-[20px] '>
                                    <Link onClick={() => {
                                        window.scrollTo(0, 0);
                                    }} to={`details/${id}`}    >   <button className='text-[12px] h-[38px] w-[71px] font-bold Bold rounded-[4px] border-[1px] border-[#60599E] text-primary py-[8px]  hover:bg-[#60599E] hover:text-white'>Details</button>


                                    </Link>

                                    <button className='text-[12px] font-bold Bold h-[38px] w-[98px] rounded-[4px] border-[1px] border-[#60599E] py-[8px] leading-[22px]   hover:bg-[#60599E] text-primary hover:text-white'>Live Preview</button>

                                </div>

                            </div>

                        </div>

                        {/* 4 */}
                        <div className=' px-[4px] pb-[4px] pt-[3px]  bg-white rounded-[4px]' >

                            <img src={img4} className=' h-[262px] flex-shrink-0 ' alt="" />

                            <div className='bg-[#fcf7f4]  px-[15px]   mt-[3px]'>

                                <div className='flex justify-between  items-center pt-[15px]'>
                                    <div className='flex gap-[10px] items-center opacity-50'>
                                        <img src={download2} className='w-[14px] h-[14px]' alt="" />
                                        <p className='text-[12px] font-semibold SemiBold'>202 Downloads</p>
                                    </div>

                                    <button className='text-[12px] font-bold Bold h-[27px] w-[50px] rounded-[4px] bg-[#60599E]  text-white'>$9.99</button>
                                </div>

                                <div className='mt-[15px]'>
                                    <hr className='hrWid h-[1px]' />

                                </div>

                                <h1 className='text-[14px] w-[232px] mt-[14px] leading-[22px] font-semibold SemiBold'>Gravity - Multi-Purpose HTML Template</h1>

                                <div className=' flex justify-between  py-[20px] '>
                                    <Link onClick={() => {
                                        window.scrollTo(0, 0);
                                    }} to={`details/${id}`}    >   <button className='text-[12px] h-[38px] w-[71px] font-bold Bold rounded-[4px] border-[1px] border-[#60599E] text-primary py-[8px]  hover:bg-[#60599E] hover:text-white'>Details</button>


                                    </Link>

                                    <button className='text-[12px] font-bold Bold h-[38px] w-[98px] rounded-[4px] border-[1px] border-[#60599E] py-[8px] leading-[22px]   hover:bg-[#60599E] text-primary hover:text-white'>Live Preview</button>

                                </div>

                            </div>

                        </div>
                    </div>


                </div>
            </div>






            {
                <Pricing /> ? <Pricing /> : <>


                    <h1 className='text-center mt-[10%]'>Loading..........</h1>


                </>
            }




        </>
    );
};

export default CardDetails;