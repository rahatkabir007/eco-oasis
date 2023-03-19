import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import css from "./Contactus.module.css"
interface Props {
}

const Contactus: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div className='container-x'>
            <div className='flex flex-col lg:flex-row my-5 md:my-10 mb-20 justify-evenly p-5 md:p-0 gap-y-10 lg:gap-y-0' style={{ padding: '1rem 11rem' }}>
                <div className='flex flex-col gap-y-8'>
                    <div>
                        <p className='text-xl text-black dark:text-white'>To contact us, please use the form below or send an email to <span className='font-semibold text-ecodarkgreen'>tabarak@eco-oasis.com.</span> We'll do our highest to respond as quickly as we can.</p>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-center gap-40'>
                        <div className={`${css["leftForm"]} flex flex-col gap-y-6`}>
                            <div>
                                <input type="text" placeholder='Name' />
                            </div>
                            <div>
                                <input type="text" placeholder='Email' />
                            </div>
                            <div>
                                <input type="text" placeholder='Company Name/Individual' />
                            </div>
                            <div>
                                <input type="text" placeholder='Subject' />
                            </div>
                            <div>
                                <textarea name="" id="" placeholder='Message/Brief'></textarea>
                            </div>
                            <div>
                                <button className="bg-ecodarkgreen rounded-md py-4 px-6 font-semibold text-white">Submit</button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-10'>
                            <div className='flex flex-col gap-y-8'>
                                <div>
                                    <p className='text-xl font-bold text-ecodarkgreen dark:text-white'>Registerd Office</p>
                                </div>
                                <div className={`${css["rightForm"]} flex flex-col gap-y-6`}>
                                    <p className='text-xl text-[#3B3B3B] dark:text-white'>Chowdhury Villa, 1567/D, Air
                                        Mohammad School Road,
                                        West Bakalia, Chattogram,
                                        PO : 4203, Bangladesh.</p>
                                </div>
                            </div>
                            <div className={`${css["rightForm"]} flex flex-col gap-y-6`}>
                                <div>
                                    <p className='text-xl font-bold text-ecodarkgreen dark:text-white'>Headquarter</p>
                                </div>
                                <div className={`${css["rightForm"]} flex flex-col gap-y-6`}>
                                    <p className='text-xl text-[#3B3B3B] dark:text-white '>Kabir Manzil, Flat # 14, House # 76A, 1 Number Zakir Hossain Road, Khulshi. Chattogram 4225, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus