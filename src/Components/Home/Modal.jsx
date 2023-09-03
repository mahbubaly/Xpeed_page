import React, { useEffect, useState } from 'react';
import '../Shared/Modal.css'
import '../Shared/Style.css'
import { useCart } from 'react-use-cart';
import ModalCarts from './ModalCarts';
import empty from '../../assets/Images/Icon/emptyCart.png'
import MobileCancel from '../../assets/Images/Icon/MobileRemove.png'
import logo from '../../assets/Images/logo.png'


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
    const [mobileCart, setMobileCart] = useState(false);




    return (
        <>
            <div className='Modal-wrapper' onClick={closeModal}>

            </div>

            {/* desktop */}

            <div className='modal-container z-10 sm:block hidden  ' onClick={() => {
                window.scrollTo(0, 0);
            }}>

                {
                    isEmpty ? <>

                        <div >
                            <img src={empty} className=' mx-auto rounded-[4px] ' alt="" />

                            <h1 className=' flex items-center   justify-center mt-5  font-bold text-lg Bold'> Your cart is empty </h1>
                        </div>



                    </> : <>
                        <div className=' sm:flex'>
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
                                        <button onClick={() => {
                                            setPaypal(false);
                                        }} className={` ${Paypal === false ? "  w-[80px]    h-[35px] bg-primary text-white     text-[12px] font-bold Bold border-[1px] rounded-[4px] border-[#60599E]" : " w-[80px]   h-[35px]   text-[#60599E]   text-[12px] font-bold Bold border-[1px] rounded-[4px] border-[#60599E]"}`}>
                                            Paddle
                                        </button>

                                        <button onClick={() => {
                                            setPaypal(true);
                                        }} className={` ${Paypal === true ? "  w-[80px]   h-[35px] bg-primary text-white     text-[12px] font-bold Bold border-[1px] rounded-[4px] border-[#60599E]" :
                                            " w-[80px]  h-[35px]   text-[#60599E]   text-[12px] font-bold Bold border-[1px] rounded-[4px] border-[#60599E]"}`}>Paypal</button>
                                    </div>
                                </div>



                                {
                                    Paypal ? <>

                                        {/* Paypal is true then  */}

                                        <div className='mt-[30px] '>
                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Email*</p>
                                            <input type="email" className='   w-[200px] h-[38px] sm:h-[45px] xl:w-[357px]  py-5 px-[15px] ' placeholder='Enter Your Email' />
                                        </div>

                                        <div className='mt-[13px] '>
                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Full Name *</p>
                                            <input type="email" className='    w-[200px] h-[38px] xl:w-[357px]  py-5 px-[15px] ' placeholder='Enter full Name' />
                                        </div>

                                        <div className='mt-[13px] '>
                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Set Account Password *</p>
                                            <input type="email" className='    w-[200px] h-[38px] xl:w-[357px]  py-5 px-[15px] ' placeholder='Password' />
                                        </div>


                                        <p className='text-[14px] mt-[117px] text-[#C6C1C0] text-center w-[324px] mx-auto font-normal Normal'>Paying a total of ${cartTotal} for {totalUniqueItems} products. Download with All-Access instead?</p>

                                        <div className=' mt-[30px] mb-2'>
                                            <button type='submit' className='  text-center font-bold Bold rounded-[4px] w-[280px] h-[48px] sm:w-[356px] sm:h-[48px]  bg-[#60599E] text-white hover:bg-[#3f3a68]'>Pay ${cartTotal}
                                            </button>

                                        </div>








                                    </> : <>

                                        <div className='mt-[30px] '>
                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Email*</p>
                                            <input type="email" className='    w-[200px] h-[38px] xl:w-[357px]  py-5 px-[15px] ' placeholder='Enter Your Email' />
                                        </div>

                                        <div className='mt-[13px]'>
                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Card Information*</p>

                                            <input id='borderBottom' type="text" className='rounded-s-[4px] rounded-e-[4px] rounded-b-none w-[200px] h-[38px] xl:w-[357px] py-5 px-[15px] ' placeholder='Name On Card' />

                                            <input type="text" id='borderBottom' className=' w-[200px] h-[38px] xl:w-[357px]   py-5 px-[15px] ' placeholder='1234 1234 1234 1234' data-mask="000 000 000 0000" />

                                            <div className=''>
                                                <input type="text" className='border-r-0  w-[280px] h-[48px] sm:w-[178.5px] sm:h-[44px] py-5 px-[15px] Border_bottom_Left ' placeholder='MM / YY' />

                                                <input type="text" id='input_border_Left' className=' Border_bottom_right w-[280px] h-[48px] sm:w-[178.5px] sm:h-[44px] py-5 px-[15px] ' placeholder='CVC' />
                                            </div>
                                        </div>

                                        <div className='mt-[13px]'>
                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Set Account Password*</p>
                                            <input type="password" className='    w-[200px] h-[38px] xl:w-[357px] py-5 px-[15px] rounded-[4px]' placeholder='Password' />
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






            {/* Mobile design */}


            <div className=' z-10 block sm:hidden  ' onClick={() => {
                window.scrollTo(0, 0);
            }}>

                {
                    isEmpty ? <>


                        <div className='modal-container ' >
                            <img src={empty} className='sm:w-auto w-full mx-auto rounded-[4px] ' alt="" />

                            <h1 className=' flex items-center   justify-center mt-5  font-bold text-lg Bold'> Your cart is empty </h1>
                        </div>



                    </> : <>

                        {
                            mobileCart ? <>
                                <div>
                                    <div className='px-5 modal-container w-full h-[650px]'>

                                        <div className='flex justify-between items-center pt-[30px] '>
                                            <img src={logo} alt="" className='w-[40px] h-[24px]' />

                                            <button onClick={closeModal} className='border-[2px] rounded-[50%] sm:hover:border-white hover:border-[#28244c] sm:border-[#E5DFDC] border-primary w-[34px] h-[34px] sm:w-[50px] sm:h-[50px]'>

                                                <img src={MobileCancel} alt="" className='w-[28px]  h-[28px] mx-auto ' />


                                            </button>
                                        </div>

                                        <div className='flex justify-center'>
                                            <div className='flex gap-[57px] items-center mt-[30px]'>
                                                <p className='text-lg font-bold Bold '>Checkout</p>
                                                <div className='flex gap-[15px]'>
                                                    <button onClick={() => {
                                                        setPaypal(false);
                                                    }} className={` ${Paypal === false ? "  w-[61px]    h-[31px] bg-primary text-white     text-[12px] font-bold Bold border-[1px] rounded-[4px] border-[#60599E]" : " w-[61px]   h-[31px]   text-[#60599E]   text-[12px] font-bold Bold border-[1px] rounded-[4px] border-[#60599E]"}`}>
                                                        Paddle
                                                    </button>

                                                    <button onClick={() => {
                                                        setPaypal(true);
                                                    }} className={` ${Paypal === true ? "  w-[61px]    h-[31px] bg-primary text-white     text-[12px] font-bold Bold border-[1px] rounded-[4px] border-[#60599E]" :
                                                        "   w-[61px]   h-[31px]   text-[#60599E]   text-[12px] font-bold Bold border-[1px] rounded-[4px] border-[#60599E]"}`}>Paypal</button>
                                                </div>
                                            </div>
                                        </div>



                                        {
                                            Paypal ? <>

                                                {/* Paypal is true then  */}

                                                <div className='flex justify-center'>
                                                    <div>
                                                        <div className='mt-[30px] '>
                                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Email*</p>
                                                            <input type="email" className='   w-[280px] h-[44px] sm:h-[45px] sm:w-[357px]  py-5 px-[15px] ' placeholder='Enter Your Email' />
                                                        </div>

                                                        <div className='mt-[13px] '>
                                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Full Name *</p>
                                                            <input type="email" className='    w-[280px] h-[44px] sm:w-[357px]  py-5 px-[15px] ' placeholder='Enter full Name' />
                                                        </div>

                                                        <div className='mt-[13px] '>
                                                            <p className='text-[14px] mb-[10px] font-bold Bold'>Set Account Password *</p>
                                                            <input type="email" className='    w-[280px] h-[44px] sm:w-[357px]  py-5 px-[15px] ' placeholder='Password' />
                                                        </div>


                                                        <p className='text-[14px] mt-[20px] text-[#C6C1C0] text-center  w-[280px] sm:mr-0  sm:w-[324px] mx-auto font-normal Normal'>Paying a total of ${cartTotal} for {totalUniqueItems} products. Download with All-Access instead?</p>

                                                        <div className=' mt-[60px] mb-2'>
                                                            <button type='submit' className='  text-center font-bold Bold rounded-[4px] w-[280px] text-[14px] h-[48px] sm:w-[356px] sm:h-[48px]  bg-[#60599E] text-white hover:bg-[#3f3a68]'>Pay ${cartTotal}
                                                            </button>

                                                        </div>

                                                    </div>
                                                </div>







                                            </>
                                                :

                                                <>
                                                    {/* email */}
                                                    
                                                    <div className='flex justify-center '>
                                                        <div className=''>
                                                            <div className='mt-[30px] '>
                                                                <p className='text-[14px] mb-[10px] font-bold Bold'>Email*</p>
                                                                <input type="email" className='    w-[280px] h-[44px] sm:w-[357px]  py-5 px-[15px] ' placeholder='Enter Your Email' />
                                                            </div>

                                                            {/* card information  */}

                                                            <div className='mt-[13px]  w-[280px]'>
                                                                <p className='text-[14px] mb-[10px] font-bold Bold'>Card Information*</p>

                                                                <input id='borderBottom' type="text" className='rounded-t-[4px] w-[280px] h-[44px] sm:w-[357px] py-5 px-[15px] ' placeholder='Name On Card' />

                                                                <input type="text"  className=' w-[280px] h-[44px] xl:w-[357px]   py-5 px-[15px] ' placeholder='1234 1234 1234 1234' data-mask="000 000 000 0000" />

                                                                <div className='flex'>
                                                                    <input type="text" className='  w-[140px] h-[44px] sm:w-[178.5px] sm:h-[44px] py-5 px-[15px] Border_bottom_Left border-t-0' placeholder='MM / YY' />

                                                                    <input type="text"  className=' Border_bottom_right w-[140px] border-t-0  h-[44px] sm:w-[178.5px] sm:h-[44px] py-5 px-[15px] ' placeholder='CVC' />
                                                                </div>
                                                            </div>


                                                            {/* set account password */}

                                                            <div className='mt-[13px]'>
                                                                <p className='text-[14px] mb-[10px] font-bold Bold'>Set Account Password*</p>
                                                                <input type="password" className='    w-[280px] h-[44px] xl:w-[357px] py-5 px-[15px] rounded-[4px]' placeholder='Password' />
                                                            </div>


                                                            <p className='text-[14px] mt-5 sm:mt-[28px] text-center w-[280px] sm:w-[324px]  font-normal Normal'>Paying a total of ${cartTotal} for {totalUniqueItems} products. Download with All-Access instead?</p>

                                                            <div className=' mt-[30px] '>
                                                                <button type='submit' className='  text-center font-bold Bold rounded-[4px] w-[280px] h-[48px] sm:w-[356px] sm:h-[48px]  bg-[#60599E] text-white hover:bg-[#3f3a68]'>Pay ${cartTotal}
                                                                </button>

                                                            </div>
                                                        </div>
                                                    </div>





                                                </>
                                        }












                                    </div>
                                </div>



                            </> : <>


                                <div className='px-5 modal-container w-full h-[568px]'>

                                    <div className='flex justify-between items-center pt-[30px] '>
                                        <img src={logo} alt="" className='w-[40px] h-[24px]' />

                                        <button onClick={closeModal} className='border-[2px] rounded-[50%] sm:hover:border-white hover:border-[#28244c] sm:border-[#E5DFDC] border-primary w-[34px] h-[34px] sm:w-[50px] sm:h-[50px]'>

                                            <img src={MobileCancel} alt="" className='w-[28px]  h-[28px] mx-auto ' />


                                        </button>
                                    </div>

                                    <div className='flex justify-between mt-[38px]'>
                                        <p className='text-[20px] font-bold Bold'>Your Cart </p>
                                        <p className='text-[20px] font-bold Bold'>${cartTotal}</p>

                                    </div>


                                    <div className='gap-[20px] flex flex-col overflow-y-scroll mt-[30px] ScrollBar h-[259px]  '>

                                        {
                                            items.map(cartItem => <ModalCarts
                                                key={cartItem.id}
                                                cartItem={cartItem}
                                                removeItem={removeItem}




                                            />)
                                        }

                                    </div>


                                    <div className='flex justify-center mt-[30px]'>

                                        <div>
                                            <div className=' '>
                                                <button onClick={() => {
                                                    setMobileCart(true);
                                                }} type='submit' className='text-center font-bold Bold rounded-[8px]  w-[280px] h-[48px] mx-auto  bg-[#60599E] text-white hover:bg-[#3f3a68]'>
                                                    Continue to checkout

                                                </button>
                                            </div>

                                        </div>
                                    </div>












                                </div>




                            </>
                        }



                    </>
                }


            </div>

        </>
    );
};

export default Modal;