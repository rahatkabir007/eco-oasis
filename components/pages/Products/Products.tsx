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
            <div className='flex flex-col items-start w-full my-12 md:my-24'>
                <div>
                    <p className="text-xl text-ecodarkgreen font-semibold it">Product Category</p>
                </div>
                <div className='mt-[13px] leading-[28px]'>
                    <p className="text-[15px] text-ecoblack dark:text-white">Eco Oasis Limited chooses to source and deliver eco-friendly biodegradable products in considering the sustainability prospect in the coming future that aligns with our business ethics and core values. Eco Oasis Limited ensures 100% Natural and biodegradable materials like Jute, Cotton, Coco Husk, Coir, Cocopeat, Bamboo, Cane, Seagrass, Palm, Fiber, Recycle Fabric, etc. We also Source and export Genuine Cow Leather Items for Personal Stuff through proper quality checks of standard testing.  Category wise our products ranges are as below</p>
                    <p className="text-[15px] text-ecoblack dark:text-white">Jute and Cotton : Tote Bag, Ladies Fashionable bag, Shopping Bag, Cotton Net Bag, Table Runner, Placemat, Jute RUG, Jute Sleeper, Jute Wall Light, Hanging Light, Jute Flower Vase.</p>
                    <p className="text-[15px] text-ecoblack dark:text-white">Coconut Eco Products:  Coco Fiber, Coco Husk, Cocopeat, Coir Pot, Coir Weed Mat, Coir Seeding Tray, Coco Poles, Birds Nest, etc.</p>
                    <p className="text-[15px] text-ecoblack dark:text-white">Biodegradable Basket from Jute, Sea Grass, Plum Fiber, Kashia, Recycle fabric etc and uses are  Planers, Laundry Basket, Pet House, Kitchen Basket, Storage Basket etc.</p>
                    <p className="text-[15px] text-ecoblack dark:text-white">Leather Stuff: We source Genuine Export Quality Cow leather and our product lines for leather are Men and Women Belt, Long and Short Wallet, Ladies Bag, Purse, Card Holder, Hand Gloves Etc.</p>
                    <p className="text-[15px] text-ecoblack dark:text-white">Cocopeat: Using cocopeat has several environmental benefits. It is a renewable resource made from coconut husks, reducing our reliance on synthetic materials. Cocopeat has a high water holding capacity, reducing water usage in agriculture. It is also biodegradable and can be composted, reducing waste in landfills.</p>
                    <p className="text-[15px] text-ecoblack dark:text-white">Coco Husk: Coco husk, also known as coconut fiber, is the fibrous material that surrounds the coconut. It is used as a natural and renewable resource in various applications, such as erosion control, soil amendment, and as a substrate for hydroponic gardening. Coco husk is eco-friendly and biodegradable, making it a sustainable alternative to synthetic materials.</p>
                    <p className="text-[15px] text-ecoblack dark:text-white">Coco Fiber: Using coco fiber has several environmental benefits. It is a renewable resource, made from the waste product of coconut processing. Coco fiber is biodegradable and can be composted, reducing waste in landfills. It is also a sustainable alternative to synthetic materials, reducing our reliance on fossil fuels. In addition, coco fiber has a high water-holding capacity, which can help reduce water usage in agriculture</p>
                    <p className="text-[15px] text-ecoblack dark:text-white">Coir Pot: A coir pot is a biodegradable planter made from coconut fiber. It is used in horticulture as a sustainable alternative to plastic pots. Coir pots allow for air pruning of roots, which leads to healthier plants with a more extensive root system. Coir pots can be planted directly in the ground, reducing transplant shock.</p>
                    <p className="text-[15px] text-ecoblack dark:text-white">Coir Weed Mat: Using coir weed mats is an eco-friendly solution for weed control. They suppress weed growth, reducing the need for chemical herbicides. Coir mats also help retain soil moisture and prevent soil erosion. They are biodegradable and can be easily composted, reducing waste in landfills. In addition, coir mats are a sustainable alternative to synthetic weed mats, which are made from non-renewable materials and do not biodegrade.
                        Coir Seeding Tray: Using coir seeding trays is an environmentally friendly solution for starting seedlings. They are biodegradable and can be planted directly in the ground, reducing transplant shock. Coir trays also promote air pruning of roots, leading to healthier plants with a more extensive root system.</p>
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