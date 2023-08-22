import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BoyUsingLaptop from '../../assets/Images/Icon/illustration.png'
import logo from '../../assets/Images/logo.png'
import '../Shared/Style.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ComingPage = () => {
    const [cart, SetCart] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wsc6vy1', 'template_bmnzokw', form.current, 'eYDcSzpdjig7_mdsd')
            .then((result) => {

                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'You Message is send successfully Thank You!!',
                    showConfirmButton: false,
                    timer: 1500
                })
                e.target.reset(form);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <div className=' container mx-auto mt-[30px]'>
                <div className='xl:px-[135px]  sm:px-[30px] px-5  bg-white'>

                    <div className='pb-[29px] flex justify-between items-center '>
                        <Link>
                            <img src={logo} className='w-[50px] h-[35px]' alt="" />


                        </Link>

                        <div className='flex gap-[30px] items-center'>







                            <div className=''>
                                <button className='bg-[#60599E] h-[42px] rounded-[4px] text-white py-[12px] px-5 text-[14px] font-bold Bold '>Contact Us</button>


                            </div>

                        </div>
                    </div>

                    <div>
                        <img src={BoyUsingLaptop} className='w-[703px] h-[385px] mx-auto' alt="" />
                    </div>








                </div>


            </div>
            <div className='BG_color'>

                <div className='pt-[50px] container mx-auto '>
                    <div className='-mr-16 '>
                        <h1 className='text-[60px] font-bold text-center Bold'>Coders At Work</h1>

                    </div>

                    <p className='text-[30px] mb-[50px] ml-16 mt-0  text-center'>-Coming Soon-</p>


                    <div className='flex justify-center pb-[107px] ml-[13%]'>
                        <div>

                            <p className='text-[14px] pb-[15px]  font-bold Bold'>Sign Up For Early Access</p>
                            <div>
                                <div className=' flex justify-center  '>




                                    <form ref={form} onSubmit={sendEmail} className="flex w-[280xp] sm:w-auto  justify-center  ">


                                        <input
                                            type="email"
                                            name='user_email'

                                            placeholder="Enter your email address"
                                            className="sm:w-[634px] w-[280px] py-[19px] pl-[17px]  h-[58px]  rounded-[4px] border-[1px] border-[#60599E]  shadow-sm "
                                        />
                                        <button type='submit' className='bg-[#60599E] h-[48px] relative rounded-[4px] text-white py-[15px] px-[40px]  text-[14px] right-[132px] top-[5px] font-bold Bold'>Submit</button>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                    <p className='text-[14px] font-normal opacity-60 Normal tracking-[2px] text-center pb-[50px]'>© 2023 Xpeed Page, LLC</p>






                </div>
            </div>


        </>
    );
};

export default ComingPage;