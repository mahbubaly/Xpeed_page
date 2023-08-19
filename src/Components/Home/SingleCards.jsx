import React from 'react';

const SingleCards = ({ CardsData }) => {
    console.log(CardsData);
    const { img, title } = CardsData;
    return (
        <div>
            <div className=' px-[4px] pb-[4px] pt-[3px]   bg-white ' >
                <img src={img} className='' alt="" />

                <div className='bg-[#fcf7f4] px-[15px] py-[15px] mt-[3px]'>
                    <h1 className='text-[14px] font-semibold SemiBold'>{title}</h1>

                    <div className='pt-5 flex justify-between'>
                        <button className='text-[12px] font-bold Bold rounded-[4px] border-[1px] border-[#60599E] py-[8px] px-[15px] hover:bg-[#60599E] hover:text-white'>Details</button>

                        <button className='text-[12px] font-bold Bold rounded-[4px] border-[1px] border-[#60599E] py-[8px] px-[15px] bg-[#60599E] hover:bg-[#3f3a68] text-white'>Live Preview</button>

                    </div>

                </div>

            </div>



        </div>
    );
};

export default SingleCards;