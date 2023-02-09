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
            <div className='flex flex-col md:flex-row my-10 mb-20 justify-evenly gap-12 p-8 md:p-0'>
                <div className='flex flex-col gap-y-8'>
                    <div>
                        <p className='text-xl text-black dark:text-white'>How can we assist you in your project?</p>
                    </div>
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
                </div>
                <div className='flex flex-col gap-y-10'>
                    <div className='flex flex-col gap-y-8'>
                        <div>
                            <p className='text-xl text-black dark:text-white'>Review Us</p>
                        </div>
                        <div className={`${css["rightForm"]} flex flex-col gap-y-6`}>
                            <div>
                                <textarea name="" id="" placeholder='Leave a message*' ></textarea>
                            </div>
                            <div>
                                <button className="bg-ecodarkgreen rounded-md py-4 px-4 font-semibold text-white">Submit Message</button>
                            </div>
                        </div>
                    </div>
                    <div className={`${css["rightForm"]} flex flex-col gap-y-6`}>
                        <div>
                            <textarea name="" id="" placeholder='Suggest a new feature*'></textarea>
                        </div>
                        <div>
                            <button className="bg-ecodarkgreen rounded-md py-4 px-6 font-semibold text-white">Suggest</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus