import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './Pages/Login/Login.jsx';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx';
import Root from './Pages/Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Register from './Components/Register/Register.jsx';
import ErrorElement from './Components/ErrorElement/ErrorElement.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';

const url = "https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:
    [
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch(url)
        
      },
      {
          path: '/login',
          element: <Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/item/:id',
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader:()=>fetch(url)
      }
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
