import React, { useState } from 'react';
import logo from '../../assets/Images/logo.png'
import '../Shared/Style.css'
import { Link } from 'react-router-dom';
import cardCorn from '../../assets/Images/Icon/Polygon 1.png'
import shoppingCard from '../../assets/Images/Icon/shoppingCard.png'
import Modal from '../Home/Modal';



const Navbar = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);

    return (
        <>

            <div className='container mx-auto '>

                <div className='  flex justify-between items-center '>
                    <Link className='' to='/'>
                        <img src={logo} className='w-[59px] h-[35px]' alt="" />


                    </Link>

                    <div className='flex gap-[30px] items-center'>
                        <div className='flex gap-5 items-center'>
                            <div>
                                <img src={shoppingCard} onClick={() => setIsOpen(true)} className='w-[28px] h-[28px]' />

                                {
                                    modalIsOpen && <Modal closeModal={closeModal}/>
                                }
                            </div>









                            <Link to='/signIn' className='font-bold text-[16px] Bold'>Sign In</Link>
                        </div>








                        <div onClick={() => {
                            window.scrollTo(0, 0);
                        }} className='lg:flex gap-[30px] hidden items-center'>
                            <Link to='/GetUltimateAccess' className='bg-[#60599E] flex items-center justify-center rounded-[4px]  text-white w-[179px] h-[42px] text-center text-[14px] font-bold Bold '>Get Ultimate Access</Link>


                        </div>

                    </div>
                </div>






            </div>

            
            <div className=' hrDiv'>
                <hr className='hrWid  ' />

            </div>











        </>
    );
};

export default Navbar;