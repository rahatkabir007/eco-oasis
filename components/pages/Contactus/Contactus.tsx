import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'

interface Props {
}

const Contactus: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div>
            Contactus
        </div>
    )
}

export default Contactus