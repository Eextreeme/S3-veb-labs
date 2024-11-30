import ProductCard from '../../components/ProductCard/ProductCard';
import FilledButton from '../../components/Buttons/FilledButton';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './../../components/Spinner/Spinner'

const CatalogPreview = () => {
    const [viewMoreStep, setViewMoreStep] = useState(0);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(res => res.data)
            .then(data => {
                setIsLoading(false);
                setProducts(data);
            })
            .catch(() => {})
    }, [])

    return isLoading ? <Spinner /> : <>
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
