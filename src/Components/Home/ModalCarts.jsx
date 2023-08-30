import React from 'react';
import close from '../../assets/Images/Icon/close.png'
import '../Shared/Modal.css'



const ModalCarts = ({ cartItem, removeItem }) => {
    const { img, title, id } = cartItem;
    return (
        <>



            <div className=''>

                <div className='mt-5 h-[259px] w-[270px] px-[4px]  pt-[3.5px]  rounded-[4px] bg-white PopShadow  ' >

                    <img src={img} className=' rounded-[4px] flex-shrink-0 ' alt="" />







                    <div className='bg-[#fcf7f4] pb-[15px]    mt-5 sm:mt-10  lg:mt-[3px]'>
                        <div className='flex items-center pt-[15px] px-[15px] justify-between'>
                            <h1 className='text-[14px]  font-semibold SemiBold'>Gravity - Multi-Purpose...</h1>

                            <img onClick={() => removeItem(id)} src={close} className='w-[18px] h-[18px]' alt="" />
                        </div>



                    </div>



                </div>



            </div>

        </>
    );
};

export default ModalCarts;