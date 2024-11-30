import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../lab7/src/layouts/MainLayout';
import HomePage from '../../lab7/src/pages/Home';
import Catalog from './pages/Catalog';

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
]);
