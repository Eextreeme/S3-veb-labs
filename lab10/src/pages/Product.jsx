import { useLoaderData } from 'react-router-dom';
import SingleProductPage from '../components/ProductPage/SingleProductPage';

const ProductPage = () => {
    const product = useLoaderData();

    return <>
        <SingleProductPage product={product} />
    </>
}

export default ProductPage;
