import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../../src/state/StateController'
import styles from "../Category.module.css"
import Card from '../Card/Card';
import { IProducts } from '../../../../../interfaces/models';

interface Props {
    filteredProducts: Array<IProducts>,
    subCategory: Array<string>
}

const Subcategory: React.FC<Props> = ({
    filteredProducts,
    subCategory
}) => {

    const states = useSelector(() => controller.states)

    return (
        <>
            {
                subCategory.map(sub => {
                    return (
                        <div>
                            <div className="bg-ecolightgreen flex justify-center items-center py-8 my-3 rounded">
                                <span className='text-3xl text-white'> {sub}</span>
                            </div>
                            <div className='px-[8rem] py-[3rem] relative grid grid-cols-1 md:grid-cols-3 gap-x-[6rem] gap-y-[4rem]'>
                                {
                                    filteredProducts.filter(prod => prod.subcategory === sub).map((item) => {
                                        return <Card item={item} />
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Subcategory