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
<<<<<<< HEAD
            <div className='flex flex-col px-2 md:px-20 mt-10'>
                <form className="flex" onClick={handleSearch}>
                    <div>
                        <input type="text" placeholder='Search' className="outline-none border-2 border-[#00AD7F] text-[#92B1A4] rounded-l-lg py-[7px] px-2 w-[160px] md:w-[421px] dark:bg-transparent dark:text-white" onChange={handleChange} />
                    </div>
                    <div>
                        <select onChange={handleChange} className="outline-none border-2 border-l-0 border-[#00AD7F] text-[#1c1c1c] text-sm py-[8.5px] px-2 w-[100px] md:w-[145px] dark:bg-transparent dark:text-white">
                            <option value="All Categories" selected className='text-[#1c1c1c] dark:bg-transparent dark:text-white'>All Categories</option>
                            {
                                Jsondata.productCategories.slice(1).map((item, ind) => {
                                    return (
                                        <option value={item} className='text-[#1c1c1c]'>{item}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <button type='submit' className="text-base bg-ecolightgreen text-white font-medium px-5 py-[8.5px] rounded-r-lg">
                            Search
                        </button>
                    </div>
                </form>
                <div className='flex flex-wrap gap-6 mt-8'>
                    {
                        Jsondata.productCategories.map((item, ind) => {
                            return (
                                <div>
                                    <button key={item} onClick={() => handleProductsFilter(item)} className={`${selected === item ? "bg-ecolightgreen text-white" : "bg-transparent"} text-sm  border border-[#92B1A4] dark:text-white px-5 py-[9px] rounded-lg`}>{item}</button>
                                </div>
                            )
                        })
                    }
=======
            <div className='flex flex-col items-center text-center w-full p-4 md:p-0 md:w-[85%] mx-auto my-12 md:my-24'>
                <div>
                    <p className="text-xl text-ecodarkgreen font-semibold it">Products Range</p>
>>>>>>> 975aba1dcc9486ab2c8ff0ffec41d199f47c19ed
                </div>
                <div className='mt-[13px]'>
                    <p className="text-[15px] text-ecoblack dark:text-white">Eco Oasis Limited chooses to source and deliver eco-friendly biodegradable products in considering the sustainability prospect in the coming future that aligns with our business ethics and core values. Eco Oasis Limited ensures 100% biodegradable materials like Jut, Cotton, Bamboo, Cane, Seagrass, Leather, etc. through proper quality checks of standard testing. Our product range covers Rugs, Floor mat, Table Runner, Ladies' bags, Shopping Bags, Baskets, etc. made of Jute and Cotton. We also source and export Genuine Leather products like Men belts, Ladies' Purses, Bags, Wallets, Footwear, Jackets, Hand Gloves, etc.</p>
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