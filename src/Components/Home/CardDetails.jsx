import React, { useEffect, useState } from 'react';
import '../Shared/Style.css';
import { Link, useParams } from 'react-router-dom';
import eye from '../../assets/Images/Icon/eye 2.png'
import download from '../../assets/Images/Icon/download.png'
import fileName from '../../assets/Images/Icon/file-copies 1.png'
import calender from '../../assets/Images/Icon/calendar-date 1.png'
import { AiFillCheckCircle } from 'react-icons/ai';
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

    useEffect(() => {
        window.scrollTo(0, 0);
    })












    return (
        <>

            <div id='details' className='mt-[18.5px] container mx-auto '>
                {
                    selectedData ? <>

                        <h1 className='font-bold text-[30px] Bold'>{selectedData.title}</h1>

                        <div className='mt-[30px] flex gap-5 items-center opacity-50'>
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
                            <div className='overflow-scroll Scroll_content scroll-smooth rounded-[4px]  w-[762px] h-[762px]'>
                                <img src={selectedData.long_img} className='object-contain bg-white p-[4px]' alt="" />
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

            {
                <Pricing /> ? <Pricing /> : <>


                    <h1 className='text-center mt-[10%]'>Loading..........</h1>


                </>
            }




        </>
    );
};

export default CardDetails;