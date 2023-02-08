import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import { SvgPaths } from '../../../../src/utils/SvgPaths'
import SvgIconRenderer from '../../../helpers/SvgIconRenderer'

interface Props {
}

const Herosection: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div className='container-x'>
            <div className="flex justify-between items-start px-28 py-24 gap-[150px]">
                <div className="w-1/2 flex flex-col gap-y-16">
                    <div>
                        <p className="text-ecodarkgreen text-[39px] dark:text-white">Bangladesh: the land of business
                            opportunities for <span className="font-semibold">Eco-Friendly</span> product</p>
                    </div>
                    <div className="">
                        <button className="bg-ecolightgreen rounded-[5px] text-white p-4">Explore Our Products</button>
                    </div>
                    <div className="flex gap-6 ">
                        {
                            [SvgPaths.facebook, SvgPaths.linkedin, SvgPaths.instagram].map(item => {
                                return (
                                    <div className='bg-ecolightgreen rounded-[50%] p-2'>
                                        <SvgIconRenderer
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            path={item}
                                            pathFill={"#fff"}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='w-full'>
                    <img src="/images/LandingPageLogo.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Herosection