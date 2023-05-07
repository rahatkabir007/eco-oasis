import React from 'react'


interface Props {
}

const AboutSection: React.FC<Props> = (props) => {


    return (
        <div className='flex flex-col items-start text-start container-x my-12 md:my-24'>
            <div>
                <p className="text-[30px] text-[#165A3E] ">Eco Oasis Limited: Who We Are</p>
            </div>
            <div className='mt-[13px] leading-[30px]'>
                <p className="text-[15px] text-[#165A3E] dark:text-white ">In the era of the Fifth Industrial Revolution, the growing importance of Eco-Friendly and Biodegradable products worldwide is increasing daily. In this age of globalization, climate change and various diseases affect people's Lifestyles. In this new normal-life living ways of people are being paid more attention to the use of environment-friendly products and natural agricultural foods. People are becoming more health-conscious and disciplined in livelihoods in all walks of life.
                </p>
                <p className="text-[15px] text-[#165A3E] dark:text-white">
                    Eco Oasis Limited has always dreamed of bridging customers’ Satisfaction with Happiness to decorate their Lifestyles with sustainable eco-friendly materials. We are endeavoring to source and Export Eco-friendly Lifestyle products like Jute & Cotton diversified products, various handicrafts made of Biodegradable and natural material, and Agro-based organic products with ensuring post-supply services to meet customer satisfaction. Eco Oasis Limited started its journey in March 2021 with the theme <span className='font-bold'>“To Sail Beyond the Sunset”</span> to sail on the Sea of this Globalization to ensure a safe and healthy journey for the next Generation.
                </p>
            </div>
        </div>
    )
}

export default AboutSection