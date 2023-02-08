import Link from 'next/link'
import React from 'react'
import { Jsondata } from '../../../src/utils/Jsondata'


interface Props {
}

const Footer: React.FC<Props> = (props) => {



    return (
        <div className="bg-ecolightblack mt-10">
            <div className="flex flex-col md:flex-row py-28 container-x gap-y-9 gap-x-28">
                <div className="flex flex-col gap-8 ">
                    <div>
                        <img src="/images/Frame.svg" alt="" />
                    </div>
                    <div>
                        <p className="text-ecolightgrey">©2023 Eco Oasis Limited, All Right Reserved</p>
                    </div>
                    <div>
                        <a href="" className="text-ecolightgrey"><p>Terms & Conditions</p></a>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div>
                        <p className="text-white">Headquarter</p>
                    </div>
                    <div>
                        <p className="text-ecolightgrey">Kabir Manzil, Flat # 14, House # 76A,
                            1 Number Zakir Hossain Road, Khulshi.
                            Chattogram 4225, Bangladesh</p>
                    </div>
                    <div>
                        <p className="text-ecolightgrey">Registered Office : Chowdhury Villa,
                            1567/D, Air Mohammad School Road,
                            West Bakalia, Chattogram,
                            PO : 4203, Bangladesh.</p>
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