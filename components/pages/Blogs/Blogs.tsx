import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import { Jsondata } from '../../../src/utils/Jsondata'

interface Props {
}

const Blogs: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div className='container-x'>
            <div className="w-[85%] mx-auto flex flex-col gap-x-16">
                <div className="latest-section my-10">
                    <div className='mb-8'>
                        <p className="text-black dark:text-white text-2xl">Latest</p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10 md:gap-y-10'>
                        {
                            Jsondata.blogsData.map((item) => {
                                return (
                                    <div className="flex flex-col gap-y-4 shadow-sm rounded"
                                    >
                                        <div className='overflow-hidden cursor-pointer rounded'>
                                            <img src={item.image} alt="" className='bg-gray-400 w-full h-[280px] object-cover scale-[1] hover:scale-[1.3] transition-all duration-300' />
                                        </div>
                                        <div className='px-4 py-2'>
                                            <div className='flex gap-x-3'>
                                                <span className="text-[13px] text-[#00AD7F] font-medium">{item.category}</span>
                                                <span className="text-[13px] text-[#8F8F8F]">{item.redingDuration}</span>
                                            </div>
                                            <div>
                                                <p title={item.title} className='cursor-pointer text-xl text-[#121212] dark:text-white whitespace-nowrap overflow-hidden text-ellipsis'>{item.title}</p>
                                                <div className='mt-3'>
                                                    <a href={item.link} target='_blank' className="text-[13px] text-[#8F8F8F] hover:text-ecodarkgreen">Read the full blog..</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="trending-section my-10">
                    <div className='mb-8'>
                        <p className="text-black dark:text-white text-2xl">Trending</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10 md:gap-y-0'>
                        {
                            Jsondata.blogsTrendingData.map((item) => {
                                return (
                                    <div className='flex gap-x-4'>
                                        <div>
                                            <img src={item.image} alt="" className='w-[140px] h-[100px] bg-gray-400 object-cover' loading='lazy' />
                                        </div>
                                        <div className='flex flex-col gap-y-1 flex-1 justify-between'>
                                            <div>
                                                <p className="text-[#020202] dark:text-white text-[17.3481px] font-medium">{item.title}</p>
                                            </div>
                                            <div>
                                                {/* <p className="text-[#8F8F8F] text-[12px] break-words">{item.description}</p> */}
                                                <a href={item.link} target='_blank' className="text-[13px] text-[#8F8F8F] hover:text-ecodarkgreen">Read the full blog..</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="pagination-section">
                    {/* in future here will go pagination */}
                </div>
            </div>
        </div>
    )
}

export default Blogs