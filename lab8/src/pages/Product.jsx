import { useLoaderData } from 'react-router-dom';
import SingleProductPage from '../components/ProductPage/SingleProductPage';
import BuyProductOptions from '../components/BuyProductOptions/BuyProductOptions';

const ProductPage = () => {
    const product = useLoaderData();

    return <>
        <SingleProductPage product={product} />
        <BuyProductOptions product={product}/>
    </>
}

export default ProductPage;
