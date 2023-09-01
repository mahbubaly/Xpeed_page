import React, { useEffect, useState } from 'react';
import '../Shared/Modal.css'
import { useCart } from 'react-use-cart';
import ModalCarts from './ModalCarts';
import empty from '../../assets/Images/Icon/emptyCart.png'


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

    const [Paypal, setPaypal] = useState(false);




    return (
        <>
            <div className='Modal-wrapper' onClick={closeModal}>

            </div>
            <div className='modal-container z-10   ' onClick={() => {
                window.scrollTo(0, 0);
            }}>

                {
                    isEmpty ? <>

                        <div >
                            <img src={empty} className=' mx-auto rounded-[4px] ' alt="" />

                            <h1 className=' flex items-center   justify-center mt-5  font-bold text-lg Bold'> Your cart is empty </h1>
                        </div>



                    </> : <>
                        <div className=' flex'>
                            <div className='flex pl-[20px] pt-[26px] '>
                                <div className=''>
                                    <p className='text-lg font-bold Bold'>Your Cart ({totalItems})</p>


                                    <div className='gap-[20px] flex flex-col overflow-y-scroll mt-5 ScrollBar h-[426px]  pr-[10px]'>

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

                            <hr className='w-[1px]  h-[590px]  ml-[13px] bg-[#EFEEF5]' />

                            {/* pay system */}

                            <div className='  pl-[30px] pt-5 pr-5'>
                                <div className='flex gap-[93px] items-center'>
                                    <p className='text-lg font-bold Bold '>Checkout</p>
                                    <div className='flex gap-[15px]'>
                                        <button  onClick={() => {
                                            setPaypal(false);
                                        }}  className={` ${Paypal === false ? "  w-[80px]    h-[35px] bg-primary text-white     text-[12px] font-bold Bold border-[1px] rounded-[4px] border-[#60599E]" : " w-[80px]   h-[35px]   text-[#60599E]   text-[12px] font-bold Bold border-[1px] rounded-[4px] border-[#60599E]"  }`}>
                                            Paddle
                                        </button>

                                        <button onClick={() => {
                                            setPaypal(true);
                                        }}  className={` ${Paypal === true ? "  w-[80px]   h-[35px] bg-primary text-white     text-[12px] font-bold Bold border-[1px] rounded-[4px] border-[#60599E]" : 
                                        " w-[80px]  h-[35px]   text-[#60599E]   text-[12px] font-bold Bold border-[1px] rounded-[4px] border-[#60599E]"  }`}>Paypal</button>
                                    </div>
                                </div>



                                {
                                    Paypal ? <>

                                    {/* Paypal is true then  */}

                                        <div className='mt-[30px] '>
                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Email*</p>
                                            <input type="email" className='    sm:w-[280px] h-[45px] xl:w-[357px]  py-5 px-[15px] ' placeholder='Enter Your Email' />
                                        </div>

                                        <div className='mt-[13px] '>
                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Full Name *</p>
                                            <input type="email" className='    sm:w-[280px] h-[45px] xl:w-[357px]  py-5 px-[15px] ' placeholder='Enter full Name' />
                                        </div>

                                        <div className='mt-[13px] '>
                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Set Account Password *</p>
                                            <input type="email" className='    sm:w-[280px] h-[45px] xl:w-[357px]  py-5 px-[15px] ' placeholder='Password' />
                                        </div>


                                        <p className='text-[14px] mt-[117px] text-[#C6C1C0] text-center w-[324px] mx-auto font-normal Normal'>Paying a total of ${cartTotal} for {totalUniqueItems} products. Download with All-Access instead?</p>

                                        <div className=' mt-[30px] mb-2'>
                                            <button type='submit' className='  text-center font-bold Bold rounded-[4px] w-[280px] h-[48px] sm:w-[356px] sm:h-[48px]  bg-[#60599E] text-white hover:bg-[#3f3a68]'>Pay ${cartTotal}
                                            </button>

                                        </div>








                                    </> : <>

                                        <div className='mt-[30px] '>
                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Email*</p>
                                            <input type="email" className='    sm:w-[280px] h-[45px] xl:w-[357px]  py-5 px-[15px] ' placeholder='Enter Your Email' />
                                        </div>

                                        <div className='mt-[13px]'>
                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Card Information*</p>

                                            <input id='borderBottom' type="text" className='rounded-t-[4px]  sm:w-[280px] h-[45px] xl:w-[357px] py-5 px-[15px] ' placeholder='Name On Card' />

                                            <input type="text" id='borderBottom' className=' sm:w-[280px] h-[45px] xl:w-[357px] rounded-[4px] py-5 px-[15px] ' placeholder='1234 1234 1234 1234' data-mask="000 000 000 0000" />

                                            <div >
                                                <input type="text" className='rounded-s-[4px] w-[280px] h-[48px] sm:w-[178.5px] sm:h-[44px] py-5 px-[15px] ' placeholder='MM / YY' />
                                                <input type="text" className=' rounded-e-[4px] w-[280px] h-[48px] sm:w-[178.5px] sm:h-[44px] py-5 px-[15px] ' placeholder='CVC' />
                                            </div>
                                        </div>

                                        <div className='mt-[13px]'>
                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Set Account Password*</p>
                                            <input type="password" className='    sm:w-[280px] h-[45px] xl:w-[357px] py-5 px-[15px] rounded-[4px]' placeholder='Password' />
                                        </div>


                                        <p className='text-[14px] mt-[28px] text-center w-[324px] mx-auto font-normal Normal'>Paying a total of ${cartTotal} for {totalUniqueItems} products. Download with All-Access instead?</p>

                                        <div className=' mt-[30px] mb-2'>
                                            <button type='submit' className='  text-center font-bold Bold rounded-[4px] w-[280px] h-[48px] sm:w-[356px] sm:h-[48px]  bg-[#60599E] text-white hover:bg-[#3f3a68]'>Pay ${cartTotal}
                                            </button>

                                        </div>

                                    </>
                                }




                            </div>



                        </div>



                    </>
                }


            </div>

        </>
    );
};

export default Modal;