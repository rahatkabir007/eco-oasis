import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { IProducts } from '../../../../interfaces/models'
import { Jsondata } from '../../../../src/utils/Jsondata'
import SectionHeader from '../../../helpers/SectionHeader/SectionHeader'
import Card from './Card/Card'
import styles from "./Category.module.css"
import Subcategory from './Subcategory/Subcategory'

interface Props {
}

const Category: React.FC<Props> = (props) => {


    const router = useRouter();
    const { category } = router.query;
    const [subCategory, setSubCategory] = useState<Array<string>>([])
    const filteredProducts = Jsondata.products.filter((product) => {
        return (
            product.category.toLocaleLowerCase() === category
        )
    })
    console.log(filteredProducts);

    let arr: Array<string> = []
    useEffect(() => {
        for (let i = 0; i < filteredProducts.length; i++) {
            const subCategory = filteredProducts[i].subcategory
            console.log(subCategory);
            const unique = arr.includes(subCategory);
            if (!unique) {
                arr.push(subCategory)
            }
        }
        console.log(arr);
        setSubCategory(arr)
    }, [category])

    return (
        <>
            <div className='container-x'>
                <div className='my-2'>
                    <SectionHeader title='Products' fontSize="4rem" />
                    <div className='my-6'>
                        <Subcategory filteredProducts={filteredProducts} subCategory={subCategory} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category