import React from 'react'
import { useSelector } from 'react-redux'
import Category from '../../../components/pages/Products/Category/Category'
import { controller } from '../../../src/state/StateController'

interface Props {
}

const category: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)



    return <Category />
}

export default category