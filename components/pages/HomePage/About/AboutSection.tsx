import React from 'react'


interface Props {
}

const AboutSection: React.FC<Props> = (props) => {


    return (
        <div className='container-x'>
            <div className='flex flex-col items-start gap-10 w-full my-8 md:my-14 px-7 lg:px-0'>
                <div>
                    <div>
                        <p className="text-[30px] text-[#165A3E] ">Overview</p>
                    </div>
                    <div className='mt-[13px] leading-[30px] flex flex-col gap-3'>
                        <p className="text-[15px] text-[#165A3E] dark:text-white text-justify">In the era of the Fifth Industrial Revolution, the growing importance of Eco-Friendly and Biodegradable products worldwide is increasing daily. In this age of globalization, climate change and various diseases affect people's Lifestyles. In this new normal-life living ways of people are being paid more attention to the use of environment-friendly products and natural agricultural foods. People are becoming more health-conscious and disciplined in livelihoods in all walks of life.
                        </p>
                        <p className="text-[15px] text-[#165A3E] dark:text-white text-justify">
                            Eco Oasis Limited has always dreamed of bridging customers’ Satisfaction with Happiness to decorate their Lifestyles with sustainable eco-friendly materials. We are endeavoring to source and Export Eco-friendly Lifestyle products like Jute & Cotton diversified products, various handicrafts made of Biodegradable and natural material, and Agro-based organic products with ensuring post-supply services to meet customer satisfaction. Eco Oasis Limited started its journey in March 2021 with the theme <span className='font-bold'>“To Sail Beyond the Sunset”</span> to sail on the Sea of this Globalization to ensure a safe and healthy journey for the next Generation.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="text-[30px] text-[#165A3E] ">Eco Oasis Limited: Who We Are</p>
                    </div>
                    <div className='mt-[13px] leading-[30px] flex flex-col gap-3 text-justify'>
                        <p className="text-[15px] text-[#165A3E] dark:text-white ">Eco Oasis Limited has embarked on a journey in 2021 to satisfy its customers, stakeholders, and business partners with this growing demand. With its versatile long experience in the export business, Eco Oasis Limited decided to source and export eco-friendly products made from biodegradable and natural materials like Jute, Cotton, Seagrass, Bamboo, Leather, etc.
                        </p>
                        <p className="text-[15px] text-[#165A3E] dark:text-white ">
                            Eco Oasis Limited shareholders’ expertise is widened in the field of Merchandising, Operations, supply chain, Human Capital management, enterprise project management, and logistics service have broadened the scope to deal with any business for its customers in a unified and befitting manner. Eco Oasis wants to be a true partner instead of a profit-aiming entity and wants to build a long-term business association toward its vision.
                        </p>
                        <p className="text-[15px] text-[#165A3E] dark:text-white">
                            Quality and on-time delivery is the prior commitment while the competitive price is the key strength of the business win of the company. Eco Oasis Limited always dreamed of "Sail beyond the sunset" which is the key to achieving our business vision.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection