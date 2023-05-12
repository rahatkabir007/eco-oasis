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
            <div className='flex flex-col items-start w-full  md:my-5 px-7 lg:px-0'>
                <div>
                    <p className="text-xl text-ecodarkgreen font-semibold it">Product Category</p>
                </div>
                <div className='mt-[13px] leading-[28px] text-justify flex flex-col gap-2'>
                    <p className="text-[15px] text-ecoblack dark:text-white">Eco Oasis Limited chooses to source and deliver eco-friendly biodegradable products in considering the sustainability prospect in the coming future that aligns with our business ethics and core values. Eco Oasis Limited ensures 100% Natural and biodegradable materials like Jute, Cotton, Coco Husk, Coir, Cocopeat, Bamboo, Cane, Seagrass, Palm, Fiber, Recycle Fabric, etc. We also Source and export Genuine Cow Leather Items for Personal Stuff through proper quality checks of standard testing.  Category wise our products ranges are as below</p>
                    <p className="text-[15px] text-ecoblack dark:text-white"><span className='font-bold'>Jute and Cotton :</span> Tote Bag, Ladies Fashionable bag, Shopping Bag, Cotton Net Bag, Table Runner, Placemat, Jute RUG, Jute Sleeper, Jute Wall Light, Hanging Light, Jute Flower Vase.</p>
                    <p className="text-[15px] text-ecoblack dark:text-white"><span className='font-bold'>Coconut Eco Products:</span> Coco Fiber, Coco Husk, Cocopeat, Coir Pot, Coir Weed Mat, Coir Seeding Tray, Coco Poles, Birds Nest, etc.</p>
                    <p className="text-[15px] text-ecoblack dark:text-white"><span className='font-bold'>Biodegradable Basket</span> from Jute, Sea Grass, Plum Fiber, Kashia, Recycle fabric etc and uses are  Planers, Laundry Basket, Pet House, Kitchen Basket, Storage Basket etc.</p>
                    <p className="text-[15px] text-ecoblack dark:text-white"><span className='font-bold'>Leather Stuff:</span> We source Genuine Export Quality Cow leather and our product lines for leather are Men and Women Belt, Long and Short Wallet, Ladies Bag, Purse, Card Holder, Hand Gloves Etc.</p>

                </div>
            </div>
            <div className='my-1'>
                <SectionHeader title="Product Categories" fontSize="4rem" />
            </div>
            <div className='px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-10 md:gap-x-0 gap-y-20'>
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