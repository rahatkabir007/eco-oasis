import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import { useTheme } from 'next-themes';
import css from "./Header.module.css"
import Link from 'next/link';
import { Jsondata } from '../../../src/utils/Jsondata';
import { useRouter } from 'next/router';

interface Props {
}

const Header: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    let [open, setOpen] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const [nav, setNav] = useState(false);
    const router = useRouter();
    const { asPath } = router;

    //Tailwind Classes
    const genericHamburgerLine = `h-1 w-7 rounded-full bg-black dark:bg-white transition ease transform duration-500`;

    useEffect(() => {
        controller.setState({ mounted: true });

    }, []);

    if (!states.mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNav(true)
        }
        else {
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground)




    return (
        <div className={`w-full sticky top-0 left-0  ${nav ? 'bg-white shadow-lg dark:bg-ecolightblack' : ''}`}>
            <div className={`flex items-center justify-between py-7 px-7 md:px-12 container-x`}>
                <div className='cursor-pointer flex items-center font-[Poppins] gap-x-24'>
                    <Link href="/"><div>
                        <img src="/images/Logo.png" alt="logo"
                            className={css["logo"]}
                        />
                    </div></Link>
                    <div>
                        <ul className={`md:flex md:items-center gap-x-20 md:pb-0 sm:bg-transparent dark:sm:bg-transparent bg-white dark:bg-[#121212] pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[85px]' : 'top-[-490px]'}`}>
                            {
                                Jsondata.headerLinks.map((link) => (
                                    <li key={link.name} className='md:mr-8 text-xl md:my-0 my-7'>
                                        <Link href={link.link} className=
                                            {`${asPath === link?.link ? "text-ecolightgreen" : "text-[#000000]"} dark:sm:text-white dark:text-white hover:text-ecolightgreen dark:hover:text-ecolightgreen  duration-500 text-base capitalize font-medium`}
                                        >{link.name}</Link>
                                    </li>
                                ))
                            }
                            <div className={`${css["mobileLoginContainer"]} gap-5 mr-10`}>
                                <div className='md:mr-8 text-xl md:my-0 my-7'>
                                    <button className='border border-ecodarkgreen dark:border-white  rounded px-4 py-[2px] text-[#000000] dark:sm:text-white dark:text-white font-medium text-base hover:text-ecolightgreen dark:hover:text-ecolightgreen'>Login</button>
                                </div>
                                <div className=''>
                                    <button className='border border-ecodarkgreen dark:border-white rounded px-3 py-[2px] text-[#000000] dark:sm:text-white dark:text-white font-medium text-base hover:text-ecolightgreen dark:hover:text-ecolightgreen'>Sign Up</button>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className='flex justify-center items-center sm:flex-row flex-row-reverse'>
                    <div className="ml-4">
                        <button
                            className="flex flex-col h-12 rounded justify-center cursor-pointer md:hidden group"
                            onClick={() => setOpen(!open)}
                        >

                            <div
                                className={`${genericHamburgerLine} ${open
                                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100 my-1"
                                    : "opacity-50 group-hover:opacity-100 my-[2px]"
                                    }`}
                            />
                            <div
                                className={`${genericHamburgerLine} ${open ? "opacity-0 my-1" : "opacity-50 group-hover:opacity-100 my-[2px]"
                                    }`}
                            />
                            <div
                                className={`${genericHamburgerLine} ${open
                                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100 my-1"
                                    : "opacity-50 group-hover:opacity-100 my-[2px]"
                                    }`}
                            />
                        </button>
                    </div>
                    <div className={`${css["desktopLoginContainer"]} gap-5 mr-10`}>
                        <div className=''>
                            <button className='border border-ecodarkgreen dark:border-white  rounded px-4 py-[2px] text-[#000] font-medium text-base dark:text-white hover:text-ecolightgreen dark:hover:text-ecolightgreen'>Login</button>
                        </div>
                        <div className=''>
                            <button className='border border-ecodarkgreen dark:border-white rounded px-3 py-[2px] text-[#000] font-medium text-base dark:text-white hover:text-ecolightgreen dark:hover:text-ecolightgreen'>Sign Up</button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {currentTheme === 'dark' ? (
                            <button
                                className="bg-black-700 dark:bg-gray-50 hover:bg-gray-300 dark:hover:bg-gray-300 rounded-[50%] border-purple-400 border-2 sm:p-2 p-[3px]"
                                onClick={() => setTheme('light')}
                            >
                                {' '}
                                <img src="images/sun.svg" alt="logo"
                                    className="sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]"
                                />
                            </button>
                        ) : (
                            <button
                                className="bg-gray-100 rounded-[50%] border-purple-400 border-2 sm:p-2 p-[6px] hover:bg-gray-300"
                                onClick={() => setTheme('dark')}
                            >
                                <img src="images/moon.svg" alt="logo"
                                    className="sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]"
                                />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header