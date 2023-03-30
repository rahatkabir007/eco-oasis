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
            <div className='flex flex-col lg:flex-row my-5 md:my-10 mb-20 justify-evenly p-5 md:p-0 gap-y-10 lg:gap-y-0'

            >
                <div className='flex flex-col gap-y-8'>
                    <div className='py-5 w-full md:w-[75%] ml-0 md:ml-[2rem] lg:ml-[7rem] xl:ml-[9rem]'>
                        <p className='text-xl text-black dark:text-white'
                        >To contact us, please use the form below or send an email to <span className='font-semibold text-ecodarkgreen'>tabarak@eco-oasis.com.</span> We'll do our highest to respond as quickly as we can.</p>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center gap-y-12 gap-x-0 md:gap-x-20 lg:gap-48'>
                        <form
                            action="https://formspree.io/f/xwkjrejy"
                            method="POST"
                            className={`${css["leftForm"]} flex flex-col gap-y-6`}>
                            <div>
                                <input type="text"
                                    name="Name"
                                    placeholder='Name' required />
                            </div>
                            <div>
                                <input type="email"
                                    name="Email"
                                    placeholder='Email' required
                                    min={5}
                                    autoComplete='off'
                                />
                            </div>
                            <div>
                                <input type="text"
                                    name="Company Name"
                                    placeholder='Company Name/Individual' />
                            </div>
                            <div>
                                <input name="Subject" type="text" placeholder='Subject' min={10} />
                            </div>
                            <div>
                                <textarea name="Message" placeholder='Message/Brief'
                                    minLength={20} required></textarea>
                            </div>
                            <div>
                                <button type='submit' className="bg-ecodarkgreen rounded-md py-4 px-6 font-semibold text-white">Submit</button>
                            </div>
                        </form>
                        <div className='flex flex-col gap-y-10'>
                            <div className='flex flex-col gap-y-8'>
                                <div>
                                    <p className='text-xl font-bold text-ecodarkgreen dark:text-white'>Registerd Office</p>
                                </div>
                                <div className={`${css["rightForm"]} flex flex-col gap-y-6`}>
                                    <p className='text-xl text-[#3B3B3B] dark:text-white'>Chowdhury Villa, 1567/D,<br /> Air
                                        Mohammad School Road,<br />
                                        West Bakalia, Chattogram,<br />
                                        PO : 4203, Bangladesh.</p>
                                </div>
                            </div>
                            <div className={`${css["rightForm"]} flex flex-col gap-y-6`}>
                                <div>
                                    <p className='text-xl font-bold text-ecodarkgreen dark:text-white'>Headquarter</p>
                                </div>
                                <div className={`${css["rightForm"]} flex flex-col gap-y-6`}>
                                    <p className='text-xl text-[#3B3B3B] dark:text-white '>
                                        Kabir Manzil, Flat # 14,<br /> House # 76A, 1 Number<br /> Zakir Hossain Road, Khulshi,<br />PO : 4225, Chattogram, Bangladesh.</p>
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