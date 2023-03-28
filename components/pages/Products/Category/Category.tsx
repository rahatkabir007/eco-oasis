import { useRouter } from 'next/router'
import React from 'react'
import { IProducts } from '../../../../interfaces/models'
import styles from "./Category.module.css"

interface Props {
}

const Category: React.FC<Props> = (props) => {

    const router = useRouter();
    const { category } = router.query;
    return (
        <>
            <div>
                {category}
            </div>
        </>
    )
}

export default Category