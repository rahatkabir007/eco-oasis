import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import { Jsondata } from '../../../src/utils/Jsondata'

interface Props {
}

const About: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div className="container-x">
            <div className='flex flex-col'>
                <div className='flex flex-col items-center text-center w-full p-4 md:p-0 md:w-[60%] mx-auto my-12 md:my-24'>
                    <div>
                        <p className="text-xl text-ecodarkgreen font-semibold it">Eco Oasis Limited: Who we are</p>
                    </div>
                    <div className='mt-[13px]'>
                        <p className="text-[15px] text-ecoblack dark:text-white">Shareholder’s knowledge, skills, customized mindset, innovative thinking widened in the field of Merchandising, Operations, Human Capital management, enterprise project management, and logistics service have broadened the scope to meet customized demand and deal the business in befitting manner.  Eco Oasis wants to be a true partner instead of a profit aiming entity and wants to build a long-term business association towards its vision.</p>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row md:flex-row justify-center items-center md:items-start gap-8'>
                    {
                        Jsondata.aboutData.map(item => {
                            return (
                                <div className={`rounded-lg w-[292px] bg-ecobglightgreen text-center overflow-hidden sm:overflow-scroll lg:overflow-hidden`} style={{
                                    height: item.height
                                }}>
                                    <div
                                        style={{
                                            padding: item.padding
                                        }}
                                    >
                                        <p className="text-xl text-ecodarkgreen font-semibold">{item.title}</p>
                                        <p className="text-[9px] text-ecodarkgreen mt-[5px]">{item.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default About