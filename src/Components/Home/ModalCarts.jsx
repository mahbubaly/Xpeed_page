import React, { useState } from 'react';
import close from '../../assets/Images/Icon/close.png'
import '../Shared/Modal.css'
import Delete from '../../assets/Images/Icon/delete.png'






const ModalCarts = ({ cartItem, removeItem }) => {
    const { img, title, id } = cartItem;







    return (
        <>



            <div className=''>

                <div className=' h-[259px]  w-[270px] px-[4px]  pt-[3.5px]  rounded-[4px] bg-white PopShadow  ' >

                    <img src={img} className=' rounded-[4px] flex-shrink-0 ' alt="" />







                    <div className='bg-[#fcf7f4] pb-[15px]    mt-5 sm:mt-10  lg:mt-[3px]'>
                        <div className='flex items-center pt-[15px] px-[15px] justify-between'>
                            <h1 className='text-[14px]  font-semibold SemiBold'>Gravity - Multi-Purpose...</h1>

                            

                            <button onClick={() => removeItem(id)} className='border-[2px] rounded-[50%] hover:border-[#2e2c3d]   border-primary w-[24px] h-[24px]'> <img src={Delete} alt="" className='w-[13.44px] h-[13.44px] mx-auto ' /> </button>
                        </div>



                    </div>



                </div>



            </div>

        </>
    );
};

export default ModalCarts;