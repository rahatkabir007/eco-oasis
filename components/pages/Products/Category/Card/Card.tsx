import React from 'react'
import { useSelector } from 'react-redux'
import { IProducts } from '../../../../../interfaces/models'
import { controller } from '../../../../../src/state/StateController'
import styles from "./Card.module.css"
interface Props {
    item: IProducts
}

const Card: React.FC<Props> = ({ item }) => {

    const states = useSelector(() => controller.states)

    return <>
        <div className='bg-ecogrey h-[400px] shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-md w-full md:w-[85%] mx-auto cursor-pointer'>
            <div className='bg-white'>
                <img className='w-full h-[300px] object-cover rounded-t-md rounded-b-2xl bg-gray-400' src={item.image} alt={item.name} loading="lazy" />
            </div>
            <div className="mt-6 ml-6 flex flex-col justify-start items-start">
                <span className="text-xl font-semibold text-ecolightblack">{item.name}</span>
                <span className="text-md font-medium text-ecodarkblue">{item.category}</span>
            </div>
        </div>
    </>
}

export default Card