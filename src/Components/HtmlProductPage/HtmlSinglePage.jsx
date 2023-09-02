import React from 'react';
import { Link } from 'react-router-dom';
import download2 from '../../assets/Images/Icon/download.png'

const HtmlSinglePage = ({ CardsData }) => {
    const {  img, title, id, download, price } = CardsData;
    return (
        <>



            {
                CardsData ? <> <div className=' px-[4px] pb-[4px] pt-[3px] rounded-[4px]  bg-white ' >

                    <img src={img} className='h-[262px] flex-shrink-0' alt="" />





                    <div className='bg-[#fcf7f4]  px-[15px]   mt-[3px]'>



                        <div className='flex justify-between  items-center pt-[15px]'>
                            <div className='flex gap-[10px] items-center opacity-50'>
                                <img src={download2} className='w-[20px] h-[20px]' alt="" />
                                <p className='text-[12px] font-semibold SemiBold'>{download} download</p>
                            </div>

                            <button className='text-[12px] font-bold Bold h-[27px] w-[50px] rounded-[4px]     bg-[#60599E]  text-white'>${price}</button>
                        </div>

                        <div className='mt-[15px]'>
                            <hr className='hrWid h-[1px]' />

                        </div>

                        <h1 className='text-[14px] w-[232px]  pt-[15px] font-semibold SemiBold'>{title}</h1>

                        <div className=' flex justify-between  py-[20px] '>
                            <Link onClick={() => {
                                window.scrollTo(0, 0);
                            }} to={`/viewAllHtmlTemplate/details/${id}`}    >   <button className='text-[12px] h-[39px] w-[71px] font-bold Bold rounded-[4px] border-[1px] border-[#60599E] py-[8px] leading-[22px]	text-primary hover:bg-[#60599E] hover:text-white'>Details</button>


                            </Link>

                            <button className='text-[12px] font-bold Bold h-[39px] w-[99px] rounded-[4px] border-[1px] border-[#60599E] py-[8px] leading-[22px]   text-primary hover:bg-[#60599E]  hover:text-white'>Live Preview</button>

                        </div>

                    </div>

                </div>



                </> : <>
                    <p>Loading..........</p>


                </>
            }

        </>
    );
};

export default HtmlSinglePage;