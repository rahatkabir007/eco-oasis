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
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7'>
                        {
                            Jsondata.blogsData.map((item) => {
                                return (
                                    <div className="flex flex-col gap-y-4">
                                        <div>
                                            <img src={item.image} alt="" className='w-full' />
                                        </div>
                                        <div className='flex gap-x-3'>
                                            <span className="text-[13px] text-[#00AD7F] font-medium">{item.category}</span>
                                            <span className="text-[13px] text-[#8F8F8F]">{item.redingDuration}</span>
                                        </div>
                                        <div>
                                            <p className='text-xl text-[#121212] dark:text-white break-words'>{item.title}</p>
                                            <div>
                                                <a href="" className="text-[13px] text-[#8F8F8F]">Read the full blog..</a>
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
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7'>
                        {
                            Jsondata.blogsTrendingData.map((item) => {
                                return (
                                    <div className='flex gap-x-4'>
                                        <div>
                                            <img src={item.image} alt="" className='w-full h-full' />
                                        </div>
                                        <div className='flex flex-col gap-y-1 flex-1'>
                                            <div>
                                                <p className="text-[#020202] dark:text-white text-[17.3481px] font-medium">{item.title}</p>
                                            </div>
                                            <div>
                                                <p className="text-[#8F8F8F] text-[12px] break-words">{item.description}</p>
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