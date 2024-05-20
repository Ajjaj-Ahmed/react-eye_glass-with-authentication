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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:
    [
      {
        path:'/',
        element:<Home></Home>
      },
      {
          path: '/login',
          element: <Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
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
