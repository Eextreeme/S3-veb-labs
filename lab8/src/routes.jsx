import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../lab8/src/layouts/MainLayout';
import HomePage from '../../lab8/src/pages/Home';
import Catalog from './pages/Catalog';
import ProductPage from './pages/Product';
import { products } from './initialDatabase';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout>
            <HomePage />
        </MainLayout>,
    },
    {
        path: '/catalog',
        element: <MainLayout>
            <Catalog />
        </MainLayout>,
    },
    {
        path: '/catalog/:id',
        element: <MainLayout>
            <ProductPage />
        </MainLayout>,
        loader: ({ params }) => {
            const { id } = params;
            return products[id];
        },
        errorElement: <p>error</p>
    },
]);
