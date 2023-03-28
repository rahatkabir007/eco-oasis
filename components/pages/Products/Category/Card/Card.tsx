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
        <div className={styles["cards"]}>
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
                    {/* <span className={`${styles["card__by"]}`}>by <a href="#" className="card__author" title="author"></a></span> */}
                </div>
            </div>
        </div>
    </>
}

export default Card