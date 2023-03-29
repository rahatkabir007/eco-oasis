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
        {/* <div className={styles["cards"]}>
            <div className={`${styles["card"]}`}>
                <div className={`${styles["card__info-hover"]}`}>
                </div>
                <div className={`${styles["card__img"]}`}
                    style={{
                        backgroundImage: ` url(${item.image})`
                    }}
                ></div>
                <div className={`${styles["card__img--hover"]}`}
                    style={{
                        backgroundImage: ` url(${item.image})`
                    }}
                ></div>
                <div className={`${styles["card__info"]}`}>
                    <span className={`${styles["card__category"]}`}>{item.category}</span>
                    <h3 className={`${styles["card__title"]}`}>{item.name}</h3>
                </div>
            </div>
        </div> */}
        <div className="card">
            <div className="card__side card__side--front card__side--front-1"
                style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                }}
            >
                {/* <div className="card__description">
                    <div className='flex items-center justify-center object-cover w-[75%] relative'>
                       
                    </div>
                </div> */}
            </div>
            <div className="card__side card__side--back card__side--back-1 flex justify-center items-center">
                {/* <div className=''> */}
                <p>{item.name}</p>
                {/* </div> */}
            </div>
        </div>
    </>
}

export default Card