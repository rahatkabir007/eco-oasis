import React from 'react'
import { useSelector } from 'react-redux'
import About from '../components/pages/About/About'
import { controller } from '../src/state/StateController'

interface Props {
}

const about: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return <About />
}

export default about