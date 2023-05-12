import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../../src/state/StateController'
import styles from "../Category.module.css"
import Card from '../Card/Card';
import { IProducts } from '../../../../../interfaces/models';
import SectionHeader from '../../../../helpers/SectionHeader/SectionHeader';

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
                            <div className="mt-10">
                                <SectionHeader title={sub} fontSize="2rem" />
                            </div>
                            <div className='px-[3rem] md:px-0 py-[3rem] relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[2rem] gap-y-[4rem]'>
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