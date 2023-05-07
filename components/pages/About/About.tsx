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
                <div className='flex flex-col items-start text-start w-full container-x my-12 md:my-24'>
                    <div>
                        <p className="text-xl text-ecodarkgreen font-semibold it">Eco Friendly, Natural and Biodegradable Materials</p>
                    </div>
                    <div className='mt-[13px] leading-[30px]'>
                        <p className="text-[15px] text-ecoblack dark:text-white">Eco-friendly and biodegradable products are made from natural materials that are renewable and sustainable and are designed to have minimal impact on the environment. They are becoming increasingly important as people become more aware of the environmental effects of the products they use and seek more sustainable alternatives.</p>
                        <p className="text-[15px] text-ecoblack dark:text-white">The importance of eco-friendly and biodegradable products is that they have a lower environmental impact than products made from synthetic materials. They are often made from renewable resources, and they can be recycled or biodegraded at the end of their life, reducing waste and pollution.
                        </p>
                        <p className="text-[15px] text-ecoblack dark:text-white">Using these products helps to conserve natural resources, reduce greenhouse gas emissions, and protect the environment for future generations. Examples of these materials are Jute, Cotton, Coconut Husk, Coir, Cocopeat, Kashia, Seagrass, Bamboo, and Leather etc.
                        </p>

                    </div>
                </div>
                <div className='flex flex-col sm:flex-row md:flex-row justify-center items-center md:items-start gap-8'>
                    {
                        Jsondata.aboutData.map(item => {
                            return (
                                <div className={`rounded-lg w-[400px] bg-ecobglightgreen text-center h-[550px] py-3 px-7 `}>
                                    <div

                                    >
                                        <p className="text-md text-ecodarkgreen font-semibold">{item.title}</p>
                                        <p className="text-[11px] text-ecodarkgreen mt-[5px]">{item.description}</p>
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