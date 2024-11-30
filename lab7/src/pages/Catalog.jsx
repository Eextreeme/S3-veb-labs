import CatalogProductCard from "../components/CatalogProductCard/CatalogProductCard";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import { products } from "../initialDatabase";

const Catalog = () => {
    return (
        <>
            <FilterMenu />
            <div className="flex justify-center mt-2">
                <div className="showroom grid grid-cols-3 gap-4">
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
