import React from 'react';

import '../Shared/Style.css';

const SingleCards = ({ CardsData }) => {

    const { img, title } = CardsData;
    return (
        <div>
            <div className=' px-[4px] pb-[4px] pt-[3px]   bg-white ' >
                <div className=''>
                    {/* <img src={img} className='' alt="" /> */}


                    <div className="group relative block rounded-[8px] h-[196px] 2xl:h-[300px]  hover:bg-[#60599E] ">
                        <img
                            alt="Developer"
                            src={img}
                            className="absolute 2xl:h-[300px]  lg:h-[196px] w-full   group-hover:opacity-50"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">


                            <div className="">
                                <div
                                    className=" transform opacity-0 duration-500 transition-all lg:group-hover:translate-y-[20px] lg:group-hover:translate-x-[10px] 

                                    xl:group-hover:translate-y-[80px] xl:group-hover:translate-x-[40px] group-hover:opacity-100    2xl:group-hover:translate-y-[100px] 2xl:group-hover:translate-x-[60px] "
                                >
                                    <a href='' className="text-sm text-center px-[15px]   text-[#60599E] text-[12px] font-bold Bold -mt-24 py-[8px] bg-white">
                                        Live Preview

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>








                </div>



                <div className='bg-[#fcf7f4] px-[15px] py-[15px]  mt-[3px]'>
                    <h1 className='text-[14px] font-semibold SemiBold'>{title}</h1>

                    <div className='pt-5 flex justify-between  2xl:px-[15px]'>
                        <button className='text-[12px] font-bold Bold rounded-[4px] border-[1px] border-[#60599E] py-[8px] px-[15px] hover:bg-[#60599E] hover:text-white'>Details</button>

                        <button className='text-[12px] font-bold Bold rounded-[4px] border-[1px] border-[#60599E] py-[8px] px-[15px] bg-[#60599E] hover:bg-[#3f3a68] text-white'>Add To Cart</button>

                    </div>

                </div>

            </div>



        </div>
    );
};

export default SingleCards;