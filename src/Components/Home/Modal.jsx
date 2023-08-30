import React, { useEffect } from 'react';
import '../Shared/Modal.css'
import popUpCart from '../../assets/Images/popCart.png'
import { useCart } from 'react-use-cart';
import ModalCarts from './ModalCarts';
import { toast } from 'react-toastify';

const Modal = ({ closeModal }) => {

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'scroll';


        }


    }, [])


    const {
        cartTotal,
        id,
        isEmpty,
        items,
        totalItems,
        totalUniqueItems,
        removeItem,
        emptyCart,
        updateCartMetadata,








    } = useCart();

    


    return (
        <>
            <div className='Modal-wrapper' onClick={closeModal}>

            </div>
            <div className='modal-container  '>

                {
                    isEmpty ? <h1 className=' flex items-center justify-center mt-[20%] font-bold text-lg Bold'>There is no Cart</h1> : <>
                        <div className=' flex'>
                            <div className='flex pl-[29px] pt-[30px] '>
                                <div className=''>
                                    <p className='text-lg font-bold Bold'>Your Cart ({totalItems})</p>


                                    <div className='gap-[10xp] overflow-y-scroll ScrollBar h-[450px]  pr-[10px]'>

                                        {
                                            items.map(cartItem => <ModalCarts
                                                key={cartItem.id}
                                                cartItem={cartItem}
                                                removeItem={removeItem}




                                            />)
                                        }

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

                                    <input type="text" className='rounded-t-[4px] w-[280px] h-[48px] sm:w-[356px] sm:h-[44px] py-5 px-[15px] ' placeholder='Name On Card' />

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
                                    Pay ${cartTotal}

                                </button>
                            </div>



                        </div>



                    </>
                }


            </div>

        </>
    );
};

export default Modal;