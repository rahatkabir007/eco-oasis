import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IProducts } from '../../../interfaces/models'
import { controller } from '../../../src/state/StateController'
import { Jsondata } from '../../../src/utils/Jsondata'

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
                setFilteredProducts(data.filter((product: IProducts) => {
                    return product.category.includes("All Products")
                }))
            })

    }, [])

    const handleProductsFilter = (item: string) => {
        setSelected(item)
        setTimeout(() => {
            if (item === 'All Products') {
                setFilteredProducts(products.filter((product) => product.category.includes("All Products")));
            } else {
                setFilteredProducts(products.filter((product) => product.category.includes(item)));
            }
        }, 500);
    }

    const handleChange = (e: any) => {
        const value = e.target.value;
        setSearch(value);
        setSelect(value);
    }
    const handleSearch = (e: any) => {
        e.preventDefault()
        // setFilteredProducts(products.filter((product) => {
        //     return product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        // }))
        setFilteredProducts(products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase())))
        if (select === "All Categories") {
            setFilteredProducts(products.filter((product) => product.category.includes("All Products")))
        }

    }


    return (
        <div className="container-x">
            <div className='flex flex-col px-2 md:px-20 mt-10'>
                <form className="flex" onClick={handleSearch}>
                    <div>
                        <input type="text" placeholder='Search' className="outline-none border-2 border-[#00AD7F] text-[#92B1A4] rounded-l-lg py-[7px] px-2 w-[160px] md:w-[421px] dark:bg-transparent dark:text-white" onChange={handleChange} />
                    </div>
                    <div>
                        <select onChange={handleChange} className="outline-none border-2 border-l-0 border-[#00AD7F] text-[#1c1c1c] text-sm py-[8.5px] px-2 w-[100px] md:w-[145px] dark:bg-transparent dark:text-white">
                            <option value="All Categories" selected className='text-[#1c1c1c] dark:bg-transparent dark:text-white'>All Categories</option>
                            {
                                Jsondata.productCategories.slice(1).map((item, ind) => {
                                    return (
                                        <option value={item} className='text-[#1c1c1c]'>{item}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <button type='submit' className="text-base bg-ecolightgreen text-white font-medium px-5 py-[8.5px] rounded-r-lg">
                            Search
                        </button>
                    </div>
                </form>
                <div className='flex flex-wrap gap-6 mt-8'>
                    {
                        Jsondata.productCategories.map((item, ind) => {
                            return (
                                <div>
                                    <button key={item} onClick={() => handleProductsFilter(item)} className={`${selected === item ? "bg-ecolightgreen text-white" : "bg-transparent"} text-sm  border border-[#92B1A4] dark:text-white px-5 py-[9px] rounded-lg`}>{item}</button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-16 py-6 px-6 md:py-16 md:px-32">
                    {
                        filteredProducts.length > 0 ? <>
                            {
                                filteredProducts.map((product, ind) => {
                                    return (
                                        <div className="flex justify-center items-center flex-col gap-y-3 bg-[#F7F7F7] py-10 rounded-lg">
                                            <div>
                                                <img src={product.image} alt="" className='w-[122px] h-[156px] object-cover' />
                                            </div>
                                            <div>
                                                <p className="text-[#3B3B3B] font-bold text-lg">{product.name}</p>
                                            </div>
                                            <div>
                                                <p className="text-[#3B3B3B] text-lg">${" "}{product.price}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </> :
                            <>
                                <div className="flex justify-center items-center py-10">
                                    <p className="text-ecolightgreen font-bold text-lg">No Products Match or Available</p>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Products