import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'

interface Props {
}

const Herosection: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        // bg - ecolightgreen h - [180vh]
        <div className='container-x'>
            <div className="flex justify-between items-center">
                <div>
                    <p>Bangladesh: the land of business
                        opportunities for <span>Eco-Friendly</span> product</p>
                </div>
                <div>
                    <img src="/images/LandingPageLogo.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Herosection