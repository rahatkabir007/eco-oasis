import Link from 'next/link'
import React from 'react'
import { Jsondata } from '../../../src/utils/Jsondata'
import css from "../Header/Header.module.css"

interface Props {
}

const Footer: React.FC<Props> = (props) => {



    return (
        <div className="bg-ecolightblack mt-10">
            <div className="container-x px-4 md:px-10 lg:px-4 flex flex-col lg:flex-row justify-evenly items-start py-24 gap-y-9 gap-x-10">
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
                        {/* <a href="" className="text-ecolightgrey"><p>Terms & Conditions</p></a> */}
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-[100%] md:w-[65%] lg:w-[25%]">
                    <div>
                        <p className="text-white">Mailing Address</p>
                    </div>
                    <div>
                        <p className="text-ecolightgrey"> Kabir Manzil, Flat # 14, House # 76A, 1 Number Zakir Hossain Road, Khulshi, PO : 4225, Chattogram, Bangladesh.</p>
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
                        <a href="https://www.facebook.com/EcoOasisLimited?hc_ref=ARTEt3kAc8Mb07RjYyTAlSRVgWHvCa58xGalswHP8HQVsd8nqHYjnKNPO2OdpvfXzPc&fref=nf&__xts__[0]=68.ARCWwns_8ixl8PsimtuyXOy2Yosgm7hHOeZzU1Kfa6Bc9dsa2nIUVfrYqBzCbnrJ7fU_w9e7KFCu_nxnEZX4JzhredTHbkUl2tX1m57458T3MENmwHJUo-e5y9nf-hOsOq15n0eRMPoRr1jllw6i6TRQ2hFUg1m_Q5pz2GD5cSjmaO2J0BYGM60z6lqFlvDJk5t2w5wve8YyeXvQIdq6WQVGaIkOgQfODY4-hEzCACVqNSOBLVjlQTQxEetvl4Zo1zv24WQ7KYIve7AdTIyeV9s4Z3vuvlhE6ru5KQqOYY-sLu2YuS8" className="text-ecolightgrey hover:text-ecolightgreen">Facebook</a>
                        {/* <a href="" className="text-ecolightgrey hover:text-ecolightgreen">LinkedIn</a>
                        <a href="" className="text-ecolightgrey hover:text-ecolightgreen ">Instagram</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer