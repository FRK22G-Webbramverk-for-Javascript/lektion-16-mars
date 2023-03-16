import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './views/Home';
import About from './views/About';
import Error from './views/Error';
import Product from './views/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/om',
    element: <About />,
    errorElement: <Error />
  },
  {
    path: '/produkt/:title', // :title är ett valfritt namn som fungerar som en placeholder
    element: <Product />,
    errorElement: <Error />
  }
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={ router }/>
    </div>
  )
}

export default App
