import { useRouter } from 'next/router'
import React from 'react'
import { IProducts } from '../../../../interfaces/models'
import { Jsondata } from '../../../../src/utils/Jsondata'
import SectionHeader from '../../../helpers/SectionHeader/SectionHeader'
import Card from './Card/Card'
import styles from "./Category.module.css"

interface Props {
}

const Category: React.FC<Props> = (props) => {

    const router = useRouter();
    const { category } = router.query;
    return (
        <>
            <div className='container-x'>
                <div className='my-2'>
                    <SectionHeader title='Products' fontSize="4rem" />
                    <div className='p-12 relative grid grid-cols-3'>
                        {
                            Jsondata.products.map((item) => {
                                return <Card item={item} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category