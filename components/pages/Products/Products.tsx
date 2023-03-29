import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IProducts } from '../../../interfaces/models'
import { controller } from '../../../src/state/StateController'
import { Jsondata } from '../../../src/utils/Jsondata'
import SectionHeader from '../../helpers/SectionHeader/SectionHeader'
import styles from "./Products.module.css"
interface Props {
}

const Products: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div className="container-x">
            <div className='flex flex-col items-center text-center w-full p-4 md:p-0 md:w-[60%] mx-auto my-12 md:my-24'>
                <div>
                    <p className="text-xl text-ecodarkgreen font-semibold it">Eco Oasis Limited: Who we are</p>
                </div>
                <div className='mt-[13px]'>
                    <p className="text-[15px] text-ecoblack dark:text-white">Shareholder’s knowledge, skills, customized mindset, innovative thinking widened in the field of Merchandising, Operations, Human Capital management, enterprise project management, and logistics service have broadened the scope to meet customized demand and deal the business in befitting manner.  Eco Oasis wants to be a true partner instead of a profit aiming entity and wants to build a long-term business association towards its vision.</p>
                </div>
            </div>
            <div className='my-1'>
                <SectionHeader title="Product Categories" fontSize="4rem" />
            </div>
            <div className='p-12 grid grid-cols-1 md:grid-cols-2 gap-y-20'>
                {
                    Jsondata.productCategories.map((item) => {
                        return (
                            <Link href={`/products/category/${item.url}`}>
                                <div className={`${styles["container"]} w-full h-[300px] sm:h-[400px] md:w-[600px] md:h-[400px]`}
                                    style={{
                                        backgroundImage: ` url(${item.image})`
                                    }}
                                >
                                    <div className={`${styles["overlay"]}`}>
                                        <div className={`${styles["items"]} ${styles["head"]}`}>
                                            <p>{item.category}</p>
                                            <hr />
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products