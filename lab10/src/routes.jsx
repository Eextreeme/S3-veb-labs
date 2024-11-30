import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home';
import Catalog from './pages/Catalog';
import ProductPage from './pages/Product';
import CartPage from './pages/Cart';
import axios from 'axios';

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
            const response = axios.get(`http://localhost:3001/products/${id}`).then(res => res.data)
            return response;
        },
        errorElement: <p>error</p>
    },
    {
        path: '/cart',
        element: <MainLayout>
            <CartPage />
        </MainLayout>
    }
]);
