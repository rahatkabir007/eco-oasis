import React from 'react'


interface Props {
}

const AboutSection: React.FC<Props> = (props) => {


    return (
        <div className='flex flex-col items-center text-center w-full p-4 md:p-0 sm:w-[80%] lg:w-[60%] mx-auto my-12 md:my-24'>
            <div>
                <p className="text-[30px] text-[#165A3E] ">Overview</p>
            </div>
            <div className='mt-[13px]'>
                <p className="text-[15px] text-[#165A3E] dark:text-white">In the era of the Fourth and Fifth Industrial Revolution, the growing importance of biodegradable and non-disposable products due to climate Change and globalization has extensively driven customer’s mindset and made psychological U turn to heathy environment aiming for a healthier life. Eco Oasis Limited always dreamed to <span className='font-bold'>"sail beyond the sunset"</span> to bridge between Customer’s choice, life style and healthy mindset. On this note, Eco Oasis Limited is endeavoring to source and produce eco-friendly products like Jute products, diversified jute products, handicrafts, Bamboo handicraft, agro-based organic products and post supply services to meet customized satisfaction. Started journey in 2021 with a mission to ensure Healthier Quality and on-time delivery is the commitment while the competitive price is the key strength of the Company Policy.</p>
            </div>
        </div>
    )
}

export default AboutSection