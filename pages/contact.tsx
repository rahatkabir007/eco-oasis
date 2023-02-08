import React from 'react'
import { useSelector } from 'react-redux'
import Contactus from '../components/pages/Contactus/Contactus'
import { controller } from '../src/state/StateController'

interface Props {
}

const contact: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return <Contactus />
}

export default contact