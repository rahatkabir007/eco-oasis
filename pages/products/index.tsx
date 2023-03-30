import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/pages/Products/Products'
import { controller } from '../../src/state/StateController'

interface Props {
}

const products: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return <Products />
}

export default products