import { useEffect, useState } from "react";
import CatalogProductCard from "../components/CatalogProductCard/CatalogProductCard";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import axios from "axios";
import Spinner from './../components/Spinner/Spinner'

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(res => res.data)
            .then(data => { setProducts(data); setIsLoading(false); })
    }, [])

    return (
        isLoading ?
        <Spinner /> :

        <>
            <FilterMenu
                onApply={() => {
                    const filterOrderInput = document.getElementById('sortOrder').value;
                    const searchValueInput = document.getElementById('searchInput').value;

                    axios.get(`http://localhost:3001/products?search=${searchValueInput}&filterOrder=${filterOrderInput}`)
                            .then(res => res.data)
                            .then(data => {
                                setIsLoading(false);
                                setProducts(data);
                            })
                            .catch(() => { })
                }}
            />
            <div className="flex justify-center">
                <div className="showroom grid grid-cols-3 gap-4 mt-[70px]">
                    {
                        products.map((product, idx) => {
                            return <CatalogProductCard item={product}/>
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Catalog;
