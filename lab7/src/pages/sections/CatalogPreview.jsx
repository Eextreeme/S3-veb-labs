import ProductCard from '../../components/ProductCard/ProductCard';
import FilledButton from '../../components/Buttons/FilledButton';
import { products } from '../../initialDatabase';

const CatalogPreview = () => {
    return <>
        <div className="flex gap-4 justify-center pb-4">
            {
                products.slice(0, 3).map((el, idx) => {
                    return <ProductCard key={idx} title={el.name} desc={el.description} img={el.img} />
                })
            }
        </div>
        <div className="flex justify-center">
            <FilledButton name="View More" className="mx-auto" href="/catalog" />
        </div>
    </>
}

export default CatalogPreview;
