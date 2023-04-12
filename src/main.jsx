import React from 'react'

import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home';
import SingleDetails from './Components/SingleDetails/SingleDetails.jsx';
import Statistics from './Components/Statistics/statistics';
import Local from './Components/Local/Local';
import cartJobsLoader from './Loaders/cartJobsLoader';
import Blog from './Components/Blog/Blog';
import ErrorPage from './Components/ErrorPage/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"job/:paramsID",
        element:<SingleDetails></SingleDetails>
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
    
      {
        path:"/blog",
        element: <Blog></Blog>
      },
      // {
      //   path:"/job",
      //   element:<SingleDetails></SingleDetails>,
      // },
      {
        path:"/applied_jobs",
        element:<Local></Local>,
        loader: cartJobsLoader
      }
    ]
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
