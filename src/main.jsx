import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './component/Home/Home.jsx';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './component/Layout/MainLayout.jsx';
import AllProducts from './component/AllProducts/AllProducts.jsx';
import AuthProvider from './component/Context/AuthProvider.jsx';
import Register from './component/pages/Register.jsx';
import MyProducts from './component/pages/MyProducts.jsx';
import MyBids from './component/pages/MyBids.jsx';
import ProductsDetails from './component/Home/ProductsDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        Component:Home,
      },
      {
        path:"/allproducts",
        Component:AllProducts
      },
      {
        path:"/register",
        Component:Register
      },
      {
        path:"/myproducts",
        element:<MyProducts></MyProducts>

      },
      {
        path:"/mybids",
        element:<MyBids></MyBids>
      },
      {
        path:"/productsdetails/:id",
        Component:ProductsDetails,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
