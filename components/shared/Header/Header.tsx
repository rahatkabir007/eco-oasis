import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import { useTheme } from 'next-themes';

interface Props {
}

const Header: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    let [open, setOpen] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    // const [mounted, setMounted] = useState(false);
    const [nav, setNav] = useState(false);

    //Tailwind Classes
    const genericHamburgerLine = `h-1 w-7  rounded-full bg-black transition ease transform duration-500`;

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

    let Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "BLOG'S", link: "/" },
        { name: "CONTACT", link: "/" },
    ];


    return (
        <div className={`w-full sticky top-0 left-0 ${nav ? 'bg-ecobglightblack' : 'bg-transparent'}`}>
            <div className={`flex items-center justify-between py-4 md:px-10 px-7 container-x ${nav ? 'bg-ecobglightblack' : 'bg-transparent'}`}>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1'>
                        Designer
                    </span>

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
                    <div>
                        <ul className={`md:flex md:items-center md:pb-0 sm:bg-transparent bg-white pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'}`}>
                            {
                                Links.map((link) => (
                                    <li key={link.name} className='md:mr-8 text-xl md:my-0 my-7'>
                                        <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500 dark:text-white '>{link.name}</a>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                    <div className="flex justify-center">
                        {currentTheme === 'dark' ? (
                            <button
                                className="bg-black-700 dark:bg-gray-50 hover:bg-gray-300 dark:hover:bg-gray-300 rounded-md border-purple-400 border-2 sm:p-2 p-[3px]"
                                onClick={() => setTheme('light')}
                            >
                                {' '}
                                <img src="images/sun.svg" alt="logo"
                                    className="sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]"
                                />
                            </button>
                        ) : (
                            <button
                                className="bg-gray-100 rounded-md border-purple-400 border-2 sm:p-2 p-[3px] hover:bg-gray-300"
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