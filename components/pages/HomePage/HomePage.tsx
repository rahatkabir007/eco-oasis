import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import AboutSection from './About/AboutSection'
import Herosection from './Herosection/Herosection'

interface Props {
}

const HomePage: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div >
            <Herosection />
            <AboutSection />
        </div>
    )
}

export default HomePage