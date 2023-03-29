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
            <div>
                <img className='w-full h-[300px] object-cover rounded-t-md rounded-b-2xl' src={item.image} alt="" />
            </div>
            <div className="mt-6 ml-6 flex flex-col justify-start items-start">
                <span className="text-xl font-semibold text-ecolightblack">{item.name}</span>
                <span className="text-md font-medium text-ecodarkblue">{item.category}</span>
            </div>
        </div>
        {/* <div className="card">
            <div className="card__side card__side--front card__side--front-1"
                style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    width: '85%',
                    margin: '0 auto'
                }}
            >
            </div>
            <div className="card__side card__side--back card__side--back-1 flex justify-center items-center">
                <p>{item.name}</p>
            </div>
        </div> */}
    </>
}

export default Card