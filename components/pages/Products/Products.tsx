import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IProducts } from '../../../interfaces/models'
import { controller } from '../../../src/state/StateController'
import { Jsondata } from '../../../src/utils/Jsondata'
import SectionHeader from '../../helpers/SectionHeader/SectionHeader'
import styles from "./Products.module.css"
interface Props {
}

const Products: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    const [products, setProducts] = useState<Array<IProducts>>([])
    const [filteredProducts, setFilteredProducts] = useState<Array<IProducts>>([])
    const [selected, setSelected] = useState("All Products");
    const [search, setSearch] = useState("");
    const [select, setSelect] = useState("All Categories");


    useEffect(() => {

        fetch("/products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setFilteredProducts(data)
            })

    }, [])

    const handleProductsFilter = (item: string) => {
        setSelected(item)
        setTimeout(() => {
            if (item === 'All Products') {
                setFilteredProducts(products);
            } else {
                setFilteredProducts(products.filter((product) => product.category === item));
            }
        }, 500);
    }

    const handleChangeSearch = (e: any) => {
        const value = e.target.value;
        setSearch(value);
    }
    const handleChangeSelect = (e: any) => {
        const value = e.target.value;
        setSelect(value);
    }

    const handleSearch = (e: any) => {
        e.preventDefault()
        setFilteredProducts(products.filter((product) => {
            if (select === 'All Categories') {
                return product.name.toLowerCase().includes(search.toLowerCase())
            } else {
                return product.category === select && product.name.toLowerCase().includes(search.toLowerCase())
            }
        }))
    }


    return (
        <div className="container-x">
            <div className='my-1'>
                <SectionHeader title="Product Categories" fontSize="4rem" />
            </div>
            <div className='p-12 grid grid-cols-1 md:grid-cols-2  gap-y-20'>
                {
                    Jsondata.productCategories.map((item) => {
                        return (
                            <Link href={`/products/category/${item.url}`}>
                                <div className={`${styles["container"]} w-full h-[300px] sm:h-[400px] md:w-[600px] md:h-[400px]`}
                                    style={{
                                        backgroundImage: ` url(${item.image})`
                                    }}
                                >
                                    <div className={`${styles["overlay"]}`}>
                                        <div className={`${styles["items"]} ${styles["head"]}`}>
                                            <p>{item.category}</p>
                                            <hr />
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products