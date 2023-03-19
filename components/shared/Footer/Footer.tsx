import Link from 'next/link'
import React from 'react'
import { Jsondata } from '../../../src/utils/Jsondata'
import css from "../Header/Header.module.css"

interface Props {
}

const Footer: React.FC<Props> = (props) => {



    return (
        <div className="bg-ecolightblack mt-10">
            <div className="conatiner-x px-4 md:px-10 lg:px-4 flex flex-col lg:flex-row justify-evenly items-start py-24 gap-y-9 gap-x-10">
                <div className="flex flex-col justify-center items-start gap-9">
                    <div>
                        <img src="/images/Logo.png" alt=""
                            className={css["logo"]}
                        />
                    </div>
                    <div>
                        <p className="text-ecolightgrey">©2023 Eco Oasis Limited, All Right Reserved</p>
                    </div>
                    <div>
                        <a href="" className="text-ecolightgrey"><p>Terms & Conditions</p></a>
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-[100%] md:w-[65%] lg:w-[20%]">
                    <div>
                        <p className="text-white">Headquarter</p>
                    </div>
                    <div>
                        <p className="text-ecolightgrey">Kabir Manzil, Flat # 14, House # 76A,
                            1 Number Zakir Hossain Road, Khulshi.
                            Chattogram 4225, Bangladesh</p>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div>
                        <p className='text-white'>Website</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        {
                            Jsondata.headerLinks.map(item => {
                                return (
                                    <Link href={item.link} className="text-ecolightgrey hover:text-ecolightgreen">{item.name}</Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div>
                        <p className="text-white">Social</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <a href="" className="text-ecolightgrey hover:text-ecolightgreen">Facebook</a>
                        <a href="" className="text-ecolightgrey hover:text-ecolightgreen">Linkedin</a>
                        <a href="" className="text-ecolightgrey hover:text-ecolightgreen ">Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer