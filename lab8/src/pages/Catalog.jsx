import { useState } from "react";
import CatalogProductCard from "../components/CatalogProductCard/CatalogProductCard";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import { products } from "../initialDatabase";

const Catalog = () => {
    const [filterType, setFilterType] = useState('');
    const [filterOrder, setFilterOrder] = useState('');
    const [searchValue, setSeachValue] = useState('');

    const monthListenersSort = (a, b) => b.watchers - a.watchers;
    const ticketPriceSort = (a, b) => b.Price - a.Price;

    const sortedProducts = [...products];

    if (searchValue) {
        sortedProducts.length = 0;
        products.filter((el) => el.name.toLowerCase().includes(searchValue)).map((el) => sortedProducts.push(el))
    }
    if (filterType === 'Popular') sortedProducts.sort(monthListenersSort);
    if (filterType === 'Price') sortedProducts.sort(ticketPriceSort);
    if (filterOrder === 'From lower to bigger') sortedProducts.reverse();

    return (
        <>
            <FilterMenu
                onApply={() => {
                    const filterTypeInput = document.getElementById('sortBy');
                    const filterOrderInput = document.getElementById('sortOrder');
                    const searchValueInput = document.getElementById('searchInput');
                    setFilterType(filterTypeInput.value);
                    setFilterOrder(filterOrderInput.value);
                    setSeachValue(searchValueInput.value);
                }}
            />
            <div className="flex justify-center">
                <div className="showroom grid grid-cols-3 gap-4 mt-[70px]">
                    {
                        sortedProducts.map((product, idx) => {
                            return <CatalogProductCard item={product}/>
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Catalog;
