import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import { SvgPaths } from '../../../../src/utils/SvgPaths'
import SvgIconRenderer from '../../../helpers/SvgIconRenderer'
import css from "./Herosection.module.css";

interface Props {
}

const Herosection: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div className=''>
            <div className={`block md:flex justify-between items-start py-20 px-10 md:px-28 md:py-24 gap-[150px] ${css["bg"]}`}>
                <div className="container-x flex flex-col gap-y-36 md:gap-y-60">
                    <div className="w-full md:w-1/2 ">
                        <p className="text-herogreen text-[24px]  sm:text-[49px] md:text-[49px] dark:text-white"> <span className='font-semibold'>Bangladesh:</span>
                            <br />The Land of<br />
                            <span className='font-semibold'>Business Opportunities</span></p>
                    </div>
                    <div className='mt-32 md:mt-0'>
                        <div className="">
                            <p className="text-herogreen font-bold text-[24px] sm:text-[49px] md:text-[49px]">Eco Oasis Limited</p>
                        </div>
                        <div className="">
                            <p className="text-gray-200">A Trusted Partner in Sourcing, Supply Chain and Export management for Eco-Friendly and Natural Product</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection