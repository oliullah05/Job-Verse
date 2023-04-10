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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"/applied_jobs",
        element: <div>JOBS</div>,
      },
      {
        path:"/blog",
        element: <div>Blog</div>,
      },
      {
        path:"/job",
        element:<SingleDetails></SingleDetails>,
      }
    ]
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
