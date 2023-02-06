import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'

interface Props {
}

const Herosection: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        // bg - ecolightgreen h - [180vh]
        <div className='container-x bg-ecolightgreen h-[180vh]'>
            Herosection
        </div>
    )
}

export default Herosection