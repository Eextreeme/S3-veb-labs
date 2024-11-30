import ProductCard from '../../components/ProductCard/ProductCard';
import FilledButton from '../../components/Buttons/FilledButton';
import { products } from '../../initialDatabase';
import { useState } from 'react';

const CatalogPreview = () => {
    const [viewMoreStep, setViewMoreStep] = useState(0);
    return <>
        <div className="flex justify-center pb-4">
            <div className='grid grid-cols-4 gap-4'>
                {
                    products.slice(0, (viewMoreStep + 1) * 4).map((el, idx) => {
                        return <ProductCard key={idx} title={el.name} desc={el.description} img={el.img} productPageHref={`/catalog/${el.id}`}/>
                    })
                }
                {
                    (viewMoreStep + 1) * 4 > products.length ?
                    <ProductCard key={-1}
                    title="Хочете побачити всі товари?"
                    desc="Натисніть на картку, щоб побачити більше унікальної техніки або придбати товар, який змінить ваше життя!"
                    withoutCard={true}
                    productPageHref="/catalog"
                    className="text-white bg-gradient-to-tr from-green-500 to-teal-400" />
                    : null
                }
            </div>
        </div>
        {
            products.length > (viewMoreStep + 1) * 4 ?
            <div className="flex justify-center">
                <FilledButton name="View More" className="mx-auto"
                onClick={() => {
                    setViewMoreStep(viewMoreStep + 1)
                }}/>
            </div>
            :
            null
        }
    </>
}

export default CatalogPreview;
