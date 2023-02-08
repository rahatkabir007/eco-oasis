import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import Herosection from './Herosection/Herosection'

interface Props {
}

const HomePage: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div >
            <Herosection />
        </div>
    )
}

export default HomePage