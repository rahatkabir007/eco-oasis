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
            <div className='flex flex-col items-center text-center w-full p-4 md:p-0 md:w-[85%] mx-auto my-12 md:my-24'>
                <div>
                    <p className="text-xl text-ecodarkgreen font-semibold it">Products Range</p>
                </div>
                <div className='mt-[13px]'>
                    <p className="text-[15px] text-ecoblack dark:text-white">Eco Oasis Limited chooses to source and deliver eco-friendly biodegradable products in considering the sustainability prospect in the coming future that aligns with our business ethics and core values. Eco Oasis Limited ensures 100% biodegradable materials like Jute, Cotton, Bamboo, Cane, Seagrass, Leather, etc. through proper quality checks of standard testing. Our product range covers Rugs, Floor mat, Table Runner, Ladies' bags, Shopping Bags, Baskets, etc. made of Jute and Cotton. We also source and export Genuine Leather products like Men belts, Ladies' Purses, Bags, Wallets, Footwear, Jackets, Hand Gloves, etc.</p>
                </div>
            </div>
            <div className='my-1'>
                <SectionHeader title="Product Categories" fontSize="4rem" />
            </div>
            <div className='p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-10 md:gap-x-0 gap-y-20'>
                {
                    Jsondata.productCategories.map((item) => {
                        return (
                            <Link href={`/products/category/${item.url}`}>
                                <div className={`${styles["container"]} w-full h-[300px] sm:h-[300px] md:w-[600px] md:h-[400px]`}
                                    style={{
                                        backgroundImage: ` url(${item.image})`
                                    }}
                                >
                                    <div className={`${styles["overlay"]}`}>
                                        <div className={`${styles["items"]} ${styles["head"]}`}>
                                            <p>{item.title}</p>
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