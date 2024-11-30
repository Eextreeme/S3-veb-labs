import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes'
import { Provider } from 'react-redux';
import { store } from './stores/cart.store.js'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
